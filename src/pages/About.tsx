import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const stats = [
    { label: 'Students Trained', value: '10,000+', icon: Users },
    { label: 'Courses Offered', value: '25+', icon: Award },
    { label: 'Success Rate', value: '95%', icon: TrendingUp },
    { label: 'Industry Partners', value: '50+', icon: Target },
  ];

  const trainers = [
    {
      name: 'Sarah Chen',
      role: 'Cloud Architecture Lead',
      certifications: 'AWS Solutions Architect, GCP Professional',
      experience: '12+ years in cloud infrastructure',
    },
    {
      name: 'Michael Rodriguez',
      role: 'DevOps Principal',
      certifications: 'CKA, CKAD, Jenkins Engineer',
      experience: '15+ years in DevOps and automation',
    },
    {
      name: 'Priya Sharma',
      role: 'Linux Systems Expert',
      certifications: 'RHCE, RHCA',
      experience: '10+ years in enterprise Linux',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(110, 231, 249, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
            About CloudOps Academy
          </h1>
          <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            We're on a mission to democratize cloud and DevOps education through hands-on, 
            practical training that prepares students for real-world challenges.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Our Mission & Approach
              </h2>
              <div className="space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  CloudOps Academy was founded on the belief that quality technical education 
                  should be accessible, practical, and career-focused. We bridge the gap between 
                  theoretical knowledge and real-world application.
                </p>
                <p>
                  Our hands-on approach ensures every student gains practical experience with 
                  the tools and technologies used by leading tech companies. From Linux 
                  administration to Kubernetes orchestration, we provide the skills that matter.
                </p>
                <p>
                  We partner with industry leaders to ensure our curriculum stays current with 
                  the latest trends and best practices in cloud computing, DevOps, and system administration.
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1676275774289-6cc2e0a0203d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTkyMDUwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.8)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-surface-elevated)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'var(--color-code-bg)' }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />
                </div>
                <div className="text-3xl mb-2" style={{ color: 'var(--color-primary)' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Meet Our Expert Trainers
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Learn from industry veterans with decades of combined experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map(trainer => (
              <div
                key={trainer.name}
                className="rounded-xl p-6 border text-center"
                style={{
                  backgroundColor: 'var(--color-surface-elevated)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  style={{
                    backgroundColor: 'var(--color-code-bg)',
                    border: '4px solid var(--color-primary)',
                  }}
                />
                <h3 className="mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {trainer.name}
                </h3>
                <p className="mb-3" style={{ color: 'var(--color-primary)' }}>
                  {trainer.role}
                </p>
                <div className="space-y-2 text-sm">
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    <strong>Certifications:</strong> {trainer.certifications}
                  </p>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    {trainer.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-surface-elevated)' }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
            Student Success Stories
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Our students have gone on to work at leading tech companies, startups, and 
            enterprises worldwide. Many have achieved industry certifications and significant 
            career advancement within months of completing our programs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { metric: '85%', label: 'Career advancement within 6 months' },
              { metric: '92%', label: 'Achieved certification on first attempt' },
              { metric: '4.8/5', label: 'Average student satisfaction rating' },
            ].map(item => (
              <div
                key={item.label}
                className="p-6 rounded-xl border"
                style={{
                  backgroundColor: 'var(--color-surface-bg)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="text-3xl mb-2" style={{ color: 'var(--color-primary)' }}>
                  {item.metric}
                </div>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Join our community of learners and take the first step toward your cloud and DevOps career
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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