const mongoose = require('mongoose');

const ToppingSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Topping = mongoose.model('topping', ToppingSchema);