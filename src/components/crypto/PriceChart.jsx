import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

/**
 * PriceChart Component
 * Interactive line chart for cryptocurrency price history
 * @param {array} data - array of price data points
 * @param {string} symbol - cryptocurrency symbol
 * @param {boolean} isPositive - determines chart color
 */
const PriceChart = ({ data, symbol, isPositive = true }) => {
  const lineColor = isPositive ? '#05B378' : '#E94B3C'
  const fillColor = isPositive ? 'rgba(5, 179, 120, 0.1)' : 'rgba(233, 75, 60, 0.1)'

  return (
    <div className="w-full h-96 p-4 bg-white rounded-lg border border-cb-border">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e2e6" />
          <XAxis dataKey="time" stroke="#888" style={{ fontSize: '12px' }} />
          <YAxis stroke="#888" style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: `1px solid ${lineColor}`,
              borderRadius: '8px',
            }}
            formatter={(value) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => `Time: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={lineColor}
            fill={fillColor}
            strokeWidth={3}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceChart
