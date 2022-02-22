import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Nav className="ms-auto">
        <Link to="/" className="mx-5 nav-link">
          Courses
        </Link>
        <Link to="/WhatWeDo" className="mx-5 nav-link">
          Blog
        </Link>
        <Link to="/HowCanYGS" className="mx-5 nav-link">
          Contact
        </Link>
      </Nav>
    </>
  );
}

export default Navigation;
