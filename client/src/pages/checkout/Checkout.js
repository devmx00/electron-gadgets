import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useSelector } from 'react-redux';
import { cartTotal } from '../../selectors/cartSelectors';

const Checkout = () => {
  const products = useSelector(({ cart }) => cart.products);
  const checkoutQty = useSelector(({ cart }) => cart.totalItems);
  const checkoutTotal = useSelector(cartTotal);

  return (
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
            <Col sm={4} className='mt-4'>
              <h5>Total Items: {checkoutQty}</h5>
              <h4>Total: ${checkoutTotal}</h4>

              <div className='mt-2'>
                <h5>Select Payment Method:</h5>
                <Form>
                  <Form.Check
                    type='radio'
                    id='default-radio'
                    label='Credit/Debit Card'
                    disabled
                  />
                  <Form.Check
                    type='radio'
                    id='default-radio'
                    label='PayPal'
                    disabled
                  />
                  <Form.Check
                    type='radio'
                    id='default-radio'
                    label='Stripe'
                    disabled
                  />
                </Form>
                <div className='mt-2'>
                  <Button className='mx-1' as={Link} to='/cart'>
                    Edit Order
                  </Button>

                  <Button className='mx-1'>Pay Now</Button>
                </div>
              </div>
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Checkout;
