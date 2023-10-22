import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom' //, NavLink

const NavBar = () => {
  return (
    <Navbar expand="lg" className='navbar-container' variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" >
        <img src="https://images.emojiterra.com/google/android-10/512px/1f349.png" height={30}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/Album">Album</Nav.Link>
            <Nav.Link as={Link} to="/category/Lightstick">Lightstick</Nav.Link>
            <Nav.Link as={Link} to="/category/Photocard">Photocard</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar