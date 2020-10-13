import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userLogout } from '../../actions/authActions';

const Navigation = ({ totalItems }) => {
  const authenticated = useSelector(({ auth }) => auth.authenticated);
  const dispatch = useDispatch();

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
              <NavDropdown title='Products' id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to='/products'>
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/products/category/1'>
                  Consoles
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/products/category/2'>
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/products/category/3'>
                  Graphic Cards
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/products/category/4'>
                  Accessories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/cart'>
                Cart ({totalItems})
              </Nav.Link>
              {authenticated ? (
                <Nav.Link
                  as='div'
                  className='nav-link'
                  onClick={() => dispatch(userLogout())}
                  style={{ cursor: 'pointer' }}
                >
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  totalItems: cart.totalItems,
});

export default connect(mapStateToProps)(Navigation);
