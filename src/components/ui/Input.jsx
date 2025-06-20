import { forwardRef } from 'react';

const Input = forwardRef(({ 
  className = '', 
  type = 'text',
  label,
  error,
  helperText,
  ...props 
}, ref) => {
  const baseClasses = 'w-full px-6 py-4 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base';
  const errorClasses = error 
    ? 'border-red-500 focus:ring-red-500' 
    : 'border-gray-200 dark:border-gray-600 focus:border-blue-500';
  const bgClasses = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400';
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`${baseClasses} ${errorClasses} ${bgClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };