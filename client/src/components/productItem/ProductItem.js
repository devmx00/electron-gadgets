import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';
import { addItem } from '../../actions/cartActions';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Row className='border-bottom p-3'>
      <Col xs={12} sm={3} className='text-center'>
        <Image className='img-fluid img-size' src={product.img} />
      </Col>
      <Col xs={12} sm={6} className='py-2'>
        <Link to={`/products/${product._id}`}>
          <h5>{product.title}</h5>
        </Link>
      </Col>
      <Col xs={12} sm={3} className='my-2'>
        <h4>${product.price}</h4>
        {!!product && product.stock > 0 ? (
          <Button onClick={() => dispatch(addItem(product))}>
            ADD TO CART
          </Button>
        ) : (
          <Button onClick={() => dispatch(addItem(product))} disabled>
            UNAVAILABLE
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default ProductItem;
