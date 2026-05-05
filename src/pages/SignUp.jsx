import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import { FiMail, FiUser, FiCheck } from 'react-icons/fi'

/**
 * SignUp Page
 * User registration form
 */
const SignUp = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email'
    return newErrors
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = 'Full name is required'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms'
    return newErrors
  }

  const handleNextStep = () => {
    const newErrors = validateStep1()
    if (Object.keys(newErrors).length === 0) {
      setStep(2)
    } else {
      setErrors(newErrors)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateStep2()

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false)
        alert('Account created successfully! (Demo)')
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
            ₿ CryptoApp
          </Link>
          <h1 className="text-3xl font-bold text-cb-dark">Create Account</h1>
          <p className="text-gray-600 mt-2">Join millions investing in crypto</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex gap-2 mb-8">
          <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-cb-primary' : 'bg-gray-200'}`}></div>
          <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-cb-primary' : 'bg-gray-200'}`}></div>
        </div>

        {/* Form */}
        <Card>
          <form onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()} className="space-y-6">
            {step === 1 ? (
              <>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4">Step 1 of 2</p>
                  <h2 className="text-xl font-bold text-cb-dark mb-4">What is your email address?</h2>
                </div>

                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  icon={FiMail}
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-4">Step 2 of 2</p>
                  <h2 className="text-xl font-bold text-cb-dark mb-4">Complete your profile</h2>
                </div>

                <Input
                  type="text"
                  name="fullName"
                  label="Full Name"
                  placeholder="John Doe"
                  icon={FiUser}
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                />

                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                />

                <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />

                {/* Password Requirements */}
                <div className="bg-blue-50 rounded p-3 space-y-2">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Password requirements:</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center gap-2">
                      <FiCheck size={12} className="text-cb-success" />
                      At least 8 characters
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCheck size={12} className="text-cb-success" />
                      Mix of letters and numbers
                    </div>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 rounded"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to CryptoApp's{' '}
                    <a href="#" className="text-cb-primary hover:underline">
                      Terms of Service
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-cb-primary hover:underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
                {errors.agreeToTerms && <p className="text-cb-danger text-sm">{errors.agreeToTerms}</p>}

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    
                    <p className="text-xs text-orange-500 mb-4 italic">
                    Note: This is a demo app. Please use a fake email and password for testing purposes.
                          </p>
                      <button type="submit">Sign Up</button>
                    Back
                  </Button>
                  
                </div>
              </>
            )}
          </form>
        </Card>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/signin" className="text-cb-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
