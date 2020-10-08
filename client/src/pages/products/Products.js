import React from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import products from '../../data/products';

const Products = () => {
  return (
    <div>
      <h2 className='my-4'>All Products</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
