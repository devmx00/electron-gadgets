import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';

import { removeItem } from '../../actions/cartActions';

import './CartItem.css';

const CartItem = ({ product, removeItem }) => {
  return (
    <Fragment>
      <Row className='border-bottom py-3'>
        <Col sm={6} md={2}>
          <Image className='img-fluid img-size' src={product.img} />
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
          <span>Qty: {product.qty}</span>
          <span>
            Subtotal: ${product.qty * product.price.replace(/,/g, '')}
          </span>
        </Col>
        <Col
          sm={6}
          md={3}
          className='d-flex flex-column justify-content-center'
        >
          <Button onClick={() => removeItem(product)}>Remove</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null, { removeItem })(CartItem);
