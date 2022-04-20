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
const esClient_1 = require("../../../settings/esClient");
// import { Document } from "../../core/book";
//import esBuilder from "elastic-builder";
// import { ElasticSearchError } from "./exception";
// const BOOK_ID_INDEX =
// 	settings.ELASTIC.BOOK_ID_INDEX + process.env.f_stage;
// const NAME_INDEX =
// 	settings.ELASTIC.NAME_INDEX + process.env.f_stage;
// const QTY_INDEX =
// 	settings.ELASTIC.QTY_INDEX + process.env.f_stage;
class EsQuery {
    EsSave(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield esClient_1.getElasticSearchClient();
            console.log("esqueries");
            try {
                console.log("Inside");
                console.log(yield client.ping());
                console.log("pinged");
                yield client.index({
                    index: 'genre-one',
                    body: book
                });
                console.log("called");
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    //  public async EsSave(book: any) {
    //     // const params={
    //     //     book_id: book.book_id,  
    //     //       name: book.name,
    //     //       qty:book.qty
    //     // }ts
    //     console.log("esqueries");
    //     try{await client.index({
    //       index: 'genre-one',
    //     })
    // }catch(error){
    //     console.log(error)
    //     throw error}
    // }
    EsRead() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield esClient_1.getElasticSearchClient();
            const result = yield client.search({
                index: 'genre-one',
                query: {
                    match: { qty: '20' }
                }
            });
            console.log(result.hits.hits);
        });
    }
    EsUpdate(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield esClient_1.getElasticSearchClient();
            try {
                console.log("Inside");
                console.log(yield client.ping());
                console.log("pinged");
                const result = yield client.update({
                    index: "genre-one",
                    id: "HiM_IoABKp-dXI-ovU8l",
                    body: {
                        doc: {
                            qty: 100
                        }
                    }
                });
                console.log("called");
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.EsQuery = EsQuery;
;
// public async EsDelete(){
// }
