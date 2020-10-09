import axios from 'axios';
import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } from './types';

export const productsRequest = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.get('/products');
    return dispatch({
      type: PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAILURE,
    });
    return console.error(error);
  }
};
