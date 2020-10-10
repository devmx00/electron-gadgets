import {
  AUTH_USER_REGISTER,
  AUTH_USER_LOGIN,
  AUTH_USER_LOGOUT,
} from '../actions/types';

const INITIAL_STATE = { authenticated: null };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_USER_REGISTER:
      return { ...state, authenticated: payload };
    default:
      return state;
  }
};
