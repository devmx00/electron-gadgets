import React from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import products from '../../data/products';

const Accessories = () => {
  return (
    <div>
      <h2 className='my-4'>Accessories</h2>
      {products
        .filter((product) => product.category === 'accessories')
        .map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Accessories;
