import { useState } from 'react';
import { Download, Clock, Signal, Monitor, CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { getCourseBySlug, type Course } from '../data/courses';

interface CourseDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function CourseDetail({ slug, onNavigate }: CourseDetailProps) {
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 style={{ color: 'var(--color-text-primary)' }}>Course not found</h2>
          <Button
            onClick={() => onNavigate('/courses')}
            className="mt-4"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#0B0F14',
            }}
          >
            Browse All Courses
          </Button>
        </div>
      </div>
    );
  }

  const levelColors = {
    Beginner: '#34D399',
    Intermediate: '#FBBF24',
    Advanced: '#A78BFA',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-12 border-b"
        style={{
          backgroundColor: 'var(--color-surface-elevated)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-4 text-sm">
                <button
                  onClick={() => onNavigate('/')}
                  style={{ color: 'var(--color-text-muted)' }}
                  className="hover:underline"
                >
                  Home
                </button>
                <span style={{ color: 'var(--color-text-muted)' }}>/</span>
                <button
                  onClick={() => onNavigate('/courses')}
                  style={{ color: 'var(--color-text-muted)' }}
                  className="hover:underline"
                >
                  Courses
                </button>
                <span style={{ color: 'var(--color-text-muted)' }}>/</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>{course.title}</span>
              </div>

              {/* Category Badge */}
              <Badge
                variant="outline"
                className="mb-4 border-0"
                style={{
                  backgroundColor: 'var(--color-code-bg)',
                  color: 'var(--color-primary)',
                }}
              >
                {course.category}
              </Badge>

              {/* Title */}
              <h1
                className="mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {course.title}
              </h1>

              {/* Blurb */}
              <p
                className="mb-6 text-lg"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {course.blurb}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Signal className="w-5 h-5" style={{ color: levelColors[course.level] }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{ color: 'var(--color-text-muted)' }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5" style={{ color: 'var(--color-text-muted)' }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{course.mode}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#0B0F14',
                  }}
                  onClick={() => onNavigate('/contact')}
                >
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Syllabus
                </Button>
              </div>
            </div>

            {/* Sticky Enrollment Card */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: 'var(--color-surface-bg)',
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h3 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Course Details
                </h3>
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Level', value: course.level },
                    { label: 'Duration', value: course.duration },
                    { label: 'Mode', value: course.mode },
                    { label: 'Prerequisites', value: course.prerequisites },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between">
                      <span style={{ color: 'var(--color-text-muted)' }}>{item.label}:</span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full rounded-full mb-3"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#0B0F14',
                  }}
                  onClick={() => onNavigate('/contact')}
                >
                  Enroll Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-full"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  onClick={() => onNavigate('/contact')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList
              className="grid w-full grid-cols-5 mb-8 rounded-full p-1"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
              }}
            >
              <TabsTrigger value="overview" className="rounded-full">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="rounded-full">Curriculum</TabsTrigger>
              <TabsTrigger value="labs" className="rounded-full">Labs</TabsTrigger>
              <TabsTrigger value="certification" className="rounded-full">Certification</TabsTrigger>
              <TabsTrigger value="faqs" className="rounded-full">FAQs</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Course Overview
                </h2>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  {course.overview}
                </p>
              </div>

              <div>
                <h3 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  What You'll Learn
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--color-primary)' }}
                      />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Who This Course Is For
                </h3>
                <div className="space-y-3">
                  {course.whoFor.map((person, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--color-secondary)' }}
                      />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{person}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum">
              <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Course Curriculum
              </h2>
              <Accordion type="multiple" className="space-y-4">
                {course.modules.map((module, index) => (
                  <AccordionItem
                    key={module.id}
                    value={module.id}
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
                      <div className="flex items-center gap-4 flex-1 text-left">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: 'var(--color-code-bg)',
                            color: 'var(--color-primary)',
                          }}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{module.title}</span>
                          </div>
                          {module.chips && (
                            <div className="flex gap-2 mt-2">
                              {module.chips.map(chip => (
                                <span
                                  key={chip}
                                  className="px-2 py-1 rounded text-xs"
                                  style={{
                                    backgroundColor: 'var(--color-code-bg)',
                                    color: 'var(--color-text-muted)',
                                  }}
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <ul className="space-y-2 ml-12">
                        {module.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="flex gap-2"
                            style={{ color: 'var(--color-text-secondary)' }}
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: 'var(--color-primary)' }}
                            />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            {/* Labs Tab */}
            <TabsContent value="labs">
              <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Hands-On Labs & Projects
              </h2>
              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                Apply your knowledge with real-world projects and hands-on labs designed to build practical skills.
              </p>
              <div className="grid gap-4">
                {course.labs.map((lab, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl border flex gap-4"
                    style={{
                      backgroundColor: 'var(--color-surface-elevated)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: 'var(--color-code-bg)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p style={{ color: 'var(--color-text-primary)' }}>{lab}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Certification Tab */}
            <TabsContent value="certification">
              <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Certification & Career Path
              </h2>
              <div
                className="p-8 rounded-xl border"
                style={{
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  {course.certification}
                </p>
              </div>
            </TabsContent>

            {/* FAQs Tab */}
            <TabsContent value="faqs">
              <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {course.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border rounded-xl overflow-hidden"
                    style={{
                      backgroundColor: 'var(--color-surface-elevated)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <AccordionTrigger
                      className="px-6 py-4 hover:no-underline text-left"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p style={{ color: 'var(--color-text-secondary)' }}>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-12 border-t"
        style={{
          backgroundColor: 'var(--color-surface-elevated)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Ready to Get Started?
          </h2>
          <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            Join thousands of students building their cloud and DevOps careers
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#0B0F14',
              }}
              onClick={() => onNavigate('/contact')}
            >
              Enroll Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
              onClick={() => onNavigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}