import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoImgOne from "./CoImgOne";
import CoImgThree from "./CoImgThree";
import CoImgTwo from "./CoImgTwo";
import Database from "./Database";
import Mern from "./Mern";
import UiUxDesign from "./UiUxDesign";
function CoursesSection() {
  return (
    <Container className="py-5">
      <h1 className="d-flex justify-content-center fw-bold">Courses</h1>
      <Row>
        <Col className="border border-secondary p-0 m-3">
          <CoImgOne />
          <UiUxDesign />
        </Col>
        <Col className="border border-secondary p-0 m-3">
          <CoImgTwo />
          <Database />
        </Col>
        <Col className="border border-secondary p-0 m-3">
          <CoImgThree />
          <Mern />
        </Col>
      </Row>
    </Container>
  );
}

export default CoursesSection;
