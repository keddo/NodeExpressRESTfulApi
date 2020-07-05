const express = require('express');

function routes(Books) {
    const bookRouter = express.Router();
    bookRouter.route('/books')
        .post((req, res) => {
            const book = new Books(req.body);
            book.save();
            return res.status(201).json(book);
        })
        .get((req, res) => {
            const query = {}
            // query.genre = query.genre.charAt(0).toUpperCase() + query.genre.slice(1, query.genre.length);  
            if (req.query.genre) {
                query.genre = req.query.genre;
            }
            Books.find(query, (err, books) => {
                if (err) {
                    return res.send(err);
                }
                books.unshift({ document_size: books.length });
                return res.send(books);
            })
        });
    bookRouter.route('/books/:bookId')
        .get((req, res) => {
            Books.findById(req.params.bookId, (err, book) => {
                if (err) {
                    return res.send(err);
                }
                return res.send(book);
            })
        });
    return bookRouter;
}

module.exports = routes;
