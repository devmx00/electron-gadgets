import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from 'react-bootstrap/button';
import Modal from '../../modal/Modal';
import { cartTotal } from '../../../selectors/cartSelectors';
import { clearCart } from '../../../actions/cartActions';
import './StripeCard.css';

const StripeCard = () => {
  const [isProcessing, setProcessing] = useState(false);
  const checkoutTotal = useSelector(cartTotal);
  const history = useHistory();
  const dispatch = useDispatch();
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!stripe || !elements) {
        return false;
      }

      const cardElement = elements.getElement(CardElement);

      setProcessing(true);
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      const { data } = await axios.post('/payment', {
        amount: checkoutTotal * 100,
      });

      const result = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      setProcessing(false);
      if (result.error) {
        console.error(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          console.log('Payment succeeded.');
          dispatch(clearCart());
          history.push('/');
        }
      }
    } catch (err) {
      setProcessing(false);
      console.error('Unable to process payment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ hidePostalCode: true }} />
      <Button className='my-3' type='submit' disabled={isProcessing || !stripe}>
        {isProcessing ? 'Processing...' : `Pay Now (Total: $${checkoutTotal})`}
      </Button>
      {!!isProcessing && <Modal show={!!isProcessing} />}
    </form>
  );
};

export default StripeCard;
