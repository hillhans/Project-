import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import Card from '../components/common/Card'
import { FiMail } from 'react-icons/fi'

/**
 * SignIn Page
 * User login form
 */
const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    if (!formData.password) newErrors.password = 'Password is required'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        alert('Sign in successful! (Demo)')
        navigate('/')
      }, 1500)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block text-3xl font-bold text-cb-primary mb-4 hover:opacity-80">
            Crypto App
          </Link>
          <h1 className="text-3xl font-bold text-cb-dark">Sign in</h1>
          <p className="text-gray-600 mt-2">Welcome back to your crypto wallet</p>
          <p className="text-xs text-orange-600 mt-2 font-medium">Demo app - do not use your real password</p>
        </div>

        {/* Form */}
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              name="email"
              label="Email Address"
              placeholder="you@example.com"
              icon={FiMail}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-cb-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Button type="submit" variant="primary" size="lg" isLoading={isLoading} className="w-full">
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cb-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="secondary">Google</Button>
            <Button variant="secondary">Apple</Button>
          </div>
        </Card>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-cb-primary font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
