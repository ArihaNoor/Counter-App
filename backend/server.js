const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/counterdb', { useNewUrlParser: true, useUnifiedTopology: true });

const countersRouter = require('./routes/counters'); 
app.use('/counters', countersRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});