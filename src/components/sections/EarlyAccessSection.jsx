import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Gift } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Badge from '../ui/Badge';

const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  const benefits = [
    "First access to TruFlo beta",
    "50% off premium features for life",
    "Exclusive community Discord access",
    "Direct feedback line to founders"
  ];

  if (isSubmitted) {
    return (
      <section id="early-access" className="py-24 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-300" />
            <h2 className="text-display-md mb-4">
              Welcome to the TruFlo Family! 🎉
            </h2>
            <p className="text-body-lg text-primary-100 mb-8">
              You're officially on the early access list. We'll send you an invite 
              as soon as TruFlo is ready for beta testing.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ul className="text-left space-y-2 text-primary-100">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  Check your email for a welcome message
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  Join our Discord community
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  Get beta access in 2-3 weeks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="early-access" className="py-24 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-12">
            <Badge variant="outline" size="lg" className="border-white/30 text-white mb-4">
              <Gift className="w-4 h-4 mr-2" />
              Limited Time Offer
            </Badge>
            <h2 className="text-display-lg mb-6">
              Get <span className="text-primary-200">Early Access</span> to TruFlo
            </h2>
            <p className="text-body-lg text-primary-100 max-w-2xl mx-auto">
              Be among the first to experience productivity that flows with your mood. 
              Join 10,000+ early adopters and get exclusive benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Early Access Benefits:
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4 text-white">
                    <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
                  <span className="text-white font-semibold">Beta launching in 3 weeks</span>
                </div>
                <p className="text-primary-100 text-sm">
                  Limited spots available. Join now to secure your place in line.
                </p>
              </div>
            </div>

            {/* Email Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Reserve Your Spot
                  </h3>
                  <p className="text-neutral-600">
                    Enter your email to get early access and exclusive updates.
                  </p>
                </div>

                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="w-5 h-5" />}
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  loading={isLoading}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Early Access
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  By signing up, you agree to our{' '}
                  <a href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" className="text-primary-600 hover:underline">
                    Terms of Service
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;