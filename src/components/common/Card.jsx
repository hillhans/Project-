import React from 'react'

/**
 * Card Component
 * Reusable card container with optional hover effects
 * @param {boolean} hoverable - adds hover effects
 * @param {React.ReactNode} children - card content
 * @param {object} props - additional HTML attributes
 */
const Card = ({ hoverable = false, className = '', children, ...props }) => {
  const hoverClass = hoverable ? 'card-hover' : 'card'

  return (
    <div className={`${hoverClass} p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
