import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Navigation from './Navigation';
import Main from './pages/Main';
import Latest from './pages/Latest';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Route path='/' exact component={Main} />
          <Route path='/latest' exact component={Latest} />
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/login' component={Login} />
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
