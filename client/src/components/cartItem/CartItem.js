import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';
import { addItem, decrementItem, removeItem } from '../../actions/cartActions';
import './CartItem.css';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Row className='border-bottom py-3'>
        <Col sm={6} md={2}>
          <Image className='img-fluid img-size' src={product.img} />
        </Col>
        <Col sm={6} md={5} className='mt-4'>
          <Link to={`/products/${product._id}`}>
            <h5>{product.title}</h5>
          </Link>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3} className='mt-4'>
          <span>
            <Button
              className=''
              onClick={() => dispatch(decrementItem(product))}
            >
              -
            </Button>
            <span className='mx-1'>Qty: {product.qty}</span>
            <Button
              className=''
              onClick={() => {
                dispatch(addItem(product));
              }}
            >
              +
            </Button>
          </span>

          <div className='mt-4'>
            <h5>Subtotal: ${product.qty * product.price.replace(/,/g, '')}</h5>
          </div>
        </Col>
        <Col xs={6} sm={6} md={1} className='my-auto '>
          <span
            className='cart rm-icon'
            alt='remove'
            onClick={() => dispatch(removeItem(product))}
          >
            X
          </span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CartItem;
