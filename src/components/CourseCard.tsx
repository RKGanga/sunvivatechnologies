import { Clock, Signal, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  onNavigate: (path: string) => void;
}

export function CourseCard({ course, onNavigate }: CourseCardProps) {
  const levelColors = {
    Beginner: { bg: '#0F172A', color: '#34D399' },
    Intermediate: { bg: '#0F172A', color: '#FBBF24' },
    Advanced: { bg: '#0F172A', color: '#A78BFA' },
  };

  return (
    <div
      className="rounded-xl p-6 border transition-all duration-300 group cursor-pointer h-full flex flex-col"
      style={{
        backgroundColor: 'var(--color-surface-elevated)',
        borderColor: 'var(--color-border)',
      }}
      onClick={() => onNavigate(`/course/${course.slug}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Category Badge */}
      <div className="mb-4">
        <Badge
          variant="outline"
          className="border-0"
          style={{
            backgroundColor: 'var(--color-code-bg)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {course.category}
        </Badge>
      </div>

      {/* Title */}
      <h3
        className="mb-2"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {course.title}
      </h3>

      {/* Blurb */}
      <p
        className="mb-4 text-sm line-clamp-2 flex-grow"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {course.blurb}
      </p>

      {/* Meta Info */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div
          className="flex items-center gap-1.5"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <Signal className="w-4 h-4" />
          <span>{course.level}</span>
        </div>
        <div
          className="flex items-center gap-1.5"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div
          className="px-3 py-1 rounded-full text-xs"
          style={{
            backgroundColor: levelColors[course.level].bg,
            color: levelColors[course.level].color,
          }}
        >
          {course.level}
        </div>
        <div
          className="px-3 py-1 rounded-full text-xs"
          style={{
            backgroundColor: 'var(--color-code-bg)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {course.mode}
        </div>
      </div>

      {/* CTA */}
      <Button
        variant="ghost"
        className="w-full justify-between mt-auto group-hover:gap-3 transition-all"
        style={{ color: 'var(--color-primary)' }}
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}