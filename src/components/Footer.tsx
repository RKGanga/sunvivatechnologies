import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    courses: [
      { label: 'Operating System', path: '/courses' },
      { label: 'Cloud Computing', path: '/courses' },
      { label: 'DevOps', path: '/courses' },
      { label: 'Scripting', path: '/courses' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '#' },
      { label: 'Blog', path: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Cookie Policy', path: '#' },
      { label: 'Refund Policy', path: '#' },
    ],
  };

  return (
    <footer 
      className="border-t mt-auto"
      style={{ 
        backgroundColor: 'var(--color-surface-elevated)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-surface-hover)' }}
              >
                <Terminal 
                  className="w-5 h-5" 
                  style={{ color: 'var(--color-primary)' }}
                />
              </div>
              <span 
                className="font-semibold text-lg"
                style={{ color: 'var(--color-text-primary)' }}
              >
                CloudOps Academy
              </span>
            </div>
            <p 
              className="mb-4 max-w-sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Master Cloud, DevOps & Linux with hands-on training from industry experts. 
              Build the skills that matter.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@cloudopsacademy.com</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 
              className="mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Courses
            </h4>
            <ul className="space-y-2">
              {footerLinks.courses.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 
              className="mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 
              className="mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p 
            className="text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            © 2025 CloudOps Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
            ].map(social => (
              <button
                key={social.label}
                className="p-2 rounded-lg transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}