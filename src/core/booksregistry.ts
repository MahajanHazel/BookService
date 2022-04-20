import { BookQuery } from './../api/database/core.books';
import { Book } from './book';
import { KafkaProducer } from '../api/kafka/kafkaProducer';
import { Kafka } from 'kafkajs';

//import { settings } from '../../settings/properties';
//import { EsQuery } from '../api/elasticsearch/ESQueries';

export class BookRegistry{
    database:BookQuery;
    kafka: KafkaProducer;

    constructor(){
        this.database = new BookQuery();
        this.kafka = new KafkaProducer();
    }
    
   
    async register( book:Book): Promise<any>{
        console.log(book)
        await this.database.save(book); 

        //kafka message
        const buf = Buffer.from(JSON.stringify(book));
        const producer = this.kafka.produce(buf,"my-topic")
    
    }

    // async pushToKafka(key: string, data: any, topicName: string): Promise<void> {
    //     const buf = Buffer.from(JSON.stringify(data));
    //     await this.kafka.produce(buf, topicName);
    //}
     
    async read(): Promise<any>{

        const result=await this.database.read();
        return result;
    }

   /* async update(
        books:any
        ): Promise<any>{
            this.database.save(books);
        }*/

    async update(bookId:string,book:any): 
    Promise<any>{
        await this.database.update(bookId,book);
        console.log('inside update')
        
        const buf = Buffer.from(JSON.stringify(book));
        const producer = this.kafka.produce(buf,"my-topic")
    }

    async modify(bookId:string,book:any): 
    Promise<any>{
        await this.database.modify(bookId,book);
    }

    async registerbulk(
        books:Array<Book>
    ): Promise<any>{
        console.log('booksregistery')
        console.log(books);
        await this.database.bulksave(books); 
    }
   

};





//export default BookRegistry;
//import to router 
//router -> core/booksregistry.ts -> core .books.ts 
