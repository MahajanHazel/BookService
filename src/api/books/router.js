"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booksregistry_1 = require("../../../src/core/booksregistry");
const esregistry_1 = require("../../core/esregistry");
const booksRouter = express_1.default.Router();
const booksregister = new booksregistry_1.BookRegistry();
const esregister = new esregistry_1.EsRegistry();
//books
/*const books=[
  {id: 1, name: 'book1'},
  {id: 2, name: 'book2'},
  {id: 1, name: 'book3'},
 ];*/
//endpoints-1. to get all book details, 2. to get a single book 
/*booksRouter.get('/api/books',(req,res)=>{
    res.send(books);
});

booksRouter.get('/api/books/:id',(req,res)=>{
    const book =books.find(c=>c.id=== parseInt(req.params.id));
    if(!book) res.status(404).send('book not found');// 404 object not found
    res.send(book);
});
*/
//SCYLLA single post
booksRouter.post('/api/book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("book data ", req.body);
    const book = {
        book_id: req.body.book_id,
        name: req.body.name,
        qty: req.body.qty
        //enabling parsing of json objects
    };
    const result = yield booksregister.register(book);
    //books.push(book); // pushed on server
    res.send(result); //returning to client 
}));
//ES
booksRouter.get('/api/esbooks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" book data ", req.body);
    console.log(req.body);
    const result = yield esregister.esread(req.body);
    res.send(req.body);
}));
booksRouter.put('/api/esbooks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" book data ", req.body);
    console.log(req.body);
    const result = yield esregister.esread(req.body);
    res.send(req.body);
}));
booksRouter.post('/api/esbooks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" book data ", req.body);
    console.log(req.body);
    const result = yield esregister.esregister(req.body);
    res.send(req.body);
}));
//SCYLLA
//bulkpost
// booksRouter.post('/api/books',async(req,res)=>{
//   console.log("book data ", req.body);
//   console.log('router');
//   console.log(req.body); 
//   const result=await booksregister.registerbulk(req.body);
//   res.send(req.body);  //returning to client 
//   });
//-SCYLLA GET
// booksRouter.get('/api/books',async(req,res)=>{
//    // console.log("book data ", req.body);
//     const result= await booksregister.read();
//     //console.log(result);
//   //books.push(book); // pushed on server
//     res.send(result);  //returning to client 
// });
//SCYLLA UPDATE
//put
booksRouter.put('/api/books/:book_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("book data ", req.body);
    const params = req.params; //params gets all path parameters //there can be more than 1 path params
    const bookId = params.book_id;
    const result = booksregister.update(bookId, req.body); //body is to update the colums  bookId is to specify record to be updated 
    console.log('inside put');
    //books.push(book); // pushed on server
    res.send(result); //returning to client 
}));
// booksRouter.delete('/api/books/:book_id',async(req,res)=>{
//   console.log("book data ", req.body);
//     const params=req.params;  //params gets all path parameters //there can be more than 1 path params
//     const bookId=params.book_id;
//   const result=booksregister.modify(bookId ,req.body); //body is to update the colums  bookId is to specify record to be updated 
//   //books.push(book); // pushed on server
//   res.send(result);  //returning to client 
// });
exports.default = booksRouter;
