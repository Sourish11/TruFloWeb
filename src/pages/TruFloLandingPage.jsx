import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
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
      description: 'Smart task suggestions that adapt to your mood and energy levels'
    },
    {
      icon: '🎯',
      title: 'Mood-Based Planning',
      description: 'Dynamic scheduling that matches tasks to your emotional state'
    },
    {
      icon: '🏆',
      title: 'Gamified Progress',
      description: 'Streaks, badges, and rewards that make productivity fun'
    },
    {
      icon: '👥',
      title: 'Community Challenges',
      description: 'Join challenges led by influencers and connect with like-minded people'
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Understand your patterns and optimize your productivity'
    },
    {
      icon: '🔄',
      title: 'Adaptive Learning',
      description: 'The app learns from your behavior and improves over time'
    }
  ];

  const stats = [
    { number: '94%', label: 'Feel stuck in distractions' },
    { number: '74%', label: 'Say existing solutions don\'t help' },
    { number: '84%', label: 'Would try TruFlo' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Unlock Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tru
              </span>{' '}
              Potential
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
              The first productivity app that understands your mood to help you break free from distractions and build lasting habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Button
                size="lg"
                onClick={() => window.open('https://discord.gg/eZHfGJTRNh', '_blank', 'noopener,noreferrer')}
                className="text-lg px-8 py-4"
              >
                Join Beta Community
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/signup')}
                className="text-lg px-8 py-4"
              >
                Get Early Access
              </Button>
            </div>

            {/* Email Signup */}
            <Card className="max-w-md mx-auto glass-effect animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Join the Waitlist
                </h3>
                {submitted ? (
                  <div className="text-center">
                    <div className="text-green-600 dark:text-green-400 mb-2">✓</div>
                    <p className="text-green-600 dark:text-green-400">
                      Thank you! You'll be notified when we launch.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      className="w-full"
                    >
                      Notify Me
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              You're not lazy. You're overwhelmed.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Traditional productivity apps ignore the most important factor: how you feel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📉</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Task Abandonment
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    You start with good intentions but lose motivation halfway through.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">😞</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Guilt from Time-Wasting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    You know you're procrastinating but can't seem to stop.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Confusion Around Priorities
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Everything feels urgent, but nothing feels important.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <video
                src={landingVideo}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              How TruFlo Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've reimagined productivity by putting your emotions at the center of the experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes Us Different
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                      TruFlo
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Mood Recognition</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400">✅ Voice-based emotion check-ins</td>
                    <td className="px-6 py-4 text-center text-sm text-red-500 dark:text-red-400">❌ Ignored</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Personalized Challenges</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400">✅ Influencer-led + adaptive</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-500 dark:text-yellow-400">⚠ Static or solo tasks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">AI-Powered Routines</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400">✅ Learns your behavior daily</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-500 dark:text-yellow-400">⚠ Limited personalization</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Community Accountability</td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400">✅ Leaderboards, XP, streaks</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-500 dark:text-yellow-400">⚠ Mostly solo-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of others who are already building better habits with TruFlo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/signup')}
              className="text-lg px-8 py-4"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://discord.gg/eZHfGJTRNh', '_blank', 'noopener,noreferrer')}
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}