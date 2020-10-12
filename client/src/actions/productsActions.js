import axios from 'axios';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  ITEM_REQUEST,
  ITEM_SUCCESS,
  ITEM_FAILURE,
} from './types';

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

export const categoryRequest = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });
    const { data } = await axios.get(`/products/category/${categoryId}`);
    return dispatch({
      type: CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_FAILURE,
    });
    return console.error(error);
  }
};

export const itemRequest = (productId) => async (dispatch) => {
  try {
    dispatch({ type: ITEM_REQUEST });
    const { data } = await axios.get(`/products/${productId}`);
    return dispatch({
      type: ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ITEM_FAILURE,
    });
    return console.error(error);
  }
};
