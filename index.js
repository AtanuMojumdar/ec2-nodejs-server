import express from "express";
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/",(req,res)=>{
    console.log(__dirname)
    return res.json({
        message: "Hello World!"
    })
})

app.get("/health",(req,res)=>{
    return res.status(200).json({
        message: "server is healthy!"
    })
})

app.get("/static",(req,res)=>{
    return res.sendFile(join(__dirname,"static/index.html"))
})

app.listen(80,()=>{
    console.log("Server Listening")
})