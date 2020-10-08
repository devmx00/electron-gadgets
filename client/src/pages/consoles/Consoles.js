import React from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import products from '../../data/products';

const Consoles = () => {
  return (
    <div>
      <h2 className='my-4'>Consoles</h2>
      {products
        .filter((product) => product.category === 'consoles')
        .map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Consoles;
