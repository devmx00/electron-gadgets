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
import Consoles from './pages/consoles/Consoles';
import Laptops from './pages/laptops/Laptops';
import GraphicCards from './pages/graphic-cards/GraphicCards';
import Accessories from './pages/accessories/Accessories';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';

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
            <Route path='/consoles' component={Consoles} />
            <Route path='/laptops' component={Laptops} />
            <Route path='/graphic-cards' component={GraphicCards} />
            <Route path='/accessories' component={Accessories} />
            <Route path='/cart' component={Cart} />
            <Route path='/login' component={Login} />
          </Container>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
