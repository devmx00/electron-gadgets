import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/button';

const StripeCard = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    console.log('success');

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    // const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card: cardElement,
    // });

    // if (error) {
    //   console.log('[error]', error);
    // } else {
    //   console.log('[PaymentMethod]', paymentMethod);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ value: { postalCode: '12345' } }} />
      <Button className='my-2' type='submit' disabled={!stripe}>
        Pay Now
      </Button>
    </form>
  );
};

export default StripeCard;
