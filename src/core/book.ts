import { float } from "@elastic/elasticsearch/lib/api/types";

export interface Book{
    book_id: number,
    qty?: number,
    name?: string,
    price?: float,
    desc?: JSON
}          


// export interface Document {
//     book_id: number
//     name: string
//     qty: number
//   }
