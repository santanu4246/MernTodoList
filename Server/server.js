import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import Todoroutes from "./Routes/Todoroutes.js"
import bodyParser from 'body-parser';
import cors from "cors"
dotenv.config()
const app = express()
app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGOURL).then(()=> console.log("database connected")).catch((err)=> console.log(err));

app.use('/',Todoroutes)
app.listen(PORT,()=>{
    console.log(`server is listening http://localhost:${PORT}`);
    
})