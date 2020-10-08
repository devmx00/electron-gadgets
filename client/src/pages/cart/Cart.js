import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/button';
import CartItem from '../../components/cart-item/CartItem';

const Cart = ({ cartItems, cartTotal }) => {
  return (
    <Fragment>
      <h2 className='my-4'>Shopping Cart</h2>
      <Container>
        <Row>
          <Col sm={9}>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Col>
          <Col sm={3} className='my-3'>
            <div>
              <h3>Summary</h3>
            </div>
            <div>
              <h4>Total: ${cartTotal}</h4>
            </div>
            <Button className='btn-block'>Checkout</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.products,
  cartTotal: 0
});

export default connect(mapStateToProps)(Cart);
