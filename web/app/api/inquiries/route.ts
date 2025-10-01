import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) throw new Error('Supabase env vars are missing')
  return createClient(url, key)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, course, message } = body || {}
    if (!name || !email) {
      return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 })
    }

    const supabase = getSupabaseClient()
    const { error } = await supabase.from('leads').insert({ name, email, phone, course, message })
    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save inquiry' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Inquiry error:', err)
    return NextResponse.json({ error: err.message || 'Unexpected error' }, { status: 500 })
  }
}
