import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Navigation from './components/Navigation';
import Main from './pages/main/Main';
import Latest from './pages/latest/Latest';
import Products from './pages/products/Products';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Route path='/' exact component={Main} />
          <Route path='/latest' component={Latest} />
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/login' component={Login} />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
