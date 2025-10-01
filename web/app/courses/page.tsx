import Link from 'next/link'
import { categories, courses } from '@/data/courses'
import type { CourseCategory } from '@/data/courses'
import CourseCard from '@/components/CourseCard'

export const dynamic = 'force-static'

export default function CoursesPage() {
  const grouped = categories.map((cat: CourseCategory) => ({
    cat,
    items: courses.filter((c) => c.category === cat),
  }))

  return (
    <div className="container py-12">
      <h1 className="mb-6">Courses</h1>
      <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
        Explore categories and choose a course to view detailed curriculum.
      </p>

      <div className="space-y-8">
        {grouped.map(({ cat, items }) => (
          <section key={cat}>
            <h2 className="mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
