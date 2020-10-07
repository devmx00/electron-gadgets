import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            electron
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link as={Link} to='/latest'>
                Latest
              </Nav.Link>
              <NavDropdown title='Products' id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to='/products'>
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/consoles'>
                  Consoles
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/laptops'>
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/graphic-cards'>
                  Graphic Cards
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/accessories'>
                  Accessories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/cart'>
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
