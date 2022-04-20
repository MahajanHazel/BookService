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
const core_books_1 = require("./../api/database/core.books");
const kafkaProducer_1 = require("../api/kafka/kafkaProducer");
//import { settings } from '../../settings/properties';
//import { EsQuery } from '../api/elasticsearch/ESQueries';
class BookRegistry {
    constructor() {
        this.database = new core_books_1.BookQuery();
        this.kafka = new kafkaProducer_1.KafkaProducer();
    }
    register(book) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(book);
            yield this.database.save(book);
            //kafka message
            const buf = Buffer.from(JSON.stringify(book));
            const producer = this.kafka.produce(buf, "my-topic");
        });
    }
    // async pushToKafka(key: string, data: any, topicName: string): Promise<void> {
    //     const buf = Buffer.from(JSON.stringify(data));
    //     await this.kafka.produce(buf, topicName);
    //}
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.database.read();
            return result;
        });
    }
    /* async update(
         books:any
         ): Promise<any>{
             this.database.save(books);
         }*/
    update(bookId, book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.update(bookId, book);
            console.log('inside update');
            const buf = Buffer.from(JSON.stringify(book));
            const producer = this.kafka.produce(buf, "my-topic");
        });
    }
    modify(bookId, book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database.modify(bookId, book);
        });
    }
    registerbulk(books) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('booksregistery');
            console.log(books);
            yield this.database.bulksave(books);
        });
    }
}
exports.BookRegistry = BookRegistry;
;
//export default BookRegistry;
//import to router 
//router -> core/booksregistry.ts -> core .books.ts 
