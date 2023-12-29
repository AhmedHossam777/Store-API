
const getAllProductsStatic = async (req, res) => {
  // const products = await Product.find({}).sort('name');
  res.status(200).json({message: 'testing'});
} 

const getAllProducts = async (req, res) => {
  res.status(200).json({message: 'testing'});
}




// const getProduct = async (req, res) => {
//   const { id: productID } = req.params;
//   const product = await Product.findOne({ _id: productID });
//   if (!product) {
//     return res.status(404).send('Product does not exist');
//   }
//   res.status(200).json({ product });
// }


module.exports = {
  getAllProducts,
  getAllProductsStatic,
}