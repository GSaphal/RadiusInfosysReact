import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class TopNavbar extends Component {
  render() {
    return (
      <Container className="mb-2">
        <Navbar expand="lg" fixed>
          <Navbar.Brand>
            <Link to="/" className="text-dark">
              <img src="logo.png" alt="Logo Here"></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ml-auto " activeKey="About">
              <Nav.Link className="nav-item py-3 px-1">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link px-2 py-3"
                  to="/"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-1">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link px-2 py-3 "
                  to="/about"
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-1">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link px-2 py-3 "
                  to="/services"
                >
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-1">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link px-2 py-3 "
                  to="/products"
                >
                  Products
                </NavLink>
              </Nav.Link>
              <Nav.Link className="nav-item py-3 px-1">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link px-2 py-3 "
                  to="/products"
                >
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
