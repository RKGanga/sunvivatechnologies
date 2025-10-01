import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedCourses } from '@/data/courses'
import CourseCard from '@/components/CourseCard'

export default function HomePage() {
  const featured = getFeaturedCourses()
  return (
    <div>
      {/* Hero Section */}
      <section className="container py-10">
        <div
          className="relative overflow-hidden rounded-2xl bg-[#191c20]"
          style={{ boxShadow: '0 1px 0 0 rgba(255,255,255,0.06) inset' }}
        >
          {/* Background Image */}
          <div className="relative h-[360px] md:h-[420px] lg:h-[480px]">
            <Image
              src="/Homepage.png"
              alt="Training workspace"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-12 lg:px-16">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Elevate Your IT Career with Expert Training
                </h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl text-neutral-200 max-w-2xl">
                  Gain in-demand skills through practical labs and career guidance from industry-leading professionals.
                </p>
                <div className="mt-8">
                  <Link
                    href="/courses"
                    className="inline-block rounded-md bg-white text-black font-medium px-5 py-3 shadow hover:shadow-md transition"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--color-text-primary)' }}>Why Choose Us?</h2>
        <p className="text-base md:text-lg mb-8 max-w-3xl" style={{ color: 'var(--color-text-secondary)' }}>
          Our institute is dedicated to providing top‑tier IT training that prepares you for success in the tech industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div className="rounded-xl border p-6 bg-[color:var(--color-surface-elevated,transparent)]" style={{ borderColor: 'var(--color-border)' }}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              {/* user icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Expert Trainers</h3>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Learn from seasoned IT professionals with extensive industry experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border p-6 bg-[color:var(--color-surface-elevated,transparent)]" style={{ borderColor: 'var(--color-border)' }}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              {/* flask icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12"/><path d="M9 2v6l-7 9a2 2 0 0 0 1.6 3h16.8A2 2 0 0 0 22 17l-7-9V2"/></svg>
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Practical Labs</h3>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Hands‑on training with real‑world projects and state‑of‑the‑art labs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border p-6 bg-[color:var(--color-surface-elevated,transparent)]" style={{ borderColor: 'var(--color-border)' }}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
              {/* briefcase icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/></svg>
            </div>
            <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Career Guidance</h3>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Personalized career coaching and placement assistance to help you land your dream job.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="mb-2">Popular Courses</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Most enrolled courses from our catalog</p>
            </div>
            <Link href="/courses" className="text-sm" style={{ color: 'var(--color-primary)' }}>View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <h2 className="mb-4">Unsure Where to Start?</h2>
        <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>Talk to our learning advisors and get personalized recommendations.</p>
        <Link href="/contact" className="rounded-full px-4 py-2 border" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>Schedule a Consultation</Link>
      </section>
    </div>
  )
}
