import React from "react";
import BrandMessage from "./BrandMessage";
import HeroImage from "./HeroImage";
import CalltoAction from "./CalltoAction";
import { Container, Row, Col } from "react-bootstrap";
import KnowMore from "./KnowMore";

function Hero() {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col sm={12} md={6}>
            <BrandMessage />
            <Row className="d-flex justify-content-center">
              <Col sm={6} md={4}>
                <CalltoAction />
              </Col>
              <Col sm={6} md={4}>
                <KnowMore />
              </Col>
            </Row>
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
