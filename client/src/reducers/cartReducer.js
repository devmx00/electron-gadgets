import { ADD_ITEM, REMOVE_ITEM } from '../actions/types';

const INITIAL_STATE = { products: [] };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return { ...state, products: [...state.products, payload] };
    case REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter((product) => product.id !== payload),
      };
    default:
      return state;
  }
};
