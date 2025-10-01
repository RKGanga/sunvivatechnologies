import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { CourseCard } from '../components/CourseCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { categories, getCoursesByCategory, type CourseCategory } from '../data/courses';

interface CoursesProps {
  onNavigate: (path: string) => void;
}

export function Courses({ onNavigate }: CoursesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            All Courses
          </h1>
          <p
            className="mb-8 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Browse our complete catalog of courses across Operating Systems, Cloud, DevOps, and Scripting
          </p>

          {/* Search */}
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
              style={{ color: 'var(--color-text-muted)' }}
            />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full border"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
        </div>

        {/* Course Categories */}
        <Accordion type="multiple" defaultValue={categories} className="space-y-6">
          {categories.map(category => {
            const categoryCourses = getCoursesByCategory(category as CourseCategory);
            const filteredCourses = searchQuery
              ? categoryCourses.filter(course =>
                  course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  course.blurb.toLowerCase().includes(searchQuery.toLowerCase())
                )
              : categoryCourses;

            if (filteredCourses.length === 0 && searchQuery) return null;

            return (
              <AccordionItem
                key={category}
                value={category}
                className="border rounded-xl overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <AccordionTrigger
                  className="px-6 py-4 hover:no-underline"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  <div className="flex items-center gap-3">
                    <h3>{category}</h3>
                    <span
                      className="px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: 'var(--color-code-bg)',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {filteredCourses.map(course => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        onNavigate={onNavigate}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* No results */}
        {searchQuery && categories.every(cat => {
          const categoryCourses = getCoursesByCategory(cat as CourseCategory);
          return categoryCourses.filter(course =>
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.blurb.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0;
        }) && (
          <div
            className="text-center py-20"
          >
            <p
              className="mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              No courses found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="underline"
              style={{ color: 'var(--color-primary)' }}
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}