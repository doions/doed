import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Nav className="ms-auto">
        <Link to="/Courses" className="mx-5 nav-link text-dark  navStyle">
          Courses
        </Link>
        <Link to="/Blog" className="mx-5 nav-link text-dark navStyle">
          Blog
        </Link>
        <Link to="/ContactUs" className="mx-5 nav-link text-dark navStyle ">
          Contact
        </Link>
      </Nav>
    </>
  );
}

export default Navigation;
