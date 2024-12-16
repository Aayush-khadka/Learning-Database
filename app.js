const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const mongooseConnection  = require('./config/mongoose')

const usermodel = require('./models/user')


app.get("/",(req,res)=>{
    res.send("WORKING")
})

app.get('/create', async (req, res) => {
    try {
        let createduser = await usermodel.create({
            name: "Aayush",
            age: 18
        });
        res.send("USER CREATED");
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send("Failed to create user");
    }
});

app.get('/read', async (req,res)=>{

    let data = await usermodel.find({name:"Aayush"})

    res.send(data)




})

app.listen(port,()=>console.log(`SERVER LISTENING AT PORT: ${port}`))