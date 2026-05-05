import React, { useState } from 'react'
import { useEffect } from 'react'
import CryptoTable from '../components/crypto/CryptoTable'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import { FiSearch } from 'react-icons/fi'
import { apiRequest } from '../lib/api'

/**
 * Explore Page
 * Browse and search all available cryptocurrencies
 */
const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('marketCap')
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const result = await apiRequest('/api/crypto')
        setCryptoData(result.data || [])
      } catch (err) {
        setMessage(err.message || 'Failed to load cryptocurrencies.')
      } finally {
        setLoading(false)
      }
    }

    fetchCryptos()
  }, [])

  // Filter cryptos based on search term
  const filteredCryptos = cryptoData.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Sort cryptos
  const sortedCryptos = [...filteredCryptos].sort((a, b) => {
    switch (sortBy) {
      case 'marketCap':
        return b.marketCap - a.marketCap
      case 'price':
        return b.price - a.price
      case 'change':
        return b.change24h - a.change24h
      default:
        return 0
    }
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-cb-dark to-blue-900 text-white py-16">
        <div className="container-max">
          <h1 className="text-h1 mb-4">Explore Cryptocurrencies</h1>
          <p className="text-xl text-blue-100">
            Discover and compare the top cryptocurrencies in the market
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <Input
                placeholder="Search by name or symbol (e.g., Bitcoin, BTC)"
                icon={FiSearch}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-cb-dark mb-2">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-cb-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="marketCap">Market Cap (Highest)</option>
                <option value="price">Price (Highest)</option>
                <option value="change">24h Change (Highest)</option>
              </select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <p className="text-gray-600 text-sm mb-1">Total Assets</p>
              <p className="text-3xl font-bold text-cb-dark">{sortedCryptos.length}</p>
            </Card>
            <Card>
              <p className="text-gray-600 text-sm mb-1">Results Found</p>
              <p className="text-3xl font-bold text-cb-dark">{filteredCryptos.length}</p>
            </Card>
            <Card>
              <p className="text-gray-600 text-sm mb-1">Avg 24h Change</p>
              <p className="text-3xl font-bold text-cb-success">
                {(filteredCryptos.length
                  ? filteredCryptos.reduce((sum, c) => sum + c.change24h, 0) / filteredCryptos.length
                  : 0
                ).toFixed(2)}
                %
              </p>
            </Card>
          </div>

          {/* Crypto Table */}
          {loading ? (
            <Card className="text-center py-12">
              <p className="text-gray-600 text-lg">Loading cryptocurrencies...</p>
            </Card>
          ) : sortedCryptos.length > 0 ? (
            <Card>
              <CryptoTable cryptos={sortedCryptos} />
            </Card>
          ) : (
            <Card className="text-center py-12">
              <p className="text-gray-600 text-lg">No cryptocurrencies found</p>
              <p className="text-gray-500">{message || 'Try adjusting your search terms'}</p>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
}

export default Explore
