import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FcTodoList } from 'react-icons/fc';

const style = {
  
}

const NavBar = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand><FcTodoList size={30} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>Todos</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar;