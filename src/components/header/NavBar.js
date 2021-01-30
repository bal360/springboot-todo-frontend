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
const style = {color: '#3D3DB2'}

const NavBar = () => {
  return (
    <React.Fragment>
      <StyledNavbar expand="sm">
        <Navbar.Brand><FcTodoList size={30} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <StyledNav>
            <Nav.Link as={Link} to="/todos" style={style}>Todos</Nav.Link>
          </StyledNav>
          <StyledNav primary>
            <Nav.Link as={Link} to="/" style={style}>Logout</Nav.Link>
          </StyledNav>
        </Navbar.Collapse>
      </StyledNavbar>
    </React.Fragment>
  )
}

export default withRouter(NavBar);