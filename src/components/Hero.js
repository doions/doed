import React from "react";
import BrandMessage from "./BrandMessage";
import HeroImage from "./HeroImage";
import CalltoAction from "./CalltoAction";
import { Container, Row, Col } from "react-bootstrap";

function Hero() {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col sm={12} md={6}>
            <BrandMessage />
            <CalltoAction />
          </Col>
          <Col sm={12} md={6}>
            <HeroImage />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
