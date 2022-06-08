const express=require('express');
const app=express();

const connectDb=require('./db/connect'); //used to connect db
require('dotenv').config(); //configure env files



app.listen(3000,(req,res)=>{  //-->used to start server in port 3000
    console.log('server running------');
})


const start=async()=>{
    try{
        let connect=await connectDb(process.env.URL);
        console.log('db connected---');
    }
    catch(err){
        console.trace(err);
    }
}

start();