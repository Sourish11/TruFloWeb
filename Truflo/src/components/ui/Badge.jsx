const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const baseClasses = `
    inline-flex items-center font-medium rounded-full
    transition-colors duration-200
  `;

  const variants = {
    default: 'bg-neutral-100 text-neutral-800',
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    outline: 'border border-neutral-300 text-neutral-700 bg-transparent'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;