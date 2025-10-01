import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { courses } from '../data/courses';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-md w-full mx-auto px-6 text-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              backgroundColor: 'var(--color-code-bg)',
            }}
          >
            <Send className="w-10 h-10" style={{ color: 'var(--color-primary)' }} />
          </div>
          <h2 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Thank You for Reaching Out!
          </h2>
          <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            We've received your message and will get back to you within 24 hours. 
            Check your email for a confirmation.
          </p>
          <div className="flex flex-col gap-3">
            <Button
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
              variant="outline"
              className="rounded-full"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-primary)',
              }}
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', course: '', message: '' });
              }}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Have questions about our courses? Want to discuss your learning path? 
            We're here to help you get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="rounded-xl p-8 border"
            style={{
              backgroundColor: 'var(--color-surface-elevated)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" style={{ color: 'var(--color-text-primary)' }}>
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="mt-2"
                  style={{
                    backgroundColor: 'var(--color-surface-bg)',
                    borderColor: errors.name ? 'var(--color-error)' : 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-error)' }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" style={{ color: 'var(--color-text-primary)' }}>
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-2"
                  style={{
                    backgroundColor: 'var(--color-surface-bg)',
                    borderColor: errors.email ? 'var(--color-error)' : 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-error)' }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" style={{ color: 'var(--color-text-primary)' }}>
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="mt-2"
                  style={{
                    backgroundColor: 'var(--color-surface-bg)',
                    borderColor: errors.phone ? 'var(--color-error)' : 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-error)' }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Course Select */}
              <div>
                <Label htmlFor="course" style={{ color: 'var(--color-text-primary)' }}>
                  Course Interested In *
                </Label>
                <Select value={formData.course} onValueChange={(value) => handleChange('course', value)}>
                  <SelectTrigger
                    className="mt-2"
                    style={{
                      backgroundColor: 'var(--color-surface-bg)',
                      borderColor: errors.course ? 'var(--color-error)' : 'var(--color-border)',
                      color: formData.course ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                    }}
                  >
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map(course => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.course && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-error)' }}>
                    {errors.course}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" style={{ color: 'var(--color-text-primary)' }}>
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="mt-2"
                  rows={4}
                  style={{
                    backgroundColor: 'var(--color-surface-bg)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)',
                  }}
                  placeholder="Tell us about your learning goals..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: '#0B0F14',
                }}
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Other Ways to Reach Us
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'info@cloudopsacademy.com',
                    subtext: 'We typically respond within 24 hours',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (555) 123-4567',
                    subtext: 'Mon-Fri, 9AM-6PM PST',
                  },
                  {
                    icon: MapPin,
                    label: 'Address',
                    value: '123 Tech Street, San Francisco, CA 94105',
                    subtext: 'Visit us during business hours',
                  },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex gap-4 p-6 rounded-xl border"
                    style={{
                      backgroundColor: 'var(--color-surface-elevated)',
                      borderColor: 'var(--color-border)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-code-bg)' }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <h3 className="mb-1" style={{ color: 'var(--color-text-primary)' }}>
                        {item.label}
                      </h3>
                      <p className="mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                        {item.value}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="p-8 rounded-xl border"
              style={{
                backgroundColor: 'var(--color-surface-elevated)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Browse All Courses', path: '/courses' },
                  { label: 'About Us', path: '/about' },
                  { label: 'FAQ', path: '#' },
                ].map(link => (
                  <button
                    key={link.label}
                    onClick={() => onNavigate(link.path)}
                    className="block w-full text-left transition-colors"
                    style={{ color: 'var(--color-text-secondary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                  >
                    → {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}