import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import EarlyAccessSection from '../components/sections/EarlyAccessSection';
import StickyMobileCTA from '../components/sections/StickyMobileCTA';

const NewLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <SocialProofSection />
      <EarlyAccessSection />
      <StickyMobileCTA />
    </div>
  );
};

export default NewLandingPage;