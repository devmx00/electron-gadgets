import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
