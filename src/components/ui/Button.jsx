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
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 shadow-md hover:shadow-lg',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-500 transition-all duration-200',
    ghost: 'text-gray-700 hover:bg-gray-100/80 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-200',
    glass: 'backdrop-blur-xl bg-white/20 hover:bg-white/30 border border-white/30 text-gray-800 hover:text-gray-900 dark:bg-gray-800/20 dark:hover:bg-gray-800/30 dark:border-gray-700/30 dark:text-gray-200 dark:hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200'
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
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };