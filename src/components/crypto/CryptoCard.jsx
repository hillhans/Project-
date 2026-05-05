import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../common/Card'
import Badge from '../common/Badge'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'

/**
 * CryptoCard Component
 * Displays a single cryptocurrency with price and change info
 * @param {object} crypto - cryptocurrency object
 */
const CryptoCard = ({ crypto }) => {
  const isPositive = crypto.change24h >= 0
  const changeClass = isPositive ? 'text-cb-success' : 'text-cb-danger'
  const ArrowIcon = isPositive ? FiArrowUpRight : FiArrowDownRight

  return (
    <Link to={`/asset/${crypto.symbol.toLowerCase()}`}>
      <Card hoverable className="h-full cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-lg font-bold text-cb-primary">
              {crypto.image}
            </div>
            <div>
              <p className="font-semibold text-cb-dark">{crypto.symbol}</p>
              <p className="text-xs text-gray-500">{crypto.name}</p>
            </div>
          </div>
          <Badge variant={isPositive ? 'success' : 'danger'}>
            <ArrowIcon className="inline mr-1" size={12} />
            {Math.abs(crypto.change24h).toFixed(2)}%
          </Badge>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-2xl font-bold text-cb-dark">${crypto.price.toFixed(2)}</p>
            <p className={`text-sm font-semibold flex items-center gap-1 ${changeClass}`}>
              <ArrowIcon size={16} />
              {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
            </p>
          </div>

          <div className="pt-3 border-t border-cb-border space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Market Cap</span>
              <span className="font-semibold">${(crypto.marketCap / 1e9).toFixed(0)}B</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">24h Volume</span>
              <span className="font-semibold">${(crypto.volume24h / 1e9).toFixed(1)}B</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default CryptoCard
