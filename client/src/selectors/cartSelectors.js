import { createSelector } from 'reselect';

const cartItemsSelector = (state) => state.cart.products;

export const cartTotal = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce(
    (itemsTotal, subTotal) =>
      itemsTotal + subTotal.qty * subTotal.price.replace(/,/g, ''),
    0
  )
);
