import { AlertTriangle, Clock, Frown, RotateCcw } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Task Abandonment",
      description: "You start strong but lose momentum when your energy dips",
      stat: "73% of people abandon their daily tasks"
    },
    {
      icon: <Frown className="w-8 h-8" />,
      title: "Guilt from Time-Wasting",
      description: "Endless scrolling leaves you feeling worse about yourself",
      stat: "Average person spends 2.5 hours on social media daily"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Confusion Around Priorities",
      description: "Too many options, not enough clarity on what matters most",
      stat: "68% struggle with prioritization"
    }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-display-lg text-neutral-900 mb-6">
            You're Not Lazy. You're <span className="text-primary-600">Overwhelmed.</span>
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto">
            Traditional productivity apps ignore the biggest factor in getting things done: 
            how you actually feel. Here's what happens when mood meets reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200"
            >
              <div className="text-red-500 mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-600 mb-4">
                {problem.description}
              </p>
              <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                {problem.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Call-out Box */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <Clock className="w-12 h-12 mx-auto mb-4 text-primary-200" />
          <h3 className="text-2xl font-bold mb-4">
            The Average Person Wastes 21 Hours Per Week
          </h3>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            That's 3 hours every single day lost to distractions, procrastination, 
            and tasks that don't match your energy level. What if you could get that time back?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;