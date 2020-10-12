const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    img: { type: 'String' },
    title: { type: 'String', required: true },
    about: [{ type: 'String' }],
    price: { type: 'String', required: true },
    stock: { type: 'String', required: true },
    description: {type: 'String'},
    specifications: [{ type: 'String' }],
    category: { type: Number, ref: 'Category' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
