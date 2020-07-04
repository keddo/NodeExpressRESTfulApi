const express = require('express');
const require = require('morgan');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App starting at: http://localhost:${port}`);
});