import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <Row className="d-flex align-items-center logo ">
        <Col md={4}>
          <Logo />
        </Col>
        <Col md={8}>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
