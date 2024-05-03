const {product, Product}= require ("./products.model")
const {productData}= require("./productData")


const seed = async () => {
  const insertProducts = await Product.create (productData);

};

seed()