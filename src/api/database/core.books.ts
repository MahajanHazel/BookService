import { settings } from "./../../../settings";
import { scyllaClient } from "../../../settings/scyllaClient";
import { Book } from "../../core/book";
import { query } from "express";


//const ENTITY_KEYSPACE = `${settings.KEYSPACE}`;

export class BookQuery {

    public async save(book: Book): Promise<any> {  
        const insertQuery = `INSERT INTO firstkeyspace.books (book_id,name,qty) VALUES (?,?,?) IF NOT EXISTS`; //author to be added
        //const insertQuery = `INSERT INTO firstkeyspace.books (book_id,name,qty,writer) VALUES (?,?,?,?) IF NOT EXISTS`;
        const params = [
            book.book_id,   //params are fille din the ?
            book.name,
            book.qty        //,book.writer           
        ];                           
        console.log(params, insertQuery);
        const result = await scyllaClient.execute(insertQuery, params, {prepare: true,});

        // try {
        //     const result = await scyllaClient.execute(insertQuery, params, {
        //         prepare: true,
        //     });
        
        // } catch (error: any) {
        //     //logger.error("Error while inserting data to db. Error: " + error, { requestId });
        //     throw new error("database error");
        // }
     }
    
    public async read(): Promise<any> {
        const fetchQuery = `SELECT * FROM firstkeyspace.books`;
        /*const params = [
            book.book_id,
            book.name,
            book.qty
        ];*/

        const result = await scyllaClient.execute(fetchQuery, [], {
            prepare: true,
              });
        
        console.log("printing",result.rows);
     
        return result.rows;
        }
    
    public async update(bookId:string, book:any): Promise<void> 
        {
            const fetchQuery = `UPDATE firstkeyspace.books SET qty=${book.qty}, name='${book.name}'WHERE book_id=${bookId}`;
            //no question mark - no params needed// name will be given in put body rec in book:any, id given in url(body of the req)
            const result = await scyllaClient.execute(fetchQuery, [], {
                prepare: true,
                  });
            //return result;
            }
 
    public async modify(bookId:string, book:any): Promise<void> 
            {
                const fetchQuery = `DELETE name,qty FROM firstkeyspace.books WHERE book_id=${bookId}`;
                //no question mark - no params needed// name will be given in put body rec in book:any, id given in url(body of the req)
                const result = await scyllaClient.execute(fetchQuery, [], {
                    prepare: true,
                      });
                //return result;
                }
        
    public async bulksave(books: Array<Book>): Promise<void> 
            {  
                   
                    console.log('database');
                    console.log(books);
                    const query='INSERT INTO firstkeyspace.books (book_id,name,qty) VALUES (?,?,?) IF NOT EXISTS';
                    
                    for(let i=0;i<books.length;i++){
                        const params=[
                            books[i].book_id,books[i].name,books[i].qty
                          ]
                          const result = await scyllaClient.execute(query, params, {prepare: true,});
                          //finalqueries.push({query,params})
                    }
                    //console.log(JSON.stringify(finalqueries));

                    //await scyllaClient.batch(finalqueries,{hints : ['int'] })
                }
                //const preparedquery=scyllaClient.execute(insertQuery,[],{prepare:true})
                    // const queries=['INSERT INTO table_name(book_id) values(7)',
                    // 'INSERT INTO table_name(book_id) values(8)',
                   // 'INSERT INTO table_name(book_id) values(9)']
                    //const query=`INSERT INTO table_name(book_id) values(?)`;
                    //let finalqueries=[];

                //  const params=[
                //     books[i].book_id
                //   ]
                //   finalqueries.push({query,params})
                    //PreparedStatement prepared=scyllaClient.prepare("INSERT INTO firstkeyspace.books (book_id,name,qty) VALUES (?,?,?) IF NOT EXISTS")
                    /*for(let book=0;book<books.length;book++){

                    //const insertQuery='INSERT INTO firstkeyspace.books (book_id,name,qty) VALUES (?,?,?) IF NOT EXISTS';
                    scyllaClient.batch()
                    const params = [
                        book.book_id, 
                        book.name,
                        book.qty     
                    }
                           //,book.writer   */        
                    /*];                           
            
                    const result = await scyllaClient.execute(insertQuery, params, {
                           prepare: true,
                             });
     //abc=[{}]
//post bulk api
//array of books- input
    
    */
            };

             

    