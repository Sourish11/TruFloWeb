import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Modal, ModalHeader, ModalContent } from '../components/ui/Modal';
import { joinEarlyAccess } from '../hooks/joinEarlyAccess';
import landingVideo from '../assets/landing-video.mp4';

export default function TruFloLandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
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

  const handleGetEarlyAccess = () => {
    setShowWaitlistModal(true);
  };

  const handleCloseModal = () => {
    setShowWaitlistModal(false);
    setSubmitted(false);
    setEmail('');
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
          <div className="visual-hierarchy max-w-4xl mx-auto">
            <h1 className="hero-heading text-white mb-6 animate-fade-in drop-shadow-2xl">
              Unlock Your{' '}
              <span className="gradient-text-white animate-glow">
                Tru
              </span>{' '}
              Potential
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up drop-shadow-lg max-w-3xl">
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
                onClick={handleGetEarlyAccess}
                className="text-lg px-8 py-4 shadow-2xl"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <Modal isOpen={showWaitlistModal} onClose={handleCloseModal}>
        <Card className="glass-enhanced shadow-2xl border-white/30">
          <ModalHeader onClose={handleCloseModal}>
            <h3 className="text-xl font-semibold text-white drop-shadow-md">
              Join the Waitlist
            </h3>
          </ModalHeader>
          
          <ModalContent>
            {submitted ? (
              <div className="text-center py-4">
                <div className="text-green-400 mb-4 text-4xl drop-shadow-md">✓</div>
                <h4 className="text-lg font-semibold text-white mb-2">You're on the list!</h4>
                <p className="text-white/80 mb-6">
                  Thank you for joining our waitlist. You'll be among the first to know when TruFlo launches.
                </p>
                <Button
                  onClick={handleCloseModal}
                  variant="glass"
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-white/80 mb-6 text-center">
                  Be the first to experience mood-aware productivity. We'll notify you as soon as TruFlo is available.
                </p>
                
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleCloseModal}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      loading={isSubmitting}
                      className="flex-1"
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </form>
                
                <p className="text-xs text-white/60 text-center mt-4">
                  We respect your privacy. No spam, just updates about TruFlo.
                </p>
              </div>
            )}
          </ModalContent>
        </Card>
      </Modal>

      {/* Stats Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-4">
          <div className="content-grid content-grid-3 text-center">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 animate-fade-in glass-enhanced shadow-xl">
                <div className="text-3xl font-bold gradient-text-white mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <p className="text-white/90 drop-shadow-md">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="visual-hierarchy mb-16">
            <h2 className="page-title text-white mb-6 drop-shadow-2xl">
              You're not lazy. You're overwhelmed.
            </h2>
            <p className="text-lg text-white/90 drop-shadow-lg">
              Traditional productivity apps ignore the most important factor: how you feel.
            </p>
          </div>

          <div className="content-grid content-grid-2 items-center">
            <div className="content-wrapper">
              <Card className="p-6 hover glass-enhanced shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500/30 to-red-600/30 rounded-lg flex items-center justify-center border border-red-400/40 shadow-lg">
                    <span className="text-2xl drop-shadow-md">📉</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">
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
                    <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">
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
                    <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-md">
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
      <section id="features" className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="visual-hierarchy mb-16">
            <h2 className="page-title text-white mb-6 drop-shadow-2xl">
              How TruFlo Works
            </h2>
            <p className="text-lg text-white/90 drop-shadow-lg">
              We've reimagined productivity by putting your emotions at the center of the experience.
            </p>
          </div>

          <div className="content-grid content-grid-3">
            {features.map((feature, index) => (
              <Card key={index} hover className="h-full glass-enhanced shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-float drop-shadow-md">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 drop-shadow-md">
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
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="visual-hierarchy mb-16">
            <h2 className="page-title text-white mb-6 drop-shadow-2xl">
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
      <section className="section-spacing">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto p-12 glass-enhanced shadow-2xl">
            <div className="visual-hierarchy">
              <h2 className="page-title text-white mb-6 drop-shadow-2xl">
                Ready to Transform Your Productivity?
              </h2>
              <p className="text-lg text-white/90 mb-8 drop-shadow-lg">
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
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}