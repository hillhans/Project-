import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import Badge from '../components/common/Badge'
import PriceChart from '../components/crypto/PriceChart'
import { cryptoData, generatePriceHistory } from '../data/mockData'
import { FiArrowLeft, FiArrowUpRight, FiArrowDownRight, FiCopy, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

/**
 * AssetDetail Page
 * Detailed view of a single cryptocurrency with price chart and stats
 */
const AssetDetail = () => {
  const { symbol } = useParams()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  // Find crypto data
  const crypto = cryptoData.find((c) => c.symbol.toLowerCase() === symbol?.toLowerCase())

  // Generate price history
  const priceHistory = crypto ? generatePriceHistory(crypto.price) : []

  if (!crypto) {
    return (
      <div className="container-max py-20 text-center">
        <h1 className="text-h2 mb-4">Cryptocurrency not found</h1>
        <p className="text-gray-600 mb-8">The cryptocurrency you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/explore')}>Back to Explore</Button>
      </div>
    )
  }

  const isPositive = crypto.change24h >= 0
  const changeClass = isPositive ? 'text-cb-success' : 'text-cb-danger'
  const ArrowIcon = isPositive ? FiArrowUpRight : FiArrowDownRight

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`0x${crypto.symbol}Address123`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-cb-dark to-blue-900 text-white py-12">
        <div className="container-max">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <FiArrowLeft /> Back
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold">
              {crypto.image}
            </div>
            <div>
              <h1 className="text-4xl font-bold">{crypto.name}</h1>
              <p className="text-blue-200">{crypto.symbol}</p>
            </div>
          </div>

          <div className="flex items-baseline gap-4 flex-wrap">
            <p className="text-5xl font-bold">${crypto.price.toFixed(2)}</p>
            <Badge variant={isPositive ? 'success' : 'danger'}>
              <ArrowIcon className="inline mr-1" size={14} />
              {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart and Info */}
            <div className="lg:col-span-2">
              {/* Price Chart */}
              <Card className="mb-8">
                <h2 className="text-xl font-bold mb-6">Price Chart</h2>
                <PriceChart data={priceHistory} symbol={crypto.symbol} isPositive={isPositive} />
              </Card>

              {/* About */}
              <Card>
                <h2 className="text-xl font-bold mb-4">About {crypto.name}</h2>
                <p className="text-gray-600 mb-4">
                  {crypto.name} is a leading cryptocurrency in the digital asset space. With a strong
                  market position, it continues to be a popular choice among traders and investors
                  worldwide.
                </p>
                <p className="text-gray-600">
                  Current market cap: <span className="font-semibold">${(crypto.marketCap / 1e9).toFixed(0)}B</span>
                </p>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              {/* Quick Actions */}
              <Card className="mb-6">
                <h3 className="text-lg font-bold mb-4">Ready to invest?</h3>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full">
                    Buy {crypto.symbol}
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Sell {crypto.symbol}
                  </Button>
                </div>
              </Card>

              {/* Stats */}
              <Card className="mb-6">
                <h3 className="text-lg font-bold mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-cb-border">
                    <p className="text-gray-600 text-sm mb-1">Market Cap</p>
                    <p className="text-xl font-semibold text-cb-dark">
                      ${(crypto.marketCap / 1e9).toFixed(0)}B
                    </p>
                  </div>

                  <div className="pb-4 border-b border-cb-border">
                    <p className="text-gray-600 text-sm mb-1">24h Volume</p>
                    <p className="text-xl font-semibold text-cb-dark">
                      ${(crypto.volume24h / 1e9).toFixed(1)}B
                    </p>
                  </div>

                  <div className="pb-4 border-b border-cb-border">
                    <p className="text-gray-600 text-sm mb-1">Circulating Supply</p>
                    <p className="text-xl font-semibold text-cb-dark">
                      {(crypto.circulatingSupply / 1e6).toFixed(0)}M
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-600 text-sm mb-1">24h Change</p>
                    <p className={`text-xl font-semibold flex items-center gap-1 ${changeClass}`}>
                      <ArrowIcon size={20} />
                      {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contract Address */}
              <Card>
                <h3 className="text-lg font-bold mb-4">Contract Address</h3>
                <div className="bg-gray-50 rounded p-3 flex items-center justify-between gap-2">
                  <code className="text-xs text-gray-600 break-all">0x{crypto.symbol}Address123</code>
                  <button
                    onClick={handleCopyAddress}
                    className="text-cb-primary hover:text-blue-700 transition-colors flex-shrink-0"
                  >
                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AssetDetail
