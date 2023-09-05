const express = require("express");
const app = express();
const {Server} =require("socket.io") //it is a class provider by socket

const http = require('http'); //It is a Http module inbuilt in nodejs
const server = http.createServer(app); //We create a server and then pass the express server obejct app
const io =  new Server(server);//server class instance is being created


io.on('connection',(socket)=>{
    console.log('Scocket Connected',socket.id);
})//triggered as sson as some socekt is coonnected to thte server















const PORT = process.env.PORT||5000
server.listen (PORT,()=>{
    console.log(`Listening on Port: ${PORT}`)
})