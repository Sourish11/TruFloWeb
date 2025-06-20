import { Star, Quote, TrendingUp, Users } from 'lucide-react';
import Badge from '../ui/Badge';

const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      avatar: "SC",
      content: "TruFlo completely changed how I approach my day. Instead of forcing myself through tasks when I'm drained, I work with my natural energy. My productivity has never been higher.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      avatar: "MR",
      content: "The mood recognition is scary accurate. It's like having a personal productivity coach who actually understands how I'm feeling. The gamification keeps me coming back.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Content Creator",
      avatar: "EW",
      content: "I've tried every productivity app out there. TruFlo is the first one that doesn't make me feel guilty when I'm having an off day. It adapts with me, not against me.",
      rating: 5
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "10,000+",
      label: "Early Adopters"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "73%",
      label: "Productivity Increase"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9/5",
      label: "User Rating"
    }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container">
        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-neutral-900 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            Loved by Users
          </Badge>
          <h2 className="text-display-lg text-neutral-900 mb-6">
            Don't Just Take Our <span className="text-primary-600">Word</span> For It
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Thousands of users have already transformed their productivity with TruFlo. 
            Here's what they're saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-200 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              
              {/* Content */}
              <p className="text-neutral-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Trusted by Leading Companies
            </h3>
            <p className="text-neutral-600">
              Teams at these companies use TruFlo to boost their productivity
            </p>
          </div>
          
          {/* Company Logos Placeholder */}
          <div className="flex justify-center items-center gap-12 opacity-60">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
              <div key={index} className="text-neutral-400 font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;