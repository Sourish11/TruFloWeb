import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  ...props 
}, ref) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  const variants = {
    primary: `
      bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800
      shadow-md hover:shadow-lg active:shadow-sm
      border border-transparent
    `,
    secondary: `
      bg-white text-primary-600 hover:bg-primary-50 active:bg-primary-100
      border border-primary-200 hover:border-primary-300
      shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100
      border border-primary-300 hover:border-primary-400
    `,
    ghost: `
      bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200
      border border-transparent
    `,
    danger: `
      bg-red-600 text-white hover:bg-red-700 active:bg-red-800
      shadow-md hover:shadow-lg active:shadow-sm
      border border-transparent
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md gap-1.5',
    md: 'px-4 py-2 text-base rounded-lg gap-2',
    lg: 'px-6 py-3 text-lg rounded-xl gap-2.5',
    xl: 'px-8 py-4 text-xl rounded-2xl gap-3'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <span className={loading ? 'opacity-0' : 'flex items-center gap-2'}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;