import {  getElasticSearchClient } from "../../../settings/esClient";
//import { settings } from "../../../settings/properties";
//import { settings } from "../../../settings"
import { Client } from "@elastic/elasticsearch";
import { Book } from '../../core/book';
// import { Document } from "../../core/book";
//import esBuilder from "elastic-builder";
// import { ElasticSearchError } from "./exception";
// const BOOK_ID_INDEX =
// 	settings.ELASTIC.BOOK_ID_INDEX + process.env.f_stage;
// const NAME_INDEX =
// 	settings.ELASTIC.NAME_INDEX + process.env.f_stage;
// const QTY_INDEX =
// 	settings.ELASTIC.QTY_INDEX + process.env.f_stage;

 

export class EsQuery{
    
    public async EsSave(book: any) {
    
         const client = await getElasticSearchClient()
        console.log("esqueries");
        try{
        console.log("Inside");
        console.log(await client.ping());
        console.log("pinged");
        await client.index<Document>({
          index: 'genre-one',
          body:book
        })
        console.log("called");
    }catch(error){
        console.log(error);
        throw error}
    
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

     
    public async EsRead(){
        const client = await getElasticSearchClient()
        const result= await client.search<Document>({
            index: 'genre-one',
            query: {
              match: { qty: '20' }
            }
          })
          console.log(result.hits.hits)
        }

    
public async EsUpdate(book: any)
{
     const client = await getElasticSearchClient()
     try{
          console.log("Inside");
          console.log(await client.ping());
          console.log("pinged");
          const result=await client.update<Document>({
              index:"genre-one",
            
	            id: "HiM_IoABKp-dXI-ovU8l",
              body:{
                 doc:{
                   qty:100
              } }
          })
          console.log("called");
      }catch(error){
          console.log(error);
          throw error}
         
        }

    
};


    // public async EsDelete(){

    // }
