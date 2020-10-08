import React from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import products from '../../data/products';

const Laptops = () => {
  return (
    <div>
      <h2 className='my-4'>Laptops</h2>
      {products
        .filter((product) => product.category === 'laptops')
        .map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Laptops;
