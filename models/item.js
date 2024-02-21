const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  // Add any other properties as needed
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
