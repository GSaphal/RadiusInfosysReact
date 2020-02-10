import React, { Component } from "react";
import TopNavbar from "./partials/TopNavbar";
import Background from "../cover.jpg";
import { Container, Row, Col } from "react-bootstrap";

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundImage: `url(${Background})`
};
export default class Home extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <section className="main-body" style={sectionStyle}>
          <Container>
            <Row>
              <Col md={12}>
                <h1 className="text-light"></h1>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}
