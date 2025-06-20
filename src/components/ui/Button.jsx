import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  loading = false,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variants = {
    primary: 'btn-primary focus:ring-white/50',
    secondary: 'btn-secondary focus:ring-white/50',
    cta: 'btn-cta focus:ring-white/50',
    nav: 'btn-nav focus:ring-white/50',
    'ghost-nav': 'nav-text hover:bg-white/10 focus:ring-white/50',
    outline: 'border-2 border-current text-current hover:bg-current hover:text-white transition-all duration-300',
    ghost: 'text-current hover:bg-current/10 transition-all duration-300',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300',
    success: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-2.5 text-base rounded-lg',
    lg: 'px-8 py-3 text-lg rounded-xl',
    xl: 'px-10 py-4 text-xl rounded-xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="spinner mr-2" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
});

Button.displayName = 'Button';

export { Button };