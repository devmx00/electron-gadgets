const { Router } = require('express');
const router = Router();
const Product = require('../models/product');

// method: GET
// route: /products
// description: list all products
router.get('/', (req, res) => {
  Product.find({}, function (err, products) {
    res.send(products);
  });
});

module.exports = router;
