import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class TopNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" fixed>
          <Navbar.Brand>
            <Link to="/" className="text-dark">
              <img src="logo.png" alt="Logo Here"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto ">
              <Nav.Link className="nav-item py-3 px-3" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-3" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-3" href="/about">
                Our Products
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-3" href="/about">
                Partners
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-3" href="/about">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
