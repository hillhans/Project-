import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import CryptoCard from '../components/crypto/CryptoCard'
import Card from '../components/common/Card'
import { featuredCryptos, learningResources, testimonials } from '../data/mockData'
import { FiArrowRight, FiCheck, FiShield, FiZap } from 'react-icons/fi'

/**
 * Home Page
 * Main landing page with hero section, featured cryptos, features, and testimonials
 */
const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-cb-dark mb-6 leading-[1.1]">
                The future of finance is here.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-10">
                Trade crypto and more on a platform you can trust.
              </p>
              
              {/* Email Signup Form */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  placeholder="satoshi@nakamoto.com"
                  className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-cb-primary focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-lg rounded-lg">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Background gradient blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[3rem] blur-3xl opacity-20"></div>
                
                {/* Phone Container */}
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-8 shadow-2xl">
                  <div className="bg-white rounded-[2rem] p-6 shadow-lg">
                    {/* Mock Phone UI */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        <div className="w-24 h-8 bg-gray-100 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-3xl font-bold text-cb-dark mb-1">$33,683.80</div>
                        <div className="text-green-600 text-sm font-medium">↗ $131.36 (1.38%) 1D</div>
                      </div>
                      
                      <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-end p-2">
                        <div className="w-full h-20 bg-blue-500 rounded opacity-50"></div>
                      </div>
                      
                      <div className="space-y-3 pt-4">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                            <span className="font-semibold text-cb-dark">Crypto</span>
                          </div>
                          <span className="font-semibold text-cb-dark">$14,186.12</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                            <span className="font-semibold text-cb-dark">Stocks</span>
                          </div>
                          <span className="font-semibold text-cb-dark">$8,133.98</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cryptocurrencies */}
      <section className="py-20">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-h2 mb-4">Popular cryptocurrencies</h2>
            <p className="text-gray-600">Explore the most traded and talked about cryptocurrencies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredCryptos.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </div>

          <Link to="/explore">
            <Button variant="ghost" className="gap-2">
              View all cryptocurrencies <FiArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4">Why choose Coinbase?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We prioritize security, simplicity, and customer support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: 'Secure & Trusted',
                description: 'All digital assets are securely stored with insurance coverage.',
              },
              {
                icon: FiZap,
                title: 'Fast & Easy',
                description: 'Buy and sell crypto in minutes. Simple, straightforward process.',
              },
              {
                icon: FiCheck,
                title: '100+ Assets',
                description: 'Trade Bitcoin, Ethereum, and more cryptocurrencies.',
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} hoverable>
                  <IconComponent size={40} className="text-cb-primary mb-4" />
                  <h3 className="text-h3 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-20">
        <div className="container-max">
          <div className="mb-12">
            <h2 className="text-h2 mb-4">Learn about crypto</h2>
            <p className="text-gray-600">Educational resources to get you started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {learningResources.map((resource) => (
              <Card key={resource.id} hoverable>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-cb-primary rounded-full text-xs font-semibold">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <p className="text-xs text-gray-500">Read time: {resource.readTime}</p>
              </Card>
            ))}
          </div>

          <Link to="/learn">
            <Button variant="ghost" className="gap-2">
              Explore learning center <FiArrowRight />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <div className="mb-12 text-center">
            <h2 className="text-h2 mb-4">What our users say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join millions of people who trust Coinbase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} hoverable>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-cb-dark">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cb-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-h2 mb-6">Ready to start investing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who trade cryptocurrency on Coinbase
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="text-cb-dark">
              Create a free account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
