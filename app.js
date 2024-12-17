const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const mongooseConnection = require("./config/mongoose");

const usermodel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mockData = [
  {
    name: "Alice Johnson",
    age: 29,
    gender: "Female",
  },
  {
    name: "John Smith",
    age: 34,
    gender: "Male",
  },
  {
    name: "Emma Lee",
    age: 22,
    gender: "Female",
  },
  {
    name: "Michael Brown",
    age: 41,
    gender: "Male",
  },
  {
    name: "Olivia Williams",
    age: 25,
    gender: "Female",
  },
  {
    name: "David Miller",
    age: 38,
    gender: "Male",
  },
  {
    name: "Sophia Taylor",
    age: 30,
    gender: "Female",
  },
  {
    name: "James Anderson",
    age: 45,
    gender: "Male",
  },
  {
    name: "Isabella Martinez",
    age: 27,
    gender: "Female",
  },
  {
    name: "Ethan Wilson",
    age: 33,
    gender: "Male",
  },
  {
    name: "Charlotte Davis",
    age: 19,
    gender: "Female",
  },
  {
    name: "Benjamin Garcia",
    age: 39,
    gender: "Male",
  },
  {
    name: "Amelia Rodriguez",
    age: 28,
    gender: "Female",
  },
  {
    name: "Liam Harris",
    age: 32,
    gender: "Male",
  },
  {
    name: "Mia Clark",
    age: 24,
    gender: "Female",
  },
];

app.get("/", async (req, res) => {
  let data = await usermodel.find();
  res.send(data);
});

app.get("/createmany", async (req, res) => {
  let data = await usermodel.insertMany(mockData);
  res.send(data);
});

// AND OPERATOR
// app.get("/users",async (req,res)=>{

//     let data = await usermodel.find( {$and: [{age:{$gte:19}},{age:{$lte:30}}]})
//     res.send(data)

// })

// app.get("/users",async (req,res)=>{

//     let data = await usermodel.find({name:{$regex:/^m.*a$/i}})
//     res.send(data)

// })

app.get("/users", async (req, res) => {
  try {
    let data = await usermodel.find({ name: { $regex: /^m.*k$/i } });
    res.send(data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// app.get("/users",async (req,res)=>{

//     let All_data = await usermodel.find()
//     res.send(All_data)

// })

// app.get('/users/:username',async(req,res)=>{

//     let updated_data = await usermodel.findOne({name:req.params.username})
//     res.send(updated_data)

// })
// app.post('/update/:username',async(req,res)=>{

//     let {name, age} = req.body
//     let updated_data = await usermodel.findOneAndUpdate({name:req.params.username},{name,age})
//     res.send(updated_data)
// })

// app.delete('/delete/:username',async(req,res)=>{

//     let updated_data = await usermodel.findOneAndDelete({name:req.params.username})
//     res.send("DELETED")
// })

// app.post('/create',(req,res)=>{
//     // res.send(req.body)
//     let {name,age}= req.body
//     usermodel.create({
//         name:name,
//         age:age
//     })
//     res.send({
//         name:name,
//         age:age
//     })
// })

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

app.listen(port, () => console.log(`SERVER LISTENING AT PORT: ${port}`));
