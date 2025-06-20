import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import trufloLogo from '../../assets/truflo-logo.png';

const NewHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={trufloLogo}
                alt="TruFlo Logo"
                className="h-8 w-auto"
              />
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>
                TruFlo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                    isScrolled ? 'text-neutral-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-neutral-700 hover:text-primary-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Sign In
              </Link>
              <Button
                onClick={scrollToEarlyAccess}
                variant={isScrolled ? 'primary' : 'secondary'}
                size="sm"
              >
                Get Early Access
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
            <div className="p-6 pt-20">
              <nav className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-lg font-medium text-neutral-900 hover:text-primary-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <hr className="border-neutral-200" />
                <Link
                  to="/login"
                  className="block text-lg font-medium text-neutral-900 hover:text-primary-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Button
                  onClick={scrollToEarlyAccess}
                  className="w-full"
                >
                  Get Early Access
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewHeader;