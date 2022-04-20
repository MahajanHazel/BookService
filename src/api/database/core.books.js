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
Object.defineProperty(exports, "__esModule", { value: true });
const scyllaClient_1 = require("../../../settings/scyllaClient");
//const ENTITY_KEYSPACE = `${settings.KEYSPACE}`;
class BookQuery {
    save(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertQuery = `INSERT INTO firstkeyspace.books (book_id,name,qty) VALUES (?,?,?) IF NOT EXISTS`; //author to be added
            //const insertQuery = `INSERT INTO firstkeyspace.books (book_id,name,qty,writer) VALUES (?,?,?,?) IF NOT EXISTS`;
            const params = [
                book.book_id,
                book.name,
                book.qty //,book.writer           
            ];
            console.log(params, insertQuery);
            const result = yield scyllaClient_1.scyllaClient.execute(insertQuery, params, { prepare: true, });
            // try {
            //     const result = await scyllaClient.execute(insertQuery, params, {
            //         prepare: true,
            //     });
            // } catch (error: any) {
            //     //logger.error("Error while inserting data to db. Error: " + error, { requestId });
            //     throw new error("database error");
            // }
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchQuery = `SELECT * FROM firstkeyspace.books`;
            /*const params = [
                book.book_id,
                book.name,
                book.qty
            ];*/
            const result = yield scyllaClient_1.scyllaClient.execute(fetchQuery, [], {
                prepare: true,
            });
            console.log("printing", result.rows);
            return result.rows;
        });
    }
    update(bookId, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchQuery = `UPDATE firstkeyspace.books SET qty=${book.qty}, name='${book.name}'WHERE book_id=${bookId}`;
            //no question mark - no params needed// name will be given in put body rec in book:any, id given in url(body of the req)
            const result = yield scyllaClient_1.scyllaClient.execute(fetchQuery, [], {
                prepare: true,
            });
            //return result;
        });
    }
    modify(bookId, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetchQuery = `DELETE name,qty FROM firstkeyspace.books WHERE book_id=${bookId}`;
            //no question mark - no params needed// name will be given in put body rec in book:any, id given in url(body of the req)
            const result = yield scyllaClient_1.scyllaClient.execute(fetchQuery, [], {
                prepare: true,
            });
            //return result;
        });
    }
    bulksave(books) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('database');
            console.log(books);
            const query = 'INSERT INTO firstkeyspace.books (book_id,name,qty) VALUES (?,?,?) IF NOT EXISTS';
            for (let i = 0; i < books.length; i++) {
                const params = [
                    books[i].book_id, books[i].name, books[i].qty
                ];
                const result = yield scyllaClient_1.scyllaClient.execute(query, params, { prepare: true, });
                //finalqueries.push({query,params})
            }
            //console.log(JSON.stringify(finalqueries));
            //await scyllaClient.batch(finalqueries,{hints : ['int'] })
        });
    }
}
exports.BookQuery = BookQuery;
;
