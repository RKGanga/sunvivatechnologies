import Link from 'next/link'
import { Clock, Signal, ArrowRight } from 'lucide-react'
import type { Course } from '@/data/courses'

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  const levelColors = {
    Beginner: { bg: '#0F172A', color: '#34D399' },
    Intermediate: { bg: '#0F172A', color: '#FBBF24' },
    Advanced: { bg: '#0F172A', color: '#A78BFA' },
  } as const

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="rounded-xl p-6 border transition-all duration-300 group cursor-pointer h-full flex flex-col"
      style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border)' }}
    >
      {/* Category */}
      <div className="mb-4 text-xs px-2 py-1 rounded-full w-fit" style={{ backgroundColor: 'var(--color-code-bg)', color: 'var(--color-text-secondary)' }}>
        {course.category}
      </div>

      {/* Title */}
      <div className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {course.title}
      </div>

      {/* Blurb */}
      <p className="mb-4 text-sm line-clamp-2 flex-grow" style={{ color: 'var(--color-text-secondary)' }}>
        {course.blurb}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}>
          <Signal className="w-4 h-4" />
          <span>{course.level}</span>
        </div>
        <div className="flex items-center gap-1.5" style={{ color: 'var(--color-text-muted)' }}>
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: levelColors[course.level].bg, color: levelColors[course.level].color }}>
          {course.level}
        </div>
        <div className="px-3 py-1 rounded-full text-xs" style={{ backgroundColor: 'var(--color-code-bg)', color: 'var(--color-text-secondary)' }}>
          {course.mode}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full flex items-center justify-between mt-auto text-sm" style={{ color: 'var(--color-primary)' }}>
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
