import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FromCom from "../FromCom";

function ContactUs() {
  return (
    <Container>
      <h1 className="d-flex justify-content-center py-5 fw-bold">ContactUs</h1>
      <Row className="d-flex justify-content-center">
        <Col md={6}>
          <FromCom />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
