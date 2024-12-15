const express = require('express')
const app = express()
const port = 3000
const mongooseConnection = require("./config/mongoose")

app.get("/",(req,res)=>{
    res.send("WORKING")
})

app.listen(port,()=>console.log(`SERVER LISTENING AT PORT: ${port}`))