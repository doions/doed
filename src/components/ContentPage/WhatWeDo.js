import React from "react";
import { Container } from "react-bootstrap";
import SecThreeImg from "../SecThreeImg";
function WhatWeDo() {
  return (
    <Container className="py-5">
      <h1 className="d-flex justify-content-center pb-3 fw-bold">What we do</h1>
      <SecThreeImg />
      <p className="pt-4">
        At DOIONS Education, We offer a tech skill learning platform that allows
        you to become better programmer/developer and find an excellent career
        in the field of software development.
      </p>
      <p className="pt-2">
        We offer both long term and short term courses for based on your
        learning goals, which are serving to your actual purpose of learning to
        code. Be it securing a world-class job in a tech-company or for your own
        startup, Our courses will help you understand the fundamentals of coding
        and learn to apply in the real-world applications.
      </p>
      <p className="pt-2">
        When you learn with us, you gain real world project experience and
        industry insights and standard practices
      </p>
    </Container>
  );
}

export default WhatWeDo;
