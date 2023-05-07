import React from "react";
import ProductData from '../productData.json'

function HeroSection() {

  function dataCallClick() {
    console.log(ProductData.Tops.products[0].name)
    console.log(ProductData.Tops.products[0].sizes.xs)
    console.log(ProductData.Tops.products[0].sizes)
  }

  return (
    <div className="hero-section">
        <div className="hero-text left-side">
          <h1>Main Page Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          {/* <img src={ProductData.Tops.products[0].images.image} alt={ProductData.Tops.products[0].name} />
          <img src={ProductData.Tops.products[0].images.image2} alt={ProductData.Tops.products[0].name} />
          <img src={ProductData.Tops.products[0].images.image3} alt={ProductData.Tops.products[0].name} />
          <img src={ProductData.Tops.products[0].images.image4} alt={ProductData.Tops.products[0].name} />
          <img src={ProductData.Tops.products[0].images.image5} alt={ProductData.Tops.products[0].name} /> */}
          <div className="buttons">
            <button type="button">Shop Now</button>
            <button type="button">Join Our Mailing List</button>
            <button type="button" onClick={dataCallClick}>Test call the data</button>
          </div>
        </div>  
      </div>
  )
}

export default HeroSection;