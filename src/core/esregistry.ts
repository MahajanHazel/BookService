import { Book } from './book';
import { EsQuery } from '../api/elasticsearch/ESQueries';

export class EsRegistry{
    database: EsQuery;

    constructor(){
        this.database=new EsQuery();
    }

    async esregister( books:any           //post
        ): Promise<any>{ 
            console.log("esregistry");
            await this.database.EsSave(books); 
        }

    async esread( books:any              //get
            ): Promise<any>{
                await this.database.EsRead(); 
            }

    async esupdate( books:any            //put
                ): Promise<any>{
              await this.database.EsUpdate(books); 
                }    
};
