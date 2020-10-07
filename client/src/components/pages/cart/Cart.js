import React, { Fragment } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import ListGroup from 'react-bootstrap/listgroup';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';

import './Cart.css';

const Cart = () => {
  return (
    <Fragment>
      <h2 className='my-4'>Shopping Cart</h2>
      <Container>
        <Row>
          <Col sm={9}>
            <Row className='border-bottom py-3'>
              <Col sm={6} md={2}>
                <Image className='img-fluid img-size' src='img/ps-5.png' />
              </Col>
              <Col
                sm={6}
                md={5}
                className='d-flex flex-column justify-content-center'
              >
                Sony PlayStation 5 - DISC Edition
              </Col>
              <Col
                sm={6}
                md={2}
                className='d-flex flex-column justify-content-center'
              >
                <span>Qty: 1</span>
                <span>Subtotal: $729.00</span>
              </Col>
              <Col
                sm={6}
                md={3}
                className='d-flex flex-column justify-content-center'
              >
                <Button>Remove</Button>
              </Col>
            </Row>
            <Row className='border-bottom py-3'>
              <Col sm={6} md={2}>
                <Image className='img-fluid img-size' src='img/ps-5.png' />
              </Col>
              <Col
                sm={6}
                md={5}
                className='d-flex flex-column justify-content-center'
              >
                Sony PlayStation 5 - DISC Edition
              </Col>
              <Col
                sm={6}
                md={2}
                className='d-flex flex-column justify-content-center'
              >
                <span>Qty: 1</span>
                <span>Subtotal: $729.00</span>
              </Col>
              <Col
                sm={6}
                md={3}
                className='d-flex flex-column justify-content-center'
              >
                <Button>Remove</Button>
              </Col>
            </Row>
            <Row className='border-bottom py-3'>
              <Col sm={6} md={2}>
                <Image className='img-fluid img-size' src='img/ps-5.png' />
              </Col>
              <Col
                sm={6}
                md={5}
                className='d-flex flex-column justify-content-center'
              >
                Sony PlayStation 5 - DISC Edition
              </Col>
              <Col
                sm={6}
                md={2}
                className='d-flex flex-column justify-content-center'
              >
                <span>Qty: 1</span>
                <span>Subtotal: $729.00</span>
              </Col>
              <Col
                sm={6}
                md={3}
                className='d-flex flex-column justify-content-center'
              >
                <Button>Remove</Button>
              </Col>
            </Row>
            <Row className='border-bottom py-3'>
              <Col sm={6} md={2}>
                <Image className='img-fluid img-size' src='img/ps-5.png' />
              </Col>
              <Col
                sm={6}
                md={5}
                className='d-flex flex-column justify-content-center'
              >
                Sony PlayStation 5 - DISC Edition
              </Col>
              <Col
                sm={6}
                md={2}
                className='d-flex flex-column justify-content-center'
              >
                <span>Qty: 1</span>
                <span>Subtotal: $729.00</span>
              </Col>
              <Col
                sm={6}
                md={3}
                className='d-flex flex-column justify-content-center'
              >
                <Button>Remove</Button>
              </Col>
            </Row>
          </Col>

          <Col sm={3} className="my-3">
            <div>
              <h3>Summary</h3>
            </div>
            <div>
              <h4>Total: $1292.00</h4>
            </div>
            <Button className='btn-block'>Checkout</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cart;
