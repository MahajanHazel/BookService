
import express from 'express';
import booksRouter from "./books/router";

import cors from "cors";
import processConsumer from './kafka/callbackConsumer';

const app=express();
const port =5000;

app.use(cors());
app.use(express.json());

app.listen(port, function() {
    console.log('Connected successfully on port'+ port);
    }); 

app.use("/", booksRouter);

processConsumer();