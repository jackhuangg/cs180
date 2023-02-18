import React from "react";
import "../styles/NavbarTop.css"
import { Navbar, Nav } from "react-bootstrap";

function NavbarTop() {
  return (
    <Navbar collapseOnSelect expand="xl" variant="dark" className = "bar">
      <Navbar.Brand className = "title">Simplify</Navbar.Brand>
        <Nav>
          <Nav.Link className = "links">About</Nav.Link>
          <Nav.Link className = "links">Blogs</Nav.Link>
          <Nav.Link className = "links">Podcasts</Nav.Link>
          <Nav.Link className = "links">Connect</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default NavbarTop;