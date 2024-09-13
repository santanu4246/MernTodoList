import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGOURL).then(()=> console.log("database connected")).catch((err)=> console.log(err));

app.get('/',(req,res)=>{
   res.send("hello")
})
app.listen(PORT,()=>{
    console.log(`server is listening http://localhost:${PORT}`);
    
})