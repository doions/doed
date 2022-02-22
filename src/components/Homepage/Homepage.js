import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import WhoWeAre from "../ContentPage/WhoWeAre";
import OurPhilosophy from "../ContentPage/OurPhilosophy";
import WhatWeDo from "../ContentPage/WhatWeDo";
import HowCanYGS from "../ContentPage/HowCanYGS";
function Homepage() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <OurPhilosophy />
      <WhatWeDo />
      <HowCanYGS />
    </div>
  );
}

export default Homepage;
