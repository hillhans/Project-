import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import AssetDetail from './pages/AssetDetail'
import Learn from './pages/Learn'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

/**
 * Main App Component
 * Sets up routing and layout structure for the entire application
 */
function App() {
  // At the top of your return statement in App.jsx
return (
  <div className="min-h-screen">
    {/* TA Safety Requirement: Warning Banner */}
    <div className="bg-yellow-400 text-black text-center py-2 font-bold uppercase text-sm">
      ⚠️ STUDENT PROJECT: This is a demo site for educational purposes only. Not affiliated with Coinbase.
    </div>
    
    <Navbar />
    {/* Rest of your components... */}
  </div>
);
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/asset/:symbol" element={<AssetDetail />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="*"
              element={
                <div className="container-max py-20 text-center">
                  <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
