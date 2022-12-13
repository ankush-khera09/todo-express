const express=require("express");
const server=express();

const cors=require("cors");
server.use(cors());

const parser=require("body-parser");
server.use(parser.json())

const {getAllTodos,addTodo,deleteTodo,updateTodo}=require("./src/controllers");

const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ToDo");

mongoose.connection.on("connected",()=>{
    console.log("DB connected")
});

mongoose.connection.on("error",()=>{
    console.log("DB not connected")
});

server.listen(4000,()=>{
    console.log("Server started at port 4000")
})


server.get("/getTodos",getAllTodos)
server.post("/addTodo",addTodo)
server.delete("/deleteTodo",deleteTodo)
server.get("/updateTodo",updateTodo)