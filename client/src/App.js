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
import Consoles from './pages/consoles/Consoles';
import Laptops from './pages/laptops/Laptops';
import GraphicCards from './pages/graphic-cards/GraphicCards';
import Accessories from './pages/accessories/Accessories';
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
            <Route path='/products' component={Products} />
            <Route path='/product/:productId' component={Product} />
            <Route path='/consoles' component={Consoles} />
            <Route path='/laptops' component={Laptops} />
            <Route path='/graphic-cards' component={GraphicCards} />
            <Route path='/accessories' component={Accessories} />
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
