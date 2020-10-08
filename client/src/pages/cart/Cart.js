import React, { Fragment } from 'react';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import Image from 'react-bootstrap/image';
import CartItem from '../../components/cart-item/CartItem';

const items = [
  {
    id: 1,
    title: 'ITEM 1',
    price: '729.00',
  },
  {
    id: 2,
    title: 'ITEM 2',
    price: '123.00',
  },
  {
    id: 3,
    title: 'ITEM 3',
    price: '359.00',
  },
];

const Cart = () => {
  return (
    <Fragment>
      <h2 className='my-4'>Shopping Cart</h2>
      <Container>
        <Row>
          <Col sm={9}>
            {items.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Col>
          <Col sm={3} className='my-3'>
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
