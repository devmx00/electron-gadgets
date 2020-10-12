const mongoose = require('mongoose');

module.exports = () => {
  // mongoDB setup
  mongoose.connect('mongodb://localhost/ecomm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // load initial temp data into DB
  const Category = require('./category');
  const Product = require('./product');
  const { categories, products } = require('../data/data');

  Category.deleteMany({}, function (err) {
    if (err) {
      console.error('Failed to remove previous category data');
      process.exit(1);
    }
  });

  Category.insertMany(categories, function (err) {
    if (err) {
      console.error('Failed to load initial category data');
      process.exit(1);
    }
  });

  Product.deleteMany({}, function (err) {
    if (err) {
      console.error('Failed to remove previous product data');
      process.exit(1);
    }
  });

  Product.insertMany(products, function (err) {
    if (err) {
      console.error('Failed to load initial product data');
      process.exit(1);
    }
  });
};
