// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Serever connection error", error);
    });
  })
  .catch((err) => {
    console.log("DB connection error ", err);
  });
/*

import express from "express"
const app=express()
(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",()=>{
        console.log("App doesnot listen from server",error);
        throw error
      })
      app.listen(process.env.PORT,()=>{
        console.log(`Server is listening on port ${process.env.PORT}`);
      })
    }catch(error){
        console.log("Database error: ",error);
        throw err
    }
})()
*/
