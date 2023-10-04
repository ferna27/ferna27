const express = require('express');
const path = require("path");

let app = express();
app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.get('/',(req,res) =>{

    res.sendFile (path.resolve(__dirname, "vista", 'index.html'));
});
app.get("/tarea1",(req,res) =>{
    res.sendFile (path.resolve(__dirname,"vista","tarea1.html"));
})
app.get("/tarea2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"vista","tarea2.html"));
})
app.get("/tarea3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"vista","tarea3.html"));
})
app.get("/tarea4",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"vista","tarea4.html"))
})
app.get("/tarea5",(req,res) =>{
    res.sendFile(path.resolve(__dirname,"vista","tarea5.html"))
})


app.listen(3500);
console.log("puerto corriendo http://localhost:3500");
