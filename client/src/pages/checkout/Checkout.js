import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripePayment from '../../components/stripePay/StripePay';
import { clearCart } from '../../actions/cartActions';
import { cartTotal } from '../../selectors/cartSelectors';

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ cart }) => cart.products);
  const checkoutQty = useSelector(({ cart }) => cart.totalItems);
  const checkoutTotal = useSelector(cartTotal);

  return (
    <Fragment>
      <Row className='mt-4 d-flex justify-content-center'>
        <Col sm={10}>
          <Card>
            <Card.Body>
              <Card.Title className='my-4 ml-2' as='h2'>
                Checkout Summary
              </Card.Title>
              <Col sm={12}>
                {products && products.length > 0
                  ? products.map((product) => (
                      <CheckoutItem key={product._id} product={product} />
                    ))
                  : ''}
              </Col>
              <Col sm={12} className='mt-4'>
                <Row>
                  <Col sm={12} md={4} lg={6} className='text-md-center'>
                    <h5>Total Items: {checkoutQty}</h5>
                    <h4>Total: ${checkoutTotal}</h4>
                  </Col>
                  <Col sm={12} md={8} lg={6} className='text-center'>
                    <Button className='mx-1' as={Link} to='/cart'>
                      Edit Checkout
                    </Button>
                    <Button
                      onClick={() => dispatch(clearCart())}
                      className='mx-1'
                      as={Link}
                      to='/'
                    >
                      Cancel Checkout
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={8} lg={6}>
                <div className='mt-4'>
                  <h5>Select Payment Method:</h5>
                  <Form>
                    <Form.Check
                      type='radio'
                      id='default-radio'
                      label='Credit/Debit Card'
                      defaultChecked
                    />
                  </Form>
                  <StripePayment />
                </div>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Checkout;
