import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

/**
 * Input Component
 * Reusable text input with optional password toggle and error states
 * @param {string} type - input type (text, email, password, etc.)
 * @param {string} placeholder - placeholder text
 * @param {string} label - input label
 * @param {string} error - error message
 * @param {object} props - additional HTML attributes
 */
const Input = React.forwardRef(
  ({ type = 'text', placeholder, label, error, icon: Icon, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword && showPassword ? 'text' : type

    return (
      <div className="w-full">
        {label && <label className="block text-sm font-semibold text-cb-dark mb-2">{label}</label>}
        <div className="relative">
          {Icon && <Icon className="absolute left-3 top-3.5 text-gray-400" size={20} />}
          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            className={`
              w-full px-4 py-3 border rounded-lg transition-all duration-200 text-base
              ${Icon ? 'pl-10' : ''}
              ${error ? 'border-cb-danger bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-cb-primary'}
              focus:outline-none focus:ring-2 focus:ring-blue-100
              ${className}
            `}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </button>
          )}
        </div>
        {error && <p className="text-cb-danger text-sm mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
