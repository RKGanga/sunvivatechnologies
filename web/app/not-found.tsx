import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="mb-2">Page not found</h1>
      <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="rounded-md px-4 py-2" style={{ background: 'var(--color-primary)', color: '#0B0F14' }}>
        Go Home
      </Link>
    </div>
  )
}
