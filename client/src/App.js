import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Container from 'react-bootstrap/container';
import Navigation from './components/Navigation';

import { store, persistor } from './store';
import Main from './pages/main/Main';
import Latest from './pages/latest/Latest';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import ProductCategory from './pages/category/ProductCategory';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Checkout from './pages/checkout/Checkout';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Navigation />
          <Container>
            <Route path='/' exact component={Main} />
            <Route path='/latest' component={Latest} />
            <Route path='/products' exact component={Products} />
            <Route path='/products/category/:categoryId' component={ProductCategory} />
            <Route path='/product/:productId' component={Product} />
            <Route path='/cart' component={Cart} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/checkout' component={Checkout} />
          </Container>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
