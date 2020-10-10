import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import CartItem from '../../components/cart-item/CartItem';
import { cartTotal } from '../../selectors/cartSelectors';

const Cart = ({ cartItems, cartTotal }) => {
  return (
    <Fragment>
      <h2 className='my-4'>Shopping Cart</h2>
      <Container>
        <Row>
          <Col sm={9}>
            {cartItems.length > 0 ? (
              cartItems.map((product) => (
                <CartItem key={product._id} product={product} />
              ))
            ) : (
              <div className='h-100 text-center d-flex flex-column justify-content-center'>
                <i
                  className='fas fa-shopping-cart fa-3x mt-5 mb-2'
                  style={{ color: 'lightgrey' }}
                ></i>
                <h5 style={{ color: 'lightgrey' }}>Cart is empty</h5>
              </div>
            )}
          </Col>
          <Col sm={3} className='my-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className='border-bottom mb-4' as='h3'>
                  Cart Summary
                </Card.Title>
                <Card.Subtitle>
                  <h4>Total: ${cartTotal}</h4>
                </Card.Subtitle>
                <Button className='btn-block' as={Link} to='/checkout'>
                  Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.products,
  cartTotal: cartTotal(state),
});

export default connect(mapStateToProps)(Cart);
