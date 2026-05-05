// Mock cryptocurrency data
export const cryptoData = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 42350.50,
    change24h: 2.45,
    marketCap: 835000000000,
    volume24h: 28500000000,
    circulatingSupply: 21000000,
    image: '₿',
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2285.75,
    change24h: 1.82,
    marketCap: 274000000000,
    volume24h: 15200000000,
    circulatingSupply: 120000000,
    image: '◆',
  },
  {
    id: 3,
    symbol: 'USDC',
    name: 'USD Coin',
    price: 1.00,
    change24h: 0.01,
    marketCap: 35000000000,
    volume24h: 8900000000,
    circulatingSupply: 35000000000,
    image: '◉',
  },
  {
    id: 4,
    symbol: 'SOL',
    name: 'Solana',
    price: 98.45,
    change24h: 3.12,
    marketCap: 42000000000,
    volume24h: 2800000000,
    circulatingSupply: 430000000,
    image: '◈',
  },
  {
    id: 5,
    symbol: 'XRP',
    name: 'XRP',
    price: 2.45,
    change24h: -0.89,
    marketCap: 130000000000,
    volume24h: 4500000000,
    circulatingSupply: 53000000000,
    image: '✕',
  },
  {
    id: 6,
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.98,
    change24h: 1.23,
    marketCap: 35000000000,
    volume24h: 1200000000,
    circulatingSupply: 36000000000,
    image: '◀',
  },
  {
    id: 7,
    symbol: 'DOT',
    name: 'Polkadot',
    price: 8.75,
    change24h: 2.34,
    marketCap: 12000000000,
    volume24h: 500000000,
    circulatingSupply: 1380000000,
    image: '●',
  },
  {
    id: 8,
    symbol: 'DOGE',
    name: 'Dogecoin',
    price: 0.38,
    change24h: 4.56,
    marketCap: 55000000000,
    volume24h: 1800000000,
    circulatingSupply: 145000000000,
    image: '🐕',
  },
];

// Mock price history for charts
export const generatePriceHistory = (basePrice, volatility = 0.05) => {
  const data = [];
  let price = basePrice;
  
  for (let i = 24; i >= 0; i--) {
    const change = (Math.random() - 0.5) * 2 * volatility * price;
    price += change;
    data.push({
      time: `${i}h ago`,
      price: parseFloat(price.toFixed(2)),
    });
  }
  
  return data;
};

// Mock featured cryptocurrencies for home page
export const featuredCryptos = cryptoData.slice(0, 4);

// Mock learning resources
export const learningResources = [
  {
    id: 1,
    title: 'What is Bitcoin?',
    description: 'Learn about the world\'s first cryptocurrency and how it works.',
    category: 'Beginner',
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'Understanding Blockchain',
    description: 'Explore the technology that powers cryptocurrencies.',
    category: 'Intermediate',
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'Smart Contracts Explained',
    description: 'Discover how smart contracts automate transactions.',
    category: 'Advanced',
    readTime: '12 min',
  },
  {
    id: 4,
    title: 'Crypto Security Best Practices',
    description: 'Protect your digital assets with these essential security tips.',
    category: 'Beginner',
    readTime: '6 min',
  },
];

// Mock testimonials for home page
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Investor',
    text: 'This app made it incredibly easy for me to start learning about cryptocurrency. The interface is intuitive and approachable.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Trader',
    text: 'The advanced trading features and real-time data have transformed my crypto trading strategy.',
    avatar: '👨‍💻',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Crypto Enthusiast',
    text: 'I love the educational content and community features. This demo is my go-to practice platform.',
    avatar: '👩‍🎓',
  },
];

// Navigation links
export const navLinks = [
  { name: 'Explore', href: '/explore' },
  { name: 'How it works', href: '#features' },
  { name: 'Learn', href: '/learn' },
];

export const footerLinks = {
  Product: [
    { name: 'Buy & Sell', href: '#' },
    { name: 'Exchange', href: '#' },
    { name: 'Advanced Trade', href: '#' },
    { name: 'Developer Cloud', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookie Settings', href: '#' },
  ],
};
