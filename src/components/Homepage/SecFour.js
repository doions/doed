import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HowCanYGS from "../ContentPage/HowCanYGS";
import SecFourImg from "../SecFourImg";
function SecFour() {
  return (
    <Container className="py-5">
      <Row>
        <Col sm={12} md={6}>
          <HowCanYGS />
        </Col>
        <Col sm={12} md={6}>
          <SecFourImg />
        </Col>
      </Row>
    </Container>
  );
}

export default SecFour;
