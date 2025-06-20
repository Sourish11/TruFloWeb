import { Brain, Users, Zap, Target } from 'lucide-react';
import Badge from '../ui/Badge';

const SolutionSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Mood Recognition",
      description: "Voice-based check-ins that understand your emotional state and adapt your task flow accordingly",
      badge: "Core Feature"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Task Matching",
      description: "Get the right tasks at the right time based on your energy, mood, and historical patterns",
      badge: "AI-Powered"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Challenges",
      description: "Daily and weekly missions led by creators you trust, keeping you motivated and accountable",
      badge: "Community"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Gamified Progress",
      description: "Earn XP, maintain streaks, and unlock rewards that make productivity feel like play",
      badge: "Engagement"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            The TruFlo Solution
          </Badge>
          <h2 className="text-display-lg text-neutral-900 mb-6">
            Productivity That <span className="text-primary-600">Flows</span> With You
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
            Instead of forcing you into rigid systems, TruFlo adapts to your natural rhythms. 
            Here's how we're revolutionizing personal productivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Features Grid */}
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                    <Badge variant="outline" size="sm">
                      {feature.badge}
                    </Badge>
                  </div>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual/Demo Area */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-2">
                  Interactive Demo
                </h4>
                <p className="text-primary-700">
                  Experience TruFlo's mood-adaptive interface
                </p>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-neutral-200">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-neutral-700">Feeling energized</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-neutral-200">
              <div className="text-sm text-neutral-700">
                <div className="font-medium">Suggested: Deep Work</div>
                <div className="text-xs text-neutral-500">Based on your mood</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-neutral-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-neutral-900 mb-8">
            How TruFlo Compares
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-4 font-semibold text-neutral-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600">TruFlo</th>
                  <th className="text-center py-4 px-4 font-semibold text-neutral-600">Traditional Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-4 px-4 font-medium text-neutral-900">Mood Recognition</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">✓ Voice-based AI</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-red-600">✗ Ignored</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-neutral-900">Task Adaptation</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">✓ Dynamic matching</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-yellow-600">⚠ Static lists</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-neutral-900">Community Challenges</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">✓ Influencer-led</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-yellow-600">⚠ Limited social</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-neutral-900">Gamification</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">✓ XP, streaks, rewards</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-yellow-600">⚠ Basic badges</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;