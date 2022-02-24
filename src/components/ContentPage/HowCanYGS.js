import React from "react";
import { Container } from "react-bootstrap";
import CalltoAction from "../CalltoAction";
function HowCanYGS() {
  return (
    <Container className="">
      <h1 className="fw-bold">
        How can you get <br />
        Started?
      </h1>
      <p>
        If you are a complete beginner, you can start with a short term course
        of basic fundamental, which will make you learn the concept of
        programming as an absolute beginner.{" "}
      </p>
      <p>
        DOIONS Education, Offers a wide range of courses depending upon your
        expertise level.
      </p>
      <p>
        For intermediate and advance learning we offer an extensive program
        called Bootcamp.
      </p>
      <p>
        To know more about the courses based on your learning goal and expertise
      </p>
      <a href="/" className="text-danger">
        Checkout our courses here Apply now
      </a>
      <p className="pt-3">Apply for our courses here</p>

      <CalltoAction />
    </Container>
  );
}

export default HowCanYGS;
