const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('tiny'));


const bookRouter = express.Router();
bookRouter.route('/books')
    .get((req, res) => {
        const response = { welcome: "Hello welcome to the API" };
        res.json(response);
    });
app.get('/', (req, res) => {
    res.send("Welcome to my API Home page");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App starting at: http://localhost:${port}`);
});