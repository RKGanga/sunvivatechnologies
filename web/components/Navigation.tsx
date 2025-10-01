"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Terminal } from 'lucide-react'
import { categories, getCoursesByCategory } from '@/data/courses'

type NavLink = {
  label: string
  path: string
  hasDropdown?: boolean
}

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showCoursesMenu, setShowCoursesMenu] = useState(false)

  const navLinks: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses', hasDropdown: true },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: 'rgba(11, 15, 20, 0.9)', borderColor: 'var(--color-border)' }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--color-surface-elevated)' }}>
              <Terminal className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
            </div>
            <span className="font-semibold text-lg" style={{ color: 'var(--color-text-primary)' }}>
              CloudOps Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => (link.hasDropdown ? setShowCoursesMenu(true) : undefined)}
                onMouseLeave={() => (link.hasDropdown ? setShowCoursesMenu(false) : undefined)}
              >
                <Link
                  href={link.path}
                  className="transition-colors py-2"
                  style={{ color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}
                >
                  {link.label}
                </Link>

                {/* Mega Menu for Courses */}
                {link.hasDropdown && showCoursesMenu && (
                  <div className="absolute left-0 top-full pt-2 w-[800px] -translate-x-1/3" style={{ zIndex: 100 }}>
                    <div
                      className="rounded-xl p-6 shadow-2xl border"
                      style={{
                        backgroundColor: 'var(--color-surface-elevated)',
                        borderColor: 'var(--color-border)',
                        boxShadow: 'var(--shadow-elevated)',
                      }}
                    >
                      <div className="grid grid-cols-4 gap-6">
                        {categories.map((category) => {
                          const categoryCourses = getCoursesByCategory(category)
                          return (
                            <div key={category}>
                              <h3
                                className="mb-3 px-3 py-1.5 rounded-lg"
                                style={{ color: 'var(--color-primary)', backgroundColor: 'var(--color-code-bg)' }}
                              >
                                {category}
                              </h3>
                              <div className="space-y-1">
                                {categoryCourses.map((course) => (
                                  <Link
                                    key={course.slug}
                                    href={`/courses/${course.slug}`}
                                    className="block w-full px-3 py-2 rounded-lg text-sm transition-colors"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)'
                                      e.currentTarget.style.color = 'var(--color-text-primary)'
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent'
                                      e.currentTarget.style.color = 'var(--color-text-secondary)'
                                    }}
                                  >
                                    {course.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )
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
            <button className="rounded-full p-2" style={{ color: 'var(--color-text-secondary)' }}>
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contact"
              className="rounded-full px-4 py-2"
              style={{ backgroundColor: 'var(--color-primary)', color: '#0B0F14' }}
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-4 py-3 transition-colors"
                style={{
                  color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  backgroundColor: isActive(link.path) ? 'var(--color-surface-elevated)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full rounded-full px-4 py-2"
                style={{ backgroundColor: 'var(--color-primary)', color: '#0B0F14' }}
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
