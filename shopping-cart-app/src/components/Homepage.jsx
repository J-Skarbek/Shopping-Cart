import React from "react";
import HeroSection from "./HeroSection";
import CustomButton from "./customButton";
import HotSellers from "./HotSellers";

function Homepage() {

  return (
    <div className="homepage-body w-full">
      <HeroSection />
      <HotSellers />
    </div>
  )
}

export default Homepage;