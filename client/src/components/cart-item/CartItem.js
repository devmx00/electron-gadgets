import React, { Fragment } from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';

import './CartItem.css';

const CartItem = ({ product }) => {
  return (
    <Fragment>
      <Row className='border-bottom py-3'>
        <Col sm={6} md={2}>
          <Image className='img-fluid img-size' src='img/ps-5.png' />
        </Col>
        <Col
          sm={6}
          md={5}
          className='d-flex flex-column justify-content-center'
        >
          {product.title}
        </Col>
        <Col
          sm={6}
          md={2}
          className='d-flex flex-column justify-content-center'
        >
          <span>Qty: 1</span>
          <span>Subtotal: ${product.price}</span>
        </Col>
        <Col
          sm={6}
          md={3}
          className='d-flex flex-column justify-content-center'
        >
          <Button>Remove</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CartItem;
