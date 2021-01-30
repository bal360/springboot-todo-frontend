import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';
import styled from 'styled-components';

const StyledNavbar =  styled(Navbar)`
  box-shadow: 2px 2px 2px #3D3DB2;
  background-color: #f8f9fa;
  padding: 1rem;
`

const StyledNav = styled(Nav)`
  margin-left: ${props => props.primary ? "auto" : null};
  font-size: 1.15rem;
`

const NavBar = () => {
  return (
    <>
      <StyledNavbar expand="sm">
        <Navbar.Brand><FcTodoList size={30} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <StyledNav>
            <Nav.Link as={Link} to="/todos">Todos</Nav.Link>
          </StyledNav>
          <StyledNav primary>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
          </StyledNav>
        </Navbar.Collapse>
      </StyledNavbar>
    </>
  )
}

export default withRouter(NavBar);