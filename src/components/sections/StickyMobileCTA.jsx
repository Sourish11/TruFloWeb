import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Button from '../ui/Button';

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        setIsVisible(scrollPosition > heroBottom && !isDismissed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white border-t border-neutral-200 shadow-lg p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm font-semibold text-neutral-900">
              Ready to transform your productivity?
            </p>
            <p className="text-xs text-neutral-600">
              Join 10,000+ early adopters
            </p>
          </div>
          
          <Button
            size="sm"
            onClick={scrollToEarlyAccess}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Get Access
          </Button>
          
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-neutral-400 hover:text-neutral-600"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;