import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-400/10 to-transparent rounded-full" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>Join 10,000+ early adopters</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display-xl mb-6 max-w-4xl mx-auto">
            Stop Fighting Your Mood.
            <br />
            <span className="text-primary-200">Start Flowing With It.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-body-lg text-primary-100 mb-12 max-w-2xl mx-auto">
            TruFlo is the first productivity app that adapts to how you feel, 
            not how much you hustle. Build habits that stick with AI-powered 
            mood recognition and gamified challenges.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="xl" 
              className="bg-white text-primary-700 hover:bg-primary-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={scrollToEarlyAccess}
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Early Access
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              leftIcon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </Button>
          </div>

          {/* Product Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-neutral-400">Interactive Demo Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-success-400 text-success-900 px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle">
              +15 XP
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-400 text-primary-900 px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle delay-500">
              Streak: 7 days
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;