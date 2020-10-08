import { ADD_ITEM, REMOVE_ITEM } from './types';

export const addItem = (product) => ({
  type: ADD_ITEM,
  payload: product,
});

export const removeItem = (productId) => ({
  type: REMOVE_ITEM,
  payload: productId,
});
