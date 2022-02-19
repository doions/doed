import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <Row className="d-flex align-items-center logo ">
        <Col>
          <Logo />
        </Col>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
