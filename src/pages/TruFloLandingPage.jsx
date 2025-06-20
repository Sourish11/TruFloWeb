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
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
              Unlock Your{' '}
              <span className="gradient-text-white animate-glow">
                Tru
              </span>{' '}
              Potential
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up drop-shadow-lg">
              The first productivity app that understands your mood to help you break free from distractions and build lasting habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <Button
                size="lg"
                onClick={() => window.open('https://discord.gg/eZHfGJTRNh', '_blank', 'noopener,noreferrer')}
                className="text-lg px-8 py-4 shadow-2xl"
              >
                Join Beta Community
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => navigate('/signup')}
                className="text-lg px-8 py-4 shadow-2xl"
              >
                Get Early Access
              </Button>
            </div>

            {/* Email Signup */}
            <Card className="max-w-md mx-auto animate-slide-up glass-enhanced shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-md">
                  Join the Waitlist
                </h3>
                {submitted ? (
                  <div className="text-center">
                    <div className="text-green-400 mb-2 text-2xl drop-shadow-md">✓</div>
                    <p className="text-green-400 drop-shadow-md">
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
                      className="w-full shadow-lg"
                      variant="glass"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 animate-fade-in glass-enhanced shadow-xl">
                <div className="text-4xl md:text-5xl font-bold gradient-text-white mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <p className="text-white/90 drop-shadow-md">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              You're not lazy. You're overwhelmed.
            </h2>
            <p className="text-xl text-white/90 drop-shadow-lg">
              Traditional productivity apps ignore the most important factor: how you feel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 hover glass-enhanced shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-lg flex items-center justify-center border border-red-400/40 shadow-lg">
                    <span className="text-2xl drop-shadow-md">📉</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                      Task Abandonment
                    </h3>
                    <p className="text-white/80 drop-shadow-sm">
                      You start with good intentions but lose motivation halfway through.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover glass-enhanced shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500/30 to-orange-600/30 rounded-lg flex items-center justify-center border border-orange-400/40 shadow-lg">
                    <span className="text-2xl drop-shadow-md">😞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                      Guilt from Time-Wasting
                    </h3>
                    <p className="text-white/80 drop-shadow-sm">
                      You know you're procrastinating but can't seem to stop.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover glass-enhanced shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 rounded-lg flex items-center justify-center border border-yellow-400/40 shadow-lg">
                    <span className="text-2xl drop-shadow-md">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                      Confusion Around Priorities
                    </h3>
                    <p className="text-white/80 drop-shadow-sm">
                      Everything feels urgent, but nothing feels important.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <Card className="p-4 glass-enhanced shadow-2xl">
                <video
                  src={landingVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg w-full shadow-lg"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              How TruFlo Works
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              We've reimagined productivity by putting your emotions at the center of the experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="h-full glass-enhanced shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-float drop-shadow-md">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 drop-shadow-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              What Makes Us Different
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden glass-enhanced shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white drop-shadow-md">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold gradient-text-white drop-shadow-md">
                      TruFlo
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white/60 drop-shadow-md">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="px-6 py-4 text-sm text-white drop-shadow-sm">Mood Recognition</td>
                    <td className="px-6 py-4 text-center text-sm text-green-400 drop-shadow-sm">✅ Voice-based emotion check-ins</td>
                    <td className="px-6 py-4 text-center text-sm text-red-400 drop-shadow-sm">❌ Ignored</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-white drop-shadow-sm">Personalized Challenges</td>
                    <td className="px-6 py-4 text-center text-sm text-green-400 drop-shadow-sm">✅ Influencer-led + adaptive</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-400 drop-shadow-sm">⚠ Static or solo tasks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-white drop-shadow-sm">AI-Powered Routines</td>
                    <td className="px-6 py-4 text-center text-sm text-green-400 drop-shadow-sm">✅ Learns your behavior daily</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-400 drop-shadow-sm">⚠ Limited personalization</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-white drop-shadow-sm">Community Accountability</td>
                    <td className="px-6 py-4 text-center text-sm text-green-400 drop-shadow-sm">✅ Leaderboards, XP, streaks</td>
                    <td className="px-6 py-4 text-center text-sm text-yellow-400 drop-shadow-sm">⚠ Mostly solo-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto p-12 glass-enhanced shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
              Join thousands of others who are already building better habits with TruFlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/signup')}
                className="text-lg px-8 py-4 shadow-2xl"
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="glass"
                onClick={() => window.open('https://discord.gg/eZHfGJTRNh', '_blank', 'noopener,noreferrer')}
                className="text-lg px-8 py-4 shadow-2xl"
              >
                Join Community
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}