export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-4">About Us</h1>
      <p className="max-w-3xl mb-8" style={{ color: 'var(--color-text-secondary)' }}>
        We are an institution focused on delivering high-quality, hands-on training for Cloud, DevOps,
        Linux, and Scripting. Our expert trainers bring real-world experience with practical labs and
        career guidance to help you upskill and grow.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-semibold mb-1">Expert Trainers</div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Learn from professionals with deep industry experience.
          </p>
        </div>
        <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-semibold mb-1">Practical Labs</div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Hands-on exercises and projects for real-world skills.
          </p>
        </div>
        <div className="border rounded-lg p-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-semibold mb-1">Career Guidance</div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Personalized support for certifications and career growth.
          </p>
        </div>
      </section>
    </div>
  )
}
