const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    img: String,
    title: String,
    about: Array,
    price: String,
    category: String,
    stock: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
