import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Button } from './Button';
import trufloLogo from '../../assets/truflo-logo.png';

export default function Header() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [auth]);

  const navItems = [
    { href: '/#about', label: 'About' },
    { href: '/#features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={trufloLogo}
              alt="TruFlo Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              TruFlo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {user.email}
                </span>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/app')}
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="md"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/signup')}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                {user ? (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      navigate('/app');
                      setIsMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Dashboard
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <Button
                      variant="ghost"
                      size="md"
                      onClick={() => {
                        navigate('/login');
                        setIsMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      Sign In
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => {
                        navigate('/signup');
                        setIsMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}