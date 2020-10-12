import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
} from '../actions/types';

const INITIAL_STATE = { loading: null, products: [] };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_REQUEST:
    case CATEGORY_REQUEST:
      return { ...state, loading: true };
    case PRODUCTS_SUCCESS:
    case CATEGORY_SUCCESS:
      return { ...state, loading: false, products: [...payload] };
    case PRODUCTS_FAILURE:
    case CATEGORY_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};
