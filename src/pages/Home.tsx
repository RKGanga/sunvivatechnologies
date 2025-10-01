import { ArrowRight, CheckCircle, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CategoryCard, getCategoryIcon } from '../components/CategoryCard';
import { CourseCard } from '../components/CourseCard';
import { categories, getFeaturedCourses } from '../data/courses';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const featuredCourses = getFeaturedCourses();

  const categoryDescriptions = {
    'Operating System': 'Master Linux administration, Red Hat enterprise systems, and server management.',
    'Cloud': 'Learn AWS, Azure, and GCP—from fundamentals to advanced cloud architecture.',
    'DevOps': 'Build CI/CD pipelines with Docker, Kubernetes, Terraform, Jenkins, and more.',
    'Scriptings': 'Automate everything with Python, Bash, and PowerShell scripting.',
  };

  const howItWorks = [
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Expert-led courses with comprehensive curriculum and real-world scenarios.',
    },
    {
      icon: Users,
      title: 'Practice',
      description: 'Hands-on labs, projects, and exercises to build practical skills.',
    },
    {
      icon: Award,
      title: 'Get Certified',
      description: 'Prepare for industry certifications and advance your career.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(110, 231, 249, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-block px-4 py-2 rounded-full mb-6 border"
                style={{
                  backgroundColor: 'var(--color-code-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-primary)',
                }}
              >
                🚀 Hands-On Training for Modern Tech
              </div>
              <h1
                className="mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Master Cloud, DevOps & Linux with Hands-On Training
              </h1>
              <p
                className="mb-8 text-lg max-w-xl"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Build in-demand skills with expert instructors, real-world projects, and 
                industry-recognized certifications. From beginner to professional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#0B0F14',
                  }}
                  onClick={() => onNavigate('/courses')}
                >
                  Browse Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
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
              <div className="flex items-center gap-6 mt-8">
                {[
                  { label: '10K+', sublabel: 'Students' },
                  { label: '25+', sublabel: 'Courses' },
                  { label: '95%', sublabel: 'Success Rate' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div
                      className="text-2xl"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div
                className="rounded-2xl overflow-hidden border"
                style={{
                  borderColor: 'var(--color-border)',
                  boxShadow: 'var(--shadow-elevated)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1608742213509-815b97c30b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwdGVybWluYWx8ZW58MXx8fHwxNzU5MjI5NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Code terminal"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.8) saturate(1.2)' }}
                />
              </div>
              {/* Floating accent */}
              <div
                className="absolute -top-4 -right-4 w-72 h-72 rounded-full blur-3xl opacity-20"
                style={{
                  background: 'linear-gradient(135deg, #6EE7F9 0%, #A78BFA 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Explore Our Training Paths
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Choose from specialized tracks designed to take you from fundamentals to mastery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard
                key={category}
                title={category}
                description={categoryDescriptions[category as keyof typeof categoryDescriptions]}
                icon={getCategoryIcon(category)}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-surface-elevated)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2
                className="mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Popular Courses
              </h2>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Most enrolled courses from our catalog
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => onNavigate('/courses')}
              style={{ color: 'var(--color-primary)' }}
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.slice(0, 6).map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              How It Works
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              A proven path to success in cloud and DevOps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: 'var(--color-code-bg)',
                  }}
                >
                  <step.icon
                    className="w-8 h-8"
                    style={{ color: 'var(--color-primary)' }}
                  />
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm"
                  style={{
                    backgroundColor: 'var(--color-surface-elevated)',
                    color: 'var(--color-primary)',
                    border: '2px solid var(--color-primary)',
                  }}
                >
                  {index + 1}
                </div>
                <h3
                  className="mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {step.title}
                </h3>
                <p
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(110, 231, 249, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Unsure Where to Start?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Talk to our learning advisors and get personalized course recommendations 
            based on your goals and experience level.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
            }}
            onClick={() => onNavigate('/contact')}
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}