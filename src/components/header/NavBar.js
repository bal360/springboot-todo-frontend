import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';
import styled from 'styled-components';
import { isLoggedIn, logOut } from '../../auth/AuthenticationService';

const StyledNavbar =  styled(Navbar)`
  box-shadow: 2px 2px 2px #3D3DB2;
  background-color: #f8f9fa;
  padding: 1rem;
  margin-bottom: 3rem;

  & .navbar-nav { font-size: 1.15rem; }
  & .primary { margin-left: auto; }
  & .navbar-nav .nav-link { color: #3D3DB2; }
`

const NavBar = () => {
  return (
    <>
      { isLoggedIn() &&
        <StyledNavbar expand="sm">
          <Navbar.Brand><FcTodoList size={30} /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
            </Nav>
            <Nav className="primary">
              <Nav.Link as={Link} to="/" onClick={logOut}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </StyledNavbar>
      } 
    </>
  )
}

export default withRouter(NavBar);