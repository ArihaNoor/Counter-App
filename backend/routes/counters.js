const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

router.get('/', async (req, res) => {
    const counters = await Counter.find();
    res.json(counters);
});

router.post('/increment', async (req, res) => {
    const lastCounter = await Counter.findOne().sort({ _id: -1 });
    const newValue = (lastCounter ? lastCounter.value : 0) + 1;
    const counter = new Counter({ value: newValue});
    await counter.save();
    res.json(counter);
});

router.post('/decrement', async (req, res) => {
    const lastCounter = await Counter.findOne().sort({ _id: -1 });
    if (lastCounter) {
        await Counter.deleteOne({ _id: lastCounter._id });
    }
    res.json({ message: 'Decrement successful' });
});

router.delete('/delete/:id', async (req, res) => {
    await Counter.deleteOne({ _id: req.params.id });
    res.json({ message: 'Counter deleted' });
});

module.exports = router;