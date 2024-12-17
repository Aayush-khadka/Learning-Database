const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

mongoose
  .connect("mongodb://0.0.0.0:27017/TestDatabase")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

// const db = mongoose.Connection()
// db.on("error",(err)=>{
//     debuglog(err)
// })

// db.on("Open",()=>{
//         debuglog("conected to data base")
// })

// module.exports = db;
