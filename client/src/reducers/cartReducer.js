import { ADD_ITEM, DECREMENT_ITEM, REMOVE_ITEM } from '../actions/types';

const INITIAL_STATE = { products: [], totalItems: 0 };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      const existingProduct = state.products.find(
        (product) => product._id === payload._id
      );

      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product._id === payload._id
              ? { ...product, qty: product.qty + 1 }
              : product
          ),
          totalItems: state.totalItems + 1,
        };
      }
      return {
        ...state,
        products: [...state.products, { ...payload, qty: 1 }],
        totalItems: state.totalItems + 1,
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === payload._id
            ? product.qty === 1
              ? product
              : { ...product, qty: product.qty - 1 }
            : product
        ),
        totalItems: payload.qty === 1 ? state.totalItems : state.totalItems - 1,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload._id),
        totalItems: state.totalItems - payload.qty,
      };
    default:
      return state;
  }
};
