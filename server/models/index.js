const mongoose = require('mongoose');
const Category = require('./category');
const Product = require('./product');
const categories = require('../data/categories');
const products = require('../data/products');
const mongoDB_URI = process.env.MONGODB_URI || 'mongodb://localhost/electron';

module.exports = () => {
  // mongoDB setup
  mongoose.connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // seed data into DB
  Category.deleteMany({}, function (err) {
    if (err) {
      console.error('Failed to remove previous category data');
      process.exit(1);
    }
  });

  Product.deleteMany({}, function (err) {
    if (err) {
      console.error('Failed to remove previous product data');
      process.exit(1);
    }
  });

  Category.insertMany(categories, function (err) {
    if (err) {
      console.error('Failed to load initial category data');
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
