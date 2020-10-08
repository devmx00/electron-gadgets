import React from 'react';
import ProductItem from '../../components/product-item/ProductItem';
import products from '../../data/products';

const GraphicCards = () => {
  return (
    <div>
      <h2 className='my-4'>Graphic Cards</h2>
      {products
        .filter((product) => product.category === 'graphic-cards')
        .map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
  );
};

export default GraphicCards;
