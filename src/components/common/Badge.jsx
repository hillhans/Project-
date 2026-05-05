import React from 'react'

/**
 * Badge Component
 * Small status indicator or label
 * @param {string} variant - 'success', 'warning', 'danger', 'info'
 * @param {React.ReactNode} children - badge content
 * @param {object} props - additional HTML attributes
 */
const Badge = ({ variant = 'info', className = '', children, ...props }) => {
  const variantStyles = {
    success: 'bg-green-100 text-cb-success',
    warning: 'bg-yellow-100 text-cb-warning',
    danger: 'bg-red-100 text-cb-danger',
    info: 'bg-blue-100 text-cb-primary',
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge
