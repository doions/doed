import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OurPhilosophy from "../ContentPage/OurPhilosophy";
import WhoWeAre from "../ContentPage/WhoWeAre";
import SecTwoImg from "../SecTwoImg";
function SectionTwo() {
  return (
    <Container className=" py-5">
      <Row>
        <Col sm={12} md={6}>
          <SecTwoImg />
        </Col>
        <Col sm={12} md={6}>
          <WhoWeAre />
          <OurPhilosophy />
        </Col>
      </Row>
    </Container>
  );
}

export default SectionTwo;
