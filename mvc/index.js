const express = require('express');

const mongoose = require('mongoose');

const rou = require('./view/route')

const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 2000;

const app = express()

//middleware
app.use(express.json())
app.use('/api', rou) // ---> http://localhost:4000/api

// app.get('/',(req,res)=>{
//     res.send('hello Express')
// })

// app.get('/home',(req,res)=>{
//     res.send('hello home Express')
// })

// app.get('/home/:name',(req,res)=>{
//     username = req.params.name
//     res.send(`hello home Express ${username}`)
// })

mongoose.connect('mongodb://localhost:27017/Mydata')
.then(()=>{
    // console.log('DB Connected Successfully')
    // app.listen(4000)

    console.log(`Server Connected to Port ${PORT}`)
    app.listen(PORT)
})

//Bmwo0q7vfDLtd9Et