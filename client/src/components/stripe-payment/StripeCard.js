import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/button';
import { cartTotal } from '../../selectors/cartSelectors';
import './StripeCard.css';

const StripeCard = () => {
  const checkoutTotal = useSelector(cartTotal);

  const [isProcessing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setProcessing(true);

    const { data } = await axios.post('/payment', {
      amount: checkoutTotal * 100,
    });

    const cardElement = elements.getElement(CardElement);

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    const result = await stripe.confirmCardPayment(data.client_secret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });

    setProcessing(false);

    if (result.error) {
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('success');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ hidePostalCode: true }} />
      <Button className='my-2' type='submit' disabled={isProcessing || !stripe}>
        {isProcessing ? 'Processing...' : `Pay Now (Total: $${checkoutTotal})`}
      </Button>
    </form>
  );
};

export default StripeCard;
