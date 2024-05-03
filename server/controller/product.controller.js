const { Product } = require("../models/products.model")



const fetchProduct = async (req, res) => {
  try {
    const response = await Product.find({})
    res.status(200).send(response)
  } catch (error) {
    console.log(error)
  }
}
const creatProduct = async (req, res) =>{
  try {
    const response = await Product.creatProduct(req.body)
    res.status(201).send(response)
  } catch (error) {
    
  }
}
const deleteProduct = async (req, res) => {
  try {
    const response = await Product.deleteOne({
      _id : +req.params.id
    })
    res.status(202).send(response)
  } catch (error) {
    console.log(error)
  }
};
//request put
const updateProduct = async(req, res) => {
try {
  const response= await Product.updateOne({
_id: req.params.id
  }, req.body)
} catch (error) {
  console.log(error)
}
}

module.exports={fetchProduct, creatProduct, deleteProduct, updateProduct }