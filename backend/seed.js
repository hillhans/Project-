require('dotenv').config();
const mongoose = require('mongoose');
const Crypto = require('./models/Crypto');

const coins = [
  { name: 'Bitcoin',   symbol: 'BTC', price: 67500,  image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',   change24h:  2.4 },
  { name: 'Ethereum',  symbol: 'ETH', price: 3500,   image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',  change24h:  1.8 },
  { name: 'Solana',    symbol: 'SOL', price: 175,    image: 'https://cryptologos.cc/logos/solana-sol-logo.png',    change24h:  5.3 },
  { name: 'Cardano',   symbol: 'ADA', price: 0.45,   image: 'https://cryptologos.cc/logos/cardano-ada-logo.png',   change24h: -1.2 },
  { name: 'Dogecoin',  symbol: 'DOGE',price: 0.16,   image: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png', change24h:  3.1 },
  { name: 'Ripple',    symbol: 'XRP', price: 0.52,   image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',       change24h: -0.8 },
  { name: 'Polkadot',  symbol: 'DOT', price: 7.20,   image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png', change24h: 0.5 },
  { name: 'Avalanche', symbol: 'AVAX',price: 38.50,  image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png', change24h: 4.7 },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB.');

  await Crypto.deleteMany({});
  console.log('Cleared existing crypto data.');

  await Crypto.insertMany(coins);
  console.log(`Seeded ${coins.length} cryptocurrencies.`);

  await mongoose.disconnect();
  console.log('Done.');
}

seed().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
