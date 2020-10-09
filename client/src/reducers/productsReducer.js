import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from '../actions/types';

const INITIAL_STATE = { loading: null, products: [] };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: [...payload] };
    case PRODUCTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
