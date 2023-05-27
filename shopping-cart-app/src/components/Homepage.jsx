import React from "react";
import HeroSection from "./HeroSection";
import ProductsOverview from "./ProductsOverview";

function Homepage() {

  return (
    <div className="homepage-body">
      <HeroSection />
      <ProductsOverview />
    </div>
  )
}

export default Homepage;