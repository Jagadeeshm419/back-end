const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/home',(req,res)=>{
    res.send("Home Page")
})

app.get('/home/:admin/',(req,res)=> {
    user = req.params.admin;
    res.send(`Home Page - Express - ${user}`)
})

mongoose.connect('mongodb://localhost:27017/ ')
.then(()=>{
    console.log('DataBase Connected Successfully')
    app.listen(1000)
})