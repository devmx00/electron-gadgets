import axios from 'axios';
import { AUTH_USER_REGISTER, AUTH_USER_LOGIN, AUTH_USER_LOGOUT } from './types';

export const userRegister = (formData, callback) => async (dispatch) => {
  try {
    const { data } = await axios.post('/register', formData);

    dispatch({
      type: AUTH_USER_REGISTER,
      payload: data.token,
    });

    localStorage.setItem('token', data.token);
    return callback(null);
  } catch (err) {
    return callback(err);
  }
};
