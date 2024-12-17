const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const mongooseConnection  = require('./config/mongoose')

 const usermodel = require('./models/user')


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",async (req,res)=>{
    
    res.send("WORKING")

})



app.get("/users",async (req,res)=>{
    
    let All_data = await usermodel.find()
    res.send(All_data)

})

app.get('/users/:username',async(req,res)=>{

    let updated_data = await usermodel.findOne({name:req.params.username})
    res.send(updated_data)




})
app.post('/update/:username',async(req,res)=>{

    let {name, age} = req.body
    let updated_data = await usermodel.findOneAndUpdate({name:req.params.username},{name,age})
    res.send(updated_data)
})

app.delete('/delete/:username',async(req,res)=>{

    let updated_data = await usermodel.findOneAndDelete({name:req.params.username})
    res.send("DELETED")
})








app.post('/create',(req,res)=>{
    // res.send(req.body)
    let {name,age}= req.body
    usermodel.create({
        name:name,
        age:age
    })
    res.send({
        name:name,
        age:age
    })
})






// app.get('/create', async (req, res) => {
//     try {
//         let createduser = await usermodel.create({
//             name: "SAMIP",
//             age: 18
//         });
//         res.send("USER CREATED");
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).send("Failed to create user");
//     }
// });

// app.get('/read', async (req,res)=>{

//     let data = await usermodel.find({name:"Aayush"})

//     res.send(data)
// })

// app.get('/update', async (req,res)=>{

//     let data = await usermodel.updateMany({name:"Aayush"},{name:"KING"},{new:true})
//     res.send(data)


// })
// app.get('/delete', async (req,res)=>{

//     let data = await usermodel.deleteOne({name:"KING"},{new:true})
//     res.send(data)


// })


app.listen(port,()=>console.log(`SERVER LISTENING AT PORT: ${port}`))