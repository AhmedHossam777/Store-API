const Product = require('../models/product');

const getAllProducts = async (req, res) => {

  const query = Product.find(req.query);
  const products = await query.sort('name');
  res.status(200).json({
    message: 'success',
    result: products.length,
    products,
  });
};

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('name');
  
  res.status(200).json({
    message: 'success',
    result: products.length,
    products,
  });
};

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
};
