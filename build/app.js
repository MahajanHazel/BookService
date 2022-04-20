"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;

//books
const books = [
    { id: 1, name: 'book1' },
    { id: 2, name: 'book2' },
    { id: 1, name: 'book3' },
];
//endpoints-1. to get all book details, 2. to get a single book 
app.get('/api/books', (req, res) => {
    res.send(books);
});
app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book)
        res.status(404).send('book not found'); // 404 object not found
    res.send(book);
});
app.post('/api/books', (req, res) => {
    //validating input
    if (!req.body.name || req.body.name.length < 3) {
        //400 bad request
        res.status(400).send('Name is required, in 3 chars');
        return;
    }
    const book = {
        id: books.length + 1,
        name: req.body.name
        //enabling parsing of json objects
    };
    books.push(book); // pushed on server
    res.send(book); //returning to client 
});
app.listen(port, function () {
    console.log('Connected successfully on port' + port);
});
