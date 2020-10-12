const express = require('express');
const mongoose = require('mongoose');
const app = express();
const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/loginRoute');
const productsRoute = require('./routes/productsRoute');

// mongoDB setup
mongoose.connect('mongodb://localhost/ecomm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// load initial temp data into DB
const Category = require('./models/category');
const Product = require('./models/product');
const { categories, products } = require('./data/data');

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

// app setup
app.use(express.json());

// app routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/products', productsRoute);

// port
const PORT = 3001;
app.listen(PORT, console.log(`Server running on ${PORT}...`));
