import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Container>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <LinkContainer to={'/'}>
            <Navbar.Brand>Kai's</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to={'/cart'}>
                <Nav.Link>
                  {/* fas font awesome */}
                  <i className='fas fa-shopping-cart'></i>Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/login'}>
                <Nav.Link>
                  <i className='fas fa-user'></i>Sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
