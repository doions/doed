import React from "react";
import Hero from "../Hero";

import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SecFour from "./SecFour";
import Footer from "../Footer";
import CoursesSection from "../Courses/CoursesSection";
import ContactUs from "./ContactUs";

function Homepage() {
  return (
    <div>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SecFour />
      <CoursesSection />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Homepage;
