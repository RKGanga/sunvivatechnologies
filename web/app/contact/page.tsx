"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function ContactPage() {
  // Wrap the component using useSearchParams in Suspense as required by Next.js
  return (
    <Suspense fallback={<div className="container py-12">Loading…</div>}>
      <ContactPageInner />
    </Suspense>
  )
}

function ContactPageInner() {
  const search = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })

  useEffect(() => {
    const courseFromUrl = search.get('course')
    if (courseFromUrl) setForm((f) => ({ ...f, course: courseFromUrl }))
  }, [search])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSuccess(null)
    setError(null)
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry')
      setSuccess('Thanks! We have received your inquiry and will reach out shortly.')
      setForm({ name: '', email: '', phone: '', course: '', message: '' })
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="container py-12">
      <h1 className="mb-2">Contact Us</h1>
      <p className="mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
        Fill in the form and our team will get back to you with schedules, fees, and details.
      </p>

      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm">Name</label>
          <input
            className="w-full border rounded-md px-3 py-2"
            style={{ borderColor: 'var(--color-border)' }}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            className="w-full border rounded-md px-3 py-2"
            style={{ borderColor: 'var(--color-border)' }}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm">Phone</label>
          <input
            className="w-full border rounded-md px-3 py-2"
            style={{ borderColor: 'var(--color-border)' }}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="md:col-span-1">
          <label className="block mb-2 text-sm">Course Interested</label>
          <input
            className="w-full border rounded-md px-3 py-2"
            style={{ borderColor: 'var(--color-border)' }}
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm">Message</label>
          <textarea
            className="w-full border rounded-md px-3 py-2 h-32"
            style={{ borderColor: 'var(--color-border)' }}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button
            disabled={submitting}
            className="rounded-md px-4 py-2 disabled:opacity-50"
            style={{ background: 'var(--color-primary)', color: '#0B0F14' }}
            type="submit"
          >
            {submitting ? 'Submitting…' : 'Submit Inquiry'}
          </button>
          {success && <div className="text-sm" style={{ color: 'var(--color-primary)' }}>{success}</div>}
          {error && <div className="text-sm" style={{ color: '#f87171' }}>{error}</div>}
        </div>
      </form>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-semibold mb-1">Address</div>
          <p style={{ color: 'var(--color-text-secondary)' }}>Your institution address here</p>
        </div>
        <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-semibold mb-1">Email</div>
          <p style={{ color: 'var(--color-text-secondary)' }}>info@example.com</p>
        </div>
        <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-semibold mb-1">Phone</div>
          <p style={{ color: 'var(--color-text-secondary)' }}>+91-00000-00000</p>
        </div>
      </section>
    </div>
  )
}
