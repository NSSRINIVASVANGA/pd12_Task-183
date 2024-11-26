const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['predefined', 'custom'], default: 'custom' },
});

module.exports = mongoose.model('Category', categorySchema);
