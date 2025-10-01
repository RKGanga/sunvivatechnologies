import { AlertCircle, Home, Search } from 'lucide-react';
import { Button } from '../components/ui/button';

interface NotFoundProps {
  onNavigate: (path: string) => void;
}

export function NotFound({ onNavigate }: NotFoundProps) {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Browse Courses', path: '/courses' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-2xl w-full mx-auto px-6 text-center">
        {/* 404 Icon */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{
            backgroundColor: 'var(--color-code-bg)',
          }}
        >
          <AlertCircle className="w-12 h-12" style={{ color: 'var(--color-error)' }} />
        </div>

        {/* Error Code */}
        <div
          className="text-8xl mb-4"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          404
        </div>

        {/* Message */}
        <h1 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
          Page Not Found
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="rounded-full"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#0B0F14',
            }}
            onClick={() => onNavigate('/')}
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-primary)',
            }}
            onClick={() => onNavigate('/courses')}
          >
            <Search className="w-5 h-5 mr-2" />
            Browse Courses
          </Button>
        </div>

        {/* Quick Links */}
        <div
          className="p-6 rounded-xl border inline-block"
          style={{
            backgroundColor: 'var(--color-surface-elevated)',
            borderColor: 'var(--color-border)',
          }}
        >
          <h3 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Quick Links
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map(link => (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className="px-4 py-2 rounded-lg transition-colors text-left"
                style={{
                  color: 'var(--color-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}