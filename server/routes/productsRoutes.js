const Product = require('../models/product');

module.exports = (app) => {
  // route: /products
  // method: GET
  // description: list all products
  app.get('/products', (req, res) => {
    Product.find({}, function (err, products) {
      if (err)
        return res.status(400).send({ error: 'Unable to load products.' });
      res.send(products);
    });
  });

  // route: /products/category/:categoryId
  // method: GET
  // description: list all products by category
  app.get('/products/category/:categoryId', (req, res) => {
    Product.find({ category: req.params.categoryId }, function (err, products) {
      if (err)
        return res.status(400).send({ error: 'Unable to load products.' });
      res.send(products);
    });
  });

  // route: /products/:productId
  // method: GET
  // description: show product by id
  app.get('/products/:productId', (req, res) => {
    Product.findById(req.params.productId, function (err, products) {
      if (err)
        return res.status(400).send({ error: 'Unable to load products.' });
      res.send(products);
    });
  });
};
