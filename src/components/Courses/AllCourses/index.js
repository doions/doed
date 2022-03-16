import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

function index() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center py-5 my-5">All Courses</h1>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <CardOne />
          </Col>
          <Col md={4}>
            <CardTwo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
