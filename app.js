const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mongoose.connect('mongodb://localhost:27017/bookApi');
const Books = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')();

app.get('/', (req, res) => {
    res.send("Welcome to my API Home page");
});


app.use('/api', bookRouter);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App starting at: http://localhost:${port}`);
});