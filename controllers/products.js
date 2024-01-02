const e = require('express');
const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price');

  res.status(200).json({
    message: 'success',
    result: products.length,
    products,
  });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }; //? $options: 'i' -> case insensitive, $regex: name -> search for name even if it's not the full name
  }

  // console.log(queryObject);
  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(',').join(' ');
    console.log(sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }
  const product = await result;
  res.status(200).json({
    message: 'success',
    result: product.length,
    product,
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
