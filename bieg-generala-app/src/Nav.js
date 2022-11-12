import React, { Component } from "react";
import logo from "./img/herb.png";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar fixed="top" expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/" className="nav-logo">
          {/* <img src={logo} alt="Herb powstania"></img> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">O biegu</Nav.Link>
            {/* <Nav.Link href="/Runners">Uczestnicy</Nav.Link> */}
            {/* <Nav.Link href="/Rules">Regulamin</Nav.Link> */}
            <Nav.Link href="/Results">Wyniki</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
