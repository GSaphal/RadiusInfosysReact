import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TopNavbar from "./partials/TopNavbar";
import Topbar from "./partials/Topbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <Container fluid className="main-body"></Container>
      </div>
    );
  }
}
