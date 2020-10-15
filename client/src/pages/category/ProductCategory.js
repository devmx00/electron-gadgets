import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/productItem/ProductItem';
import { categoryRequest } from '../../actions/productsActions';
import Spinner from '../../components/loader/Loader';

const Products = (props) => {
  const { categoryId } = props.match.params;
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products);
  const loading = useSelector(({ products }) => products.loading);

  useEffect(() => {
    dispatch(categoryRequest(categoryId));
  }, [dispatch, categoryId]);

  const categoryName = {
    1: 'Consoles',
    2: 'Laptops',
    3: 'Graphic Cards',
    4: 'Accessories',
  };

  return (
    <div>
      <h2 className='my-4'>{categoryName[categoryId]} </h2>
      {loading ? (
        <Spinner loaderMsg='Loading...' />
      ) : (
        products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
