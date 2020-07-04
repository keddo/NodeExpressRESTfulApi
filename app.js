const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App starting at: http://localhost:${port}`);
});