import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetail from '../../components/product-detail/ProductDetail';
import Spinner from '../../components/loader/Loader';
import { itemRequest } from '../../actions/productsActions';

const Product = (props) => {
  const { productId } = props.match.params;
  const dispatch = useDispatch();
  const product = useSelector(({ products }) => products.product);
  const loading = useSelector(({ products }) => products.loading);

  useEffect(() => {
    dispatch(itemRequest(productId));
  }, [dispatch, productId]);

  return (
    <div className="mt-4">
      {loading ? (
        <Spinner loaderMsg='Loading...' />
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
};

export default Product;
