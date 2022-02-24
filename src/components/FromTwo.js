import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, FormControl } from "react-bootstrap";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  phone: yup
    .string()
    .required("Phone Number is Required.")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  email: yup
    .string()
    .required("Email is Required.")
    .email("Email is not Valid."),
});
const FromTwo = () => (
  <Container>
    <Row className=" d-flex justify-content-center">
      <Col md={6}>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ name: "", phone: "", email: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <label>Name</label>
            <Field name="name" type="text" as={FormControl} />
            <ErrorMessage name="name" render={CustomError} />
            <br />

            <label>Phone</label>
            <Field name="phone" type="text" as={FormControl} />
            <ErrorMessage name="phone" render={CustomError} />
            <br />

            <label>Email</label>
            <Field name="email" type="email" as={FormControl} />
            <ErrorMessage name="email" render={CustomError} />
            <br />

            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="   Beginner" />
                Beginner
              </label>
              <br />
              <label>
                <Field type="radio" name="picked" value=" Intermediate" />
                Intermediate
              </label>
              <br />
              <label>
                <Field type="radio" name="picked" value="Advanced" />
                Advanced
              </label>
            </div>

            <br />
            <div className=" d-flex justify-content-center">
              <button
                type="submit"
                className="p-2 px-4 me-2 m-3 fw-bold "
                style={{ background: "#E63732", color: "#fff", border: "none" }}
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </Col>
    </Row>
  </Container>
);

export default FromTwo;

function CustomError(msg) {
  return <div style={{ color: "red" }}>{msg}</div>;
}
