import React from 'react';
import Alert from 'react-bootstrap/alert';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCard from './subcomponents/StripeCard';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const StripePayment = () => {
  return (
    <div className='my-2'>
      <Elements stripe={stripePromise}>
        <Alert variant='info' className='d-flex flex-column'>
          <p>Please enter card details below:</p>
          <span>Card Number: 4242 4242 4242 4242</span>
          <span>MM/YY: 02/22</span>
          <span>CVC: 123</span>
        </Alert>
        <StripeCard />
      </Elements>
    </div>
  );
};

export default StripePayment;
