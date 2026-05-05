const Crypto = require('../models/Crypto');

exports.getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.status(200).json({ success: true, count: cryptos.length, data: cryptos });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } }).sort({ change24h: -1 });
    res.status(200).json({ success: true, count: gainers.length, data: gainers });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.getNewListings = async (req, res) => {
  try {
    const newCoins = await Crypto.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: newCoins.length, data: newCoins });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};

exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({ success: false, message: 'Please provide name, symbol, price, image, and change24h.' });
    }

    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({ success: true, message: 'Cryptocurrency added successfully.', data: crypto });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.', error: err.message });
  }
};
