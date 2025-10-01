import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCourseBySlug } from '@/data/courses'
import { courses } from '@/data/courses'

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = getCourseBySlug(params.slug)
  if (!course) return notFound()

  return (
    <div className="container py-12">
      <div className="mb-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
        <Link href="/courses" className="underline">Courses</Link> / {course.title}
      </div>

      <h1 className="mb-2">{course.title}</h1>
      <div className="mb-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        {course.category} • {course.level} • {course.duration} • {course.mode}
      </div>

      <p className="mb-6 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>{course.overview}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="mb-3">What you'll learn</h2>
            <ul className="list-disc pl-6 space-y-1">
              {course.outcomes.map((o) => (
                <li key={o} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{o}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3">Course Modules</h2>
            <div className="space-y-4">
              {course.modules.map((m) => (
                <div key={m.id} className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-semibold mb-2">{m.title}</div>
                  {m.chips && (
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {m.chips.map((chip) => (
                        <span key={chip} className="text-xs px-2 py-1 rounded-full border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>{chip}</span>
                      ))}
                    </div>
                  )}
                  <ul className="list-disc pl-6 space-y-1">
                    {m.topics.map((t) => (
                      <li key={t} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3">Hands-on Labs</h2>
            <ul className="list-disc pl-6 space-y-1">
              {course.labs.map((lab) => (
                <li key={lab} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{lab}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3">FAQs</h2>
            <div className="space-y-4">
              {course.faqs.map((f) => (
                <div key={f.question} className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="font-semibold mb-1">{f.question}</div>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
            <div className="font-semibold mb-2">Ready to Enroll?</div>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Submit your details and our team will contact you with schedules and pricing.
            </p>
            <Link href={`/contact?course=${encodeURIComponent(course.title)}`} className="block text-center rounded-md px-4 py-2" style={{ background: 'var(--color-primary)', color: '#0B0F14' }}>
              Enroll Now
            </Link>
          </div>
          <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
            <div className="font-semibold mb-2">Prerequisites</div>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{course.prerequisites}</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
