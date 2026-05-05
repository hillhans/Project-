import React from 'react'
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'
import { footerLinks } from '../../data/mockData'

/**
 * Footer Component
 * Footer with links and social media
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 40 40" aria-hidden="true">
                <path
                  fill="#0052FF"
                  d="M20.032 28.5c-4.705 0-8.516-3.804-8.516-8.5s3.81-8.5 8.516-8.5a8.51 8.51 0 0 1 8.388 7.083H37C36.276 9.857 28.96 3 20.032 3 10.629 3 3 10.615 3 20s7.629 17 17.032 17C28.959 37 36.276 30.143 37 21.417h-8.58a8.51 8.51 0 0 1-8.388 7.083"
                />
              </svg>
              <span className="text-xl font-bold text-cb-dark">Coinbase</span>
            </div>
            <p className="text-gray-600 text-sm">
              The easiest way to buy and sell cryptocurrency. Secure and trusted by millions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-cb-dark">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-600 hover:text-cb-primary transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <p className="text-gray-600 text-sm">© 2024 Coinbase. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-cb-primary transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-cb-primary transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-cb-primary transition-colors">
                <FiGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
