import React from "react";

function HeroSection() {

  return (
    <div className="hero-section h-[75vh] min-h-[90vh] max-2xl:min-h-[75vh] bg-[url('../src/assets/editorialPhotos/homepage-hero.jpg')] bg-cover bg-no-repeat bg-top bg-blend-overlay text-white p-12">
        <div className="hero-text left-side flex flex-col justify-center h-full">
          <h1 className="font-bold pb-8">Main Page Heading</h1>
          <p className="pr-[50%] pb-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="buttons">
            <button type="button">Shop Now</button>
            <button type="button">Join Our Mailing List</button>
          </div>
        </div>  
      </div>
  )
}

export default HeroSection;