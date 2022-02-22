import React from "react";
import { Container } from "react-bootstrap";

function HowCanYGS() {
  return (
    <Container className="py-5">
      <h1>How can you get Started?</h1>
      <p>
        If you are a complete beginner, you can start with a short term course
        of basic fundamental, which will make you learn the concept of
        programming as an absolute beginner. DOIONS Education, Offers a wide
        range of courses depending upon your expertise level. For intermediate
        and advance learning we offer an extensive program called Bootcamp. To
        know more about the courses based on your learning goal and expertise
      </p>
      <a href="/" className="text-danger">
        Checkout our courses here Apply now
      </a>
      <p>Apply for our courses here</p>
      <button className="bg-danger text-white p-2 px-5 btn-lg fw-bold border-danger">
        Apply now
      </button>
    </Container>
  );
}

export default HowCanYGS;
