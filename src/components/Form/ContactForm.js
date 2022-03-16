import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Submit from "../Button/Submit";

function ContactFrom() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log("email : " + email, "\n", "message : " + message);
    navigate("/");
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="email" type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              as="textarea"
              name="message"
              type="text"
              placeholder="message"
            />
          </Form.Group>
          <div className=" d-flex justify-content-center">
            <Submit />
          </div>
        </Form>
      </Container>
    </>
  );
}

export default ContactFrom;
