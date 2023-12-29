const express = require('express');

const router = express.Router();
const controller = require('../controllers/products');

router.route('/').get(controller.getAllProducts);
router.route('/static').get(controller.getAllProductsStatic);


module.exports = router;
