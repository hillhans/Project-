import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Card from '../components/common/Card'
import { apiRequest } from '../lib/api'
import { getStoredToken, getStoredUser } from '../lib/auth'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [message, setMessage] = useState('')
  const token = getStoredToken()
  const fallbackUser = getStoredUser()

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const result = await apiRequest('/api/auth/profile', {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        })
        setProfile(result.data)
      } catch (err) {
        setMessage(err.message || 'Failed to load profile.')
      }
    }

    loadProfile()
  }, [token])

  if (!token) return <Navigate to="/signin" replace />

  const userToShow = profile || fallbackUser

  return (
    <div className="container-max py-12">
      <h1 className="text-3xl font-bold text-cb-dark mb-6">My Profile</h1>
      <Card>
        {userToShow ? (
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Name:</span> {userToShow.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userToShow.email}
            </p>
          </div>
        ) : (
          <p className="text-gray-600">Loading profile...</p>
        )}
        {message && <p className="text-cb-danger mt-4">{message}</p>}
      </Card>
    </div>
  )
}

export default Profile
