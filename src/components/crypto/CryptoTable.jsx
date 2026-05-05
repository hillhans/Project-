import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../common/Badge'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'

/**
 * CryptoTable Component
 * Table view of cryptocurrencies with detailed information
 * @param {array} cryptos - array of cryptocurrency objects
 */
const CryptoTable = ({ cryptos = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-cb-border bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">#</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">24h Change</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Market Cap</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Volume</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => {
            const isPositive = crypto.change24h >= 0
            const changeClass = isPositive ? 'text-cb-success' : 'text-cb-danger'
            const ArrowIcon = isPositive ? FiArrowUpRight : FiArrowDownRight

            return (
              <tr
                key={crypto.id}
                className="border-b border-cb-border hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/asset/${crypto.symbol.toLowerCase()}`}
                    className="flex items-center gap-3 hover:text-cb-primary transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-sm font-bold text-cb-primary">
                      {crypto.image}
                    </div>
                    <div>
                      <p className="font-semibold text-cb-dark">{crypto.name}</p>
                      <p className="text-xs text-gray-500">{crypto.symbol}</p>
                    </div>
                  </Link>
                </td>
                <td className="px-6 py-4 font-semibold text-cb-dark">${crypto.price.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <Badge variant={isPositive ? 'success' : 'danger'}>
                    <ArrowIcon className="inline mr-1" size={12} />
                    {isPositive ? '+' : ''}{crypto.change24h.toFixed(2)}%
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-cb-dark">
                  ${(crypto.marketCap / 1e9).toFixed(0)}B
                </td>
                <td className="px-6 py-4 text-sm text-cb-dark">
                  ${(crypto.volume24h / 1e9).toFixed(1)}B
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
