const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    value: Number,
    timestamp: { type: Date, default: Date.now }
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;