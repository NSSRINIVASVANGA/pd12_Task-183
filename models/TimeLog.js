const mongoose = require('mongoose');

const timeLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  taskName: { type: String, required: true },
  category: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  totalTime: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TimeLog', timeLogSchema);
