import mongoose from "mongoose" 
import express from "express"
import cors from "cors"
import dotenv from "dotenv" 
import {test} from './backend/controllers/user.controller'
dotenv.config();

mongoose.connect(urldb)

.then (()=> {
    console.log('funciona mi conexcion a base de datos')
})
.catch((err)=>{
    console.log('No funciona mi conexion a base de datos')
})

const app = express
app.request(cors())

app.listen(4000, ()=>{
    console.log ('funciona mi servidor local')
})

test()