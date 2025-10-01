import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Code2, Cloud, GitBranch, Server } from 'lucide-react'

interface CategoryCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
}

export function CategoryCard({ title, description, icon: Icon, href = '/courses' }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="rounded-xl p-8 border transition-all duration-300 group cursor-pointer block"
      style={{ backgroundColor: 'var(--color-surface-elevated)', borderColor: 'var(--color-border)' }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110" style={{ backgroundColor: 'var(--color-code-bg)' }}>
        <Icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
      </div>
      <h3 className="mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {title}
      </h3>
      <p className="mb-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        {description}
      </p>
      <div className="inline-flex items-center gap-1 text-sm" style={{ color: 'var(--color-primary)' }}>
        <span>View Courses</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

const iconMap = {
  'Operating System': Server,
  Cloud: Cloud,
  DevOps: GitBranch,
  Scriptings: Code2,
}

export function getCategoryIcon(category: string): LucideIcon {
  return iconMap[category as keyof typeof iconMap] || Code2
}
