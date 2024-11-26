const express = require('express');
const TimeLog = require('../models/TimeLog');
const router = express.Router();

// Add a new time log
router.post('/', async (req, res) => {
  try {
    const { userId, taskName, category, startTime, endTime } = req.body;
    const totalTime = (new Date(endTime) - new Date(startTime)) / (1000 * 60); // Total time in minutes
    const newTimeLog = new TimeLog({ userId, taskName, category, startTime, endTime, totalTime });
    const savedLog = await newTimeLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all time logs
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const timeLogs = await TimeLog.find(query);
    res.json(timeLogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
