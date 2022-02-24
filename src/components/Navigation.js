import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Nav className="ms-auto">
        <Link to="/" className="mx-5 nav-link text-dark">
          Courses
        </Link>
        <Link to="/WhatWeDo" className="mx-5 nav-link text-dark">
          Blog
        </Link>
        <Link to="/SecFour" className="mx-5 nav-link text-dark">
          Contact
        </Link>
      </Nav>
    </>
  );
}

export default Navigation;
