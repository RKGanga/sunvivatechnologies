import { useState } from 'react';
import { Menu, X, Search, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { categories, getCoursesByCategory } from '../data/courses';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses', hasDropdown: true },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <nav 
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ 
        backgroundColor: 'rgba(11, 15, 20, 0.9)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 group"
          >
            <div 
              className="p-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-surface-elevated)' }}
            >
              <Terminal 
                className="w-5 h-5 transition-colors" 
                style={{ color: 'var(--color-primary)' }}
              />
            </div>
            <span 
              className="font-semibold text-lg"
              style={{ color: 'var(--color-text-primary)' }}
            >
              CloudOps Academy
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setShowCoursesMenu(true)}
                onMouseLeave={() => link.hasDropdown && setShowCoursesMenu(false)}
              >
                <button
                  onClick={() => !link.hasDropdown && onNavigate(link.path)}
                  className="transition-colors py-2"
                  style={{
                    color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  }}
                >
                  {link.label}
                </button>

                {/* Mega Menu for Courses */}
                {link.hasDropdown && showCoursesMenu && (
                  <div 
                    className="absolute left-0 top-full pt-2 w-[800px] -translate-x-1/3"
                    style={{ zIndex: 100 }}
                  >
                    <div 
                      className="rounded-xl p-6 shadow-2xl border"
                      style={{ 
                        backgroundColor: 'var(--color-surface-elevated)',
                        borderColor: 'var(--color-border)',
                        boxShadow: 'var(--shadow-elevated)'
                      }}
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {categories.map(category => {
                          const categoryCourses = getCoursesByCategory(category);
                          return (
                            <div key={category}>
                              <h3 
                                className="mb-3 px-3 py-1.5 rounded-lg"
                                style={{ 
                                  color: 'var(--color-primary)',
                                  backgroundColor: 'var(--color-code-bg)'
                                }}
                              >
                                {category}
                              </h3>
                              <div className="space-y-1">
                                {categoryCourses.map(course => (
                                  <button
                                    key={course.slug}
                                    onClick={() => {
                                      onNavigate(`/course/${course.slug}`);
                                      setShowCoursesMenu(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
                                    style={{
                                      color: 'var(--color-text-secondary)',
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                                      e.currentTarget.style.color = 'var(--color-text-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                                    }}
                                  >
                                    {course.title}
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => onNavigate('/contact')}
              className="rounded-full"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#0B0F14',
              }}
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden py-4 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 transition-colors"
                style={{
                  color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  backgroundColor: isActive(link.path) ? 'var(--color-surface-hover)' : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-4">
              <Button
                onClick={() => {
                  onNavigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full rounded-full"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: '#0B0F14',
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}