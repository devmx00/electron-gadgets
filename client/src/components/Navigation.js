import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>electron</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link as={Link} to='/latest'>Latest</Nav.Link>
              <Nav.Link as={Link} to='/products'>Products</Nav.Link>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
              <Nav.Link as={Link} to='/login'>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
