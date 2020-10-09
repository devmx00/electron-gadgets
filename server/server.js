const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productsRoute = require('./routes/productsRoute');

// mongoDB setup
mongoose.connect('mongodb://localhost/ecomm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// load initial temp data into DB
const Product = require('./models/product');
const products = require('./data/products');
Product.insertMany(products);

// app setup
app.use(express.json());

// app routes
app.use('/products', productsRoute);

// port
const PORT = 3001;
app.listen(PORT, console.log(`Server running on ${PORT}...`));
