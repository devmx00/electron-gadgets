import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import './CheckoutItem.css';

const CheckoutItem = ({ product }) => {
  return (
    <Fragment>
      <Row className='border-bottom d-flex justify-content-between py-2'>
        <Col sm={12} md={5}>
          <h6 className='mb-3'>{product.title}</h6>
        </Col>
        <Col sm={12} md={2}>
          <h6>Qty: {product.qty}</h6>
        </Col>
        <Col sm={12} md={3}>
          <div className=''>
            <h6>Unit Price: ${product.price}</h6>
            <h6>Subtotal: ${product.qty * product.price.replace(/,/g, '')}</h6>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default connect(null)(CheckoutItem);
