import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { joinEarlyAccess } from '../hooks/joinEarlyAccess';
import landingVideo from '../assets/landing-video.mp4';

export default function TruFloLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { notify } = joinEarlyAccess();
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await notify(email);
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: '🧠',
      title: 'AI-Powered Insights',
      description: 'Smart task suggestions that adapt to your mood and energy levels throughout the day'
    },
    {
      icon: '🎯',
      title: 'Mood-Based Planning',
      description: 'Dynamic scheduling that matches tasks to your emotional state for maximum productivity'
    },
    {
      icon: '🏆',
      title: 'Gamified Progress',
      description: 'Streaks, badges, and rewards that make building productive habits genuinely enjoyable'
    },
    {
      icon: '👥',
      title: 'Community Challenges',
      description: 'Join challenges led by influencers and connect with like-minded productivity enthusiasts'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Deep insights into your patterns help you understand and optimize your productivity'
    },
    {
      icon: '🔄',
      title: 'Adaptive Learning',
      description: 'The app continuously learns from your behavior and improves its recommendations'
    }
  ];

  const testimonials = [
    {
      quote: "TruFlo completely changed how I approach my daily tasks. It's like having a personal productivity coach.",
      author: "Sarah Chen",
      role: "Product Designer"
    },
    {
      quote: "Finally, an app that understands that productivity isn't one-size-fits-all. Game changer.",
      author: "Marcus Rodriguez",
      role: "Software Engineer"
    },
    {
      quote: "The mood-based planning feature is revolutionary. I'm more productive than I've ever been.",
      author: "Emily Watson",
      role: "Marketing Manager"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg section-padding-lg relative">
        <div className="container-wide relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-hero text-white mb-8 animate-fade-in">
              Productivity that
              <br />
              <span className="gradient-text">adapts to you</span>
            </h1>
            <p className="text-large text-white/90 mb-12 max-w-3xl mx-auto animate-slide-up">
              The first productivity app that understands your mood to help you break free from distractions and build lasting, meaningful habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
              <Button
                size="xl"
                onClick={() => navigate('/signup')}
                className="text-xl px-12 py-5"
              >
                Start Free Trial
              </Button>
              <Button
                variant="secondary"
                size="xl"
                onClick={() => window.open('https://discord.gg/eZHfGJTRNh', '_blank', 'noopener,noreferrer')}
                className="text-xl px-12 py-5"
              >
                Join Community
              </Button>
            </div>

            {/* Hero Video/Image */}
            <div className="relative max-w-4xl mx-auto animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src={landingVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Trusted by thousands of productivity enthusiasts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
              <p className="text-gray-600 dark:text-gray-400">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">94%</div>
              <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">2.5M</div>
              <p className="text-gray-600 dark:text-gray-400">Tasks Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="section-padding-lg bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
              You're not broken.
              <br />
              <span className="gradient-text">Your tools are.</span>
            </h2>
            <p className="text-large text-gray-600 dark:text-gray-300">
              Traditional productivity apps treat everyone the same, ignoring the most important factor: how you feel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">😤</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Overwhelming Task Lists
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    You start with good intentions but lose motivation when faced with an endless list of tasks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">😞</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Guilt from Procrastination
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    You know you're avoiding important work but can't seem to break the cycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🤯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Decision Fatigue
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Everything feels urgent, but nothing feels important. You're paralyzed by choice.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card glass hover className="p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">📊</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    The Reality
                  </h3>
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Feel stuck in distractions</span>
                      <span className="font-bold text-red-500">94%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Existing solutions don't help</span>
                      <span className="font-bold text-orange-500">74%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Would try mood-based approach</span>
                      <span className="font-bold text-green-500">84%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding-lg bg-white dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Meet your new
              <br />
              <span className="gradient-text">productivity partner</span>
            </h2>
            <p className="text-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              TruFlo adapts to your emotional state, energy levels, and personal patterns to create a truly personalized productivity experience.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <Card key={index} hover glass className="text-center h-full">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What our users say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} glass className="text-center">
                <CardContent className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg hero-bg relative">
        <div className="container text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to unlock your
            <br />
            <span className="gradient-text">true potential?</span>
          </h2>
          <p className="text-large text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of others who are already building better habits and achieving more with TruFlo.
          </p>

          <div className="max-w-md mx-auto mb-12">
            <Card glass>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Start your free trial today
                </h3>
                {submitted ? (
                  <div className="text-center">
                    <div className="text-green-500 text-4xl mb-4">✓</div>
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      Thank you! Check your email for next steps.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-center"
                    />
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      size="lg"
                      className="w-full"
                    >
                      Get Started Free
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="xl"
              variant="secondary"
              onClick={() => navigate('/signup')}
              className="text-xl px-12 py-5"
            >
              Start Free Trial
            </Button>
            <Button
              size="xl"
              variant="secondary"
              onClick={() => window.open('https://discord.gg/eZHfGJTRNh', '_blank', 'noopener,noreferrer')}
              className="text-xl px-12 py-5"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}