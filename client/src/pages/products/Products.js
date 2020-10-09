import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/product-item/ProductItem';
import { productsRequest } from '../../actions/productsActions';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products);

  useEffect(() => {
    dispatch(productsRequest());
  }, [dispatch]);

  return (
    <div>
      <h2 className='my-4'>All Products</h2>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
