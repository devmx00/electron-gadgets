import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Container from 'react-bootstrap/container';

import { store, persistor } from './store';
import Navigation from './components/navigation/Navigation';
import Main from './pages/main/Main';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import ProductCategory from './pages/category/ProductCategory';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Checkout from './pages/checkout/Checkout';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Navigation />
          <Container>
            <Route path='/' exact component={Main} />
            <Route path='/products' exact component={ProductList} />
            <Route
              path='/products/category/:categoryId'
              exact
              component={ProductCategory}
            />
            <Route path='/products/:productId' exact component={Product} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/checkout' exact component={Checkout} />
          </Container>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
