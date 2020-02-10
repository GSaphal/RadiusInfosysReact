import React, { Component } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Topbar extends Component {
  render() {
    return (
      <Navbar bg="dark">
        <Container>
          <Row>
            <Col md={1}>
              <FontAwesomeIcon icon={faEnvelope} />
            </Col>
            <Col md={1}>info.radiusinfosys@gmail.com</Col>
          </Row>
          <p className="my-2 info-text">
            <FontAwesomeIcon icon="coffee" />
            9810293293
          </p>
        </Container>
      </Navbar>
    );
  }
}
