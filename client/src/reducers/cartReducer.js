import { ADD_ITEM, REMOVE_ITEM } from '../actions/types';

const INITIAL_STATE = { products: [] };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      const existingProduct = state.products.find(
        (product) => product.id === payload.id
      );

      if (existingProduct) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === payload.id
              ? { ...product, qty: product.qty + 1 }
              : product
          ),
        };
      }
      return {
        ...state,
        products: [...state.products, { ...payload, qty: 1 }],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
};
