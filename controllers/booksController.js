function booksController(Books) {
    function post(req, res) {
        const book = new Books(req.body);
        book.save();
        return res.status(201).json(book);
    }
    function get(req, res) {
        const query = {}
        // query.genre = query.genre.charAt(0).toUpperCase() + query.genre.slice(1, query.genre.length);  
        if (req.query.genre) {
            query.genre = req.query.genre;
        }
        Books.find(query, (err, books) => {
            if (err) {
                return res.send(err);
            }
            const returnBook = books.map((book) => {
                const newBook = book.toJSON();
                newBook.links = {};
                newBook.links.self = `http://${req.headers.host}/api/books/${book._id}`;
                return newBook;
            })
            books.unshift({ document_size: books.length });
            return res.send(returnBook);
        });
    }

    return { post, get };
}

module.exports = booksController;