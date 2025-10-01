import { Server, Cloud, GitBranch, Code2, ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from './ui/button';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onNavigate: (path: string) => void;
}

const iconMap = {
  'Operating System': Server,
  'Cloud': Cloud,
  'DevOps': GitBranch,
  'Scriptings': Code2,
};

export function CategoryCard({ title, description, icon: Icon, onNavigate }: CategoryCardProps) {
  return (
    <div
      className="rounded-xl p-8 border transition-all duration-300 group cursor-pointer"
      style={{
        backgroundColor: 'var(--color-surface-elevated)',
        borderColor: 'var(--color-border)',
      }}
      onClick={() => onNavigate('/courses')}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110"
        style={{
          backgroundColor: 'var(--color-code-bg)',
        }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: 'var(--color-primary)' }}
        />
      </div>

      {/* Title */}
      <h3
        className="mb-2"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mb-6 text-sm"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {description}
      </p>

      {/* CTA */}
      <Button
        variant="ghost"
        className="p-0 h-auto group-hover:gap-2 transition-all"
        style={{ color: 'var(--color-primary)' }}
      >
        <span>View Courses</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}

// Helper to get icon by category name
export function getCategoryIcon(category: string): LucideIcon {
  return iconMap[category as keyof typeof iconMap] || Code2;
}