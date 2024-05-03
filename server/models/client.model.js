const { Schema, model } = require("mongoose");
const db= require ("./main")
// javascript
const clientSchema = Schema({
  id: Number,
  name : String,
  email : {type:String,unique:true},
  password : String , 
  imageUrl : {type:String,default:"https://th.bing.com/th/id/OIP.DfbvP4LXGsNlhGino3DA6QHaHa?w=193&h=192&c=7&r=0&o=5&pid=1.7"},
  phoneNumber : Number , 
  createdAt : {type : Date ,required:true, default : Date.now},
})

const Client = model("clients",clientSchema)

module.exports = {Client}