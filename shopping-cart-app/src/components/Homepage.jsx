import React from "react";
import HeroSection from "./HeroSection";
import ProductsOverview from "./ShopPage";
import homepageHero from "../assets/editorialPhotos/homepage-hero.jpg"

function Homepage() {

  return (
    <div className="homepage-body">
      <HeroSection 
        backgroundImage={homepageHero}
      />
      {/* <ProductsOverview /> */}
    </div>
  )
}

export default Homepage;