const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

async function connect() {
    return mongoose.connect("mongodb+srv://hemant:9149324514@cluster0.9ksb0.mongodb.net/users")
}

const newSchema = mongoose.Schema({
   name:{type:String, required: true},
   email:{type:String, required:true},
   password:{type:String, required:true},
   profile_photo_url:{type:String, required:true},
   roles:{type: String, required:true}
},

);


app.post("/post", async (req,res)=>{
    const newUser = await users.create(req.body);
    res.send(newUser)
})





app.listen(1234, async (req, res) => {
    connect()
    console.log("listening to port 1234");
})