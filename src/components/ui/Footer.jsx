import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    PRODUCT: [
      { name: 'Features', href: '/#features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Roadmap', href: '/#roadmap' },
    ],
    COMPANY: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
    ],
    LEGAL: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="relative smooth-transition">
      <div className="glass-enhanced border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Section - Takes up 4 columns on large screens */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-3xl font-bold text-white drop-shadow-md">
                  TruFlo
                </span>
              </div>
              <p className="text-white/80 text-lg leading-relaxed max-w-sm">
                The productivity app that understands your mood to help you break free from distractions and build lasting habits.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="https://discord.gg/eZHfGJTRNh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/10 group transform hover:scale-110"
                  aria-label="Join our Discord community"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Empty spacer column */}
            <div className="lg:col-span-1"></div>

            {/* Links Sections - Each takes 2 columns with better spacing */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={category} className="lg:col-span-2 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-base font-bold text-white uppercase tracking-widest border-b border-white/20 pb-4 relative">
                    {category}
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
                  </h3>
                  <ul className="space-y-5">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-white/70 hover:text-white transition-all duration-300 text-base font-medium block py-2 hover:translate-x-2 transform group relative"
                        >
                          <span className="relative z-10">{link.name}</span>
                          <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Newsletter/CTA Section */}
            <div className="lg:col-span-1"></div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white/60 text-base font-medium">
              <div className="flex items-center space-x-2">
                <span>© {currentYear} TruFlo.</span>
                <span className="text-white/30">•</span>
                <span>All rights reserved.</span>
              </div>
            </div>
            
            <div className="flex items-center text-white/60 text-base font-medium">
              <span>Made with</span>
              <span className="text-red-400 mx-3 text-lg animate-pulse">❤️</span>
              <span>for productivity enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}