import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';
import styled from 'styled-components';

const StyledNavbar =  styled(Navbar)`
  box-shadow: 2px 2px 2px #3D3DB2;
  background-color: #f8f9fa;
  padding: 1rem 0;
`

const StyledNav = styled(Nav)`
  margin-left: ${props => props.primary ? "auto" : null};
`

const NavBar = () => {
  return (
    <>
      <StyledNavbar expand="sm">
        <Navbar.Brand><FcTodoList size={30} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <StyledNav>
            <Nav.Link>Todos</Nav.Link>
          </StyledNav>
          <StyledNav primary>
            <Nav.Link>Logout</Nav.Link>
          </StyledNav>
        </Navbar.Collapse>
      </StyledNavbar>
    </>
  )
}

export default NavBar;