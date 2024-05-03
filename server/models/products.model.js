const { Schema, model } = require("mongoose");
const db= require ("./main")
// javascript
const productSchema = Schema({
  id: Number,
  productName : String,
  price:Number, 
  imageUrl : {type:String,default:"https://th.bing.com/th/id/OIP.DfbvP4LXGsNlhGino3DA6QHaHa?w=193&h=192&c=7&r=0&o=5&pid=1.7"},
  description: String,
  category: String, 
})

const Product = model("products",productSchema)

module.exports = {Product}
