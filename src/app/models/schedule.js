// vendors
const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
