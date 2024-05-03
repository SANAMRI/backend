//import express

const { fetchProduct, creatProduct } = require("../controller/product.controller")

const productRouter = require ("express").Router()


productRouter.get ("/", fetchProduct)
productRouter.post ("/", creatProduct)


module.exports = productRouter