import { MessageSquare, Brain, Gamepad2 } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Check In With Your Mood",
      description: "Start your day with a quick voice check-in. TruFlo's AI understands your emotional state and energy level.",
      details: [
        "30-second voice analysis",
        "Emotion recognition technology",
        "Privacy-first processing"
      ]
    },
    {
      number: "02",
      icon: <Brain className="w-8 h-8" />,
      title: "Get Personalized Tasks",
      description: "Receive a curated task list that matches your current mood, energy, and goals. No more fighting against yourself.",
      details: [
        "AI-powered task matching",
        "Energy-appropriate activities",
        "Adaptive scheduling"
      ]
    },
    {
      number: "03",
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Build Momentum & Earn Rewards",
      description: "Complete tasks, earn XP, maintain streaks, and unlock achievements. Make productivity feel like play.",
      details: [
        "XP and level progression",
        "Streak tracking",
        "Achievement unlocks"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-neutral-900 mb-6">
            How TruFlo <span className="text-primary-600">Works</span>
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Three simple steps to transform your productivity and build habits that actually stick.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-primary-200 hidden md:block" />
              )}
              
              <div className="flex flex-col md:flex-row gap-8 mb-16 last:mb-0">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-body-lg text-neutral-600 mb-6">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-neutral-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0 w-full md:w-64 h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center">
                  <div className="text-center text-neutral-500">
                    <div className="w-16 h-16 bg-neutral-300 rounded-lg mx-auto mb-2" />
                    <p className="text-sm">Step {step.number} Preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Ready to Experience the Flow?
            </h3>
            <p className="text-neutral-600 mb-6">
              Join thousands of users who've already transformed their productivity with TruFlo.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;