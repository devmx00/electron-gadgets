import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/loader/Loader';
import ProductItem from '../../components/product-item/ProductItem';
import { productsRequest } from '../../actions/productsActions';

const Accessories = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products);
  const loading = useSelector(({ products }) => products.loading);

  useEffect(() => {
    dispatch(productsRequest());
  }, [dispatch]);
  return (
    <div>
      <h2 className='my-4'>Accessories</h2>
      {loading ? (
        <Spinner loaderMsg='Loading...' />
      ) : (
        products
          .filter((product) => product.category === 'accessories')
          .map((product) => <ProductItem key={product._id} product={product} />)
      )}
    </div>
  );
};

export default Accessories;
