import React, { useState } from 'react'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import Button from '../components/common/Button'
import { learningResources } from '../data/mockData'
import { FiFilter } from 'react-icons/fi'

/**
 * Learn Page
 * Educational resources and guides for cryptocurrency learning
 */
const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredResources =
    selectedCategory === 'All'
      ? learningResources
      : learningResources.filter((r) => r.category === selectedCategory)

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-cb-dark to-blue-900 text-white py-16">
        <div className="container-max">
          <h1 className="text-h1 mb-4">Learn About Crypto</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about cryptocurrency and blockchain technology
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-max">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <FiFilter /> Filter by level:
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      selectedCategory === category
                        ? 'bg-cb-primary text-white'
                        : 'bg-gray-100 text-cb-dark hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Resources */}
          <div className="mb-12">
            <h2 className="text-h2 mb-8">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.slice(0, 3).map((resource) => (
                <Card key={resource.id} hoverable>
                  <div className="mb-4 flex items-start justify-between">
                    <Badge variant="info">{resource.category}</Badge>
                    <span className="text-xs text-gray-500">{resource.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Read Article →
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* All Resources */}
          <div>
            <h2 className="text-h2 mb-8">All Resources</h2>
            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <Card key={resource.id} hoverable>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={resource.category === 'Beginner' ? 'info' : 'warning'}>
                          {resource.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{resource.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                    <Button variant="ghost" className="whitespace-nowrap">
                      Read →
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-h2 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I get started with cryptocurrency?',
                  a: 'Create an account, verify your identity, add a payment method, and start buying crypto. Its as simple as that!',
                },
                {
                  q: 'Is cryptocurrency safe?',
                  a: 'Cryptocurrency transactions are secured by blockchain technology. Risk management and account protection still depend on the platform and your own security habits.',
                },
                {
                  q: 'What is the minimum investment?',
                  a: 'You can start investing with as little as $1. There are no minimum investment requirements.',
                },
                {
                  q: 'Can I sell my cryptocurrency anytime?',
                  a: 'Yes, you can buy and sell cryptocurrency 24/7. Markets are always open.',
                },
              ].map((faq, index) => (
                <Card key={index} hoverable>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container-max text-center">
          <h2 className="text-h2 mb-4">Ready to start your crypto journey?</h2>
          <p className="text-gray-600 text-lg mb-8">Join learners exploring crypto in this student demo</p>
          <Button size="lg" variant="primary">
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Learn
