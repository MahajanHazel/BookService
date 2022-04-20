import express from "express";
 import {BookRegistry } from "../../../src/core/booksregistry"
import { EsRegistry } from "../../core/esregistry";
import { Book } from "../../core/book";
 const booksRouter= express.Router();
 const booksregister :BookRegistry=new BookRegistry();
 const esregister : EsRegistry =new EsRegistry();



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

//SCYLLA UPDATE
//put

booksRouter.put('/api/books/:book_id',async(req,res)=>{
  console.log("book data ", req.body);
  const params=req.params;  //params gets all path parameters //there can be more than 1 path params
  const bookId=params.book_id;

 
const result=booksregister.update(bookId ,req.body); //body is to update the colums  bookId is to specify record to be updated 
console.log('inside put')
//books.push(book); // pushed on server
res.send(result);  //returning to client 
});

//SCYLLA single post

booksRouter.post('/api/book',async (req,res)=>{
  
  console.log("book data ", req.body);
  
  const book:Book={
    book_id: req.body.book_id,
    name: req.body.name,
    qty: req.body.qty
    
    //enabling parsing of json objects
};
   const result= await booksregister.register(book);
   
//books.push(book); // pushed on server
  res.send(result);  //returning to client 
});

//ES

booksRouter.get('/api/esbooks',async(req,res)=>{
  console.log(" book data ",req.body);
  
  console.log(req.body); 
  const result=await esregister.esread(req.body);
  
  res.send(req.body); 
  });


booksRouter.put('/api/esbooks',async(req,res)=>{
    console.log(" book data ",req.body);
    
    console.log(req.body); 
    const result=await esregister.esread(req.body);
    
    res.send(req.body); 
});


booksRouter.post('/api/esbooks',async(req,res)=>{
  console.log(" book data ",req.body);
  
  console.log(req.body); 
  const result=await esregister.esregister(req.body);
  
  res.send(req.body); 
  });


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




// booksRouter.delete('/api/books/:book_id',async(req,res)=>{
//   console.log("book data ", req.body);
//     const params=req.params;  //params gets all path parameters //there can be more than 1 path params
//     const bookId=params.book_id;

   
//   const result=booksregister.modify(bookId ,req.body); //body is to update the colums  bookId is to specify record to be updated 

//   //books.push(book); // pushed on server
//   res.send(result);  //returning to client 
// });


export default booksRouter;
