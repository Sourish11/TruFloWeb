export default function Discover() {
  const features = [
    {
      icon: '🧠',
      title: 'Mood Recognition',
      description: 'TruFlo instantly understands your mood and dynamically reshapes your day and task flow to match your emotional state.'
    },
    {
      icon: '👥',
      title: 'Influencer Guidance',
      description: 'Daily and weekly challenges led by your favorite and trusted creators to keep you motivated and engaged.'
    },
    {
      icon: '🌐',
      title: 'Community Availability',
      description: 'Join our Discord server to share suggestions and grow in a community of like-minded individuals with leaderboards and shared wins.'
    },
    {
      icon: '🤖',
      title: 'AI-Personalization',
      description: 'The tasks and goals given to you will adapt to your unique day-to-day patterns for maximum effectiveness.'
    }
  ];

  return (
    <div className="page-layout">
      <div className="page-content">
        <div className="page-section">
          <div className="glass-enhanced rounded-2xl p-8 text-center content-spacing-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-2xl">
              Discover TruFlo
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience the future of productivity with mood-aware technology that adapts to your unique patterns and emotional state.
            </p>
          </div>
        </div>

        <div className="page-section">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing-lg">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 rounded-xl hover">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center border border-white/20">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-section">
          <div className="glass-enhanced rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
              Why Choose TruFlo?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-spacing">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-white">Personalized</h3>
                <p className="text-white/70 text-sm">
                  Every feature adapts to your unique productivity patterns and emotional rhythms.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white">Innovative</h3>
                <p className="text-white/70 text-sm">
                  First-of-its-kind mood recognition technology that revolutionizes how you work.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-white">Community-Driven</h3>
                <p className="text-white/70 text-sm">
                  Connect with like-minded individuals and grow together in a supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}