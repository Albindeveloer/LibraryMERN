import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import booksRoute from "./routes/books.js"

const app=express()
dotenv.config()

//mongodb connection
const connect = async ()=>{

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected', err => {
    console.log(err);
  });

  app.get("/users",(req,res)=>{
    res.send("hi")
})

//middlewres
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/books",booksRoute)


app.listen(8800, ()=>{
    connect()  //call mongodb when conneced to bckend
    console.log("connected to backend")
})