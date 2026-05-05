import React from 'react'

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * @param {string} variant - 'primary', 'secondary', 'ghost', or 'danger'
 * @param {string} size - 'sm', 'md', or 'lg'
 * @param {boolean} isLoading - shows loading state
 * @param {function} onClick - click handler
 * @param {React.ReactNode} children - button content
 * @param {object} props - additional HTML attributes
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  onClick,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-200 cursor-pointer inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-cb-primary text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm',
    secondary: 'bg-white text-cb-dark border border-gray-300 hover:bg-gray-50 active:bg-gray-100',
    ghost: 'text-cb-primary hover:bg-blue-50 active:bg-blue-100',
    danger: 'bg-cb-danger text-white hover:bg-red-600 active:bg-red-700',
  };

  const sizeStyles = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-3.5 text-base',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
