import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiSearch, FiX, FiGlobe } from 'react-icons/fi'

const desktopLinks = [
  { name: 'Cryptocurrencies', href: '/explore' },
  { name: 'Individuals', href: '#' },
  { name: 'Businesses', href: '#' },
  { name: 'Institutions', href: '#' },
  { name: 'Developers', href: '#' },
  { name: 'Company', href: '#' },
]

/**
 * Navbar Component
 * Main navigation bar with responsive menu
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 border-b border-cb-border backdrop-blur">
      <div className="container-max">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
            <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
              <path
                fill="#0052FF"
                d="M20.032 28.5c-4.705 0-8.516-3.804-8.516-8.5s3.81-8.5 8.516-8.5a8.51 8.51 0 0 1 8.388 7.083H37C36.276 9.857 28.96 3 20.032 3 10.629 3 3 10.615 3 20s7.629 17 17.032 17C28.959 37 36.276 30.143 37 21.417h-8.58a8.51 8.51 0 0 1-8.388 7.083"
              />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {desktopLinks.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-[29,33,41] text-cb-dark hover:text-cb-primary transition-colors font-semibold text-[30,41,59] text-[17px]"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cb-dark hover:text-cb-primary transition-colors font-semibold text-[17px]"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              className="h-10 w-10 rounded-full bg-[#eef0f3] text-cb-dark hover:bg-[#e3e6eb] flex items-center justify-center transition-colors"
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full bg-[#eef0f3] text-cb-dark hover:bg-[#e3e6eb] flex items-center justify-center transition-colors"
              aria-label="Language and region"
            >
              <FiGlobe size={18} />
            </button>
            <Link to="/signin">
              <button
                type="button"
                className="h-11 px-6 rounded-full text-cb-dark font-semibold hover:bg-gray-50 transition-colors"
              >
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="h-11 px-8 rounded-full bg-cb-primary text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-cb-dark" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-5 animate-slide-up">
            <div className="flex flex-col gap-4">
              {desktopLinks.map((link) =>
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-cb-dark hover:text-cb-primary transition-colors font-medium py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-cb-dark hover:text-cb-primary transition-colors font-medium py-1"
                  >
                    {link.name}
                  </a>
                )
              )}
              <div className="flex gap-2 pt-4 border-t border-cb-border">
                <Link to="/signin" className="flex-1">
                  <button
                    type="button"
                    className="w-full h-11 rounded-full bg-[#eef0f3] text-cb-dark font-semibold"
                  >
                    Sign in
                  </button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <button
                    type="button"
                    className="w-full h-11 rounded-full bg-cb-primary text-white font-semibold"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
