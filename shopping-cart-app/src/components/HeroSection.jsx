import React from "react";
import ProductData from '../productData.json';
import '../App.css';

function HeroSection(props) {

  // const styles = {
  //   backgroundImage: {
  //     url(props.backgroundImage)
  //   },
  // }


  function dataCallClick() {
    console.log(ProductData.Tops.products[0].name)
    console.log(ProductData.Tops.products[0].sizes.xs)
    console.log(ProductData.Tops.products[0].sizes)
    console.log(ProductData.Tops.products[0].desciption)
  }

  // console.log(props.backgroundImage)

  return (
    <div className="hero-section h-[75vh] min-h-[90vh] max-2xl:min-h-[75vh] bg-cover bg-no-repeat bg-center text-white p-12">
    {/* <div className="hero-section" style={styles.backgroundImage}> */}
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
            <button type="button" onClick={dataCallClick}>Test call the data</button>
          </div>
        </div>  
      </div>
  )
}

export default HeroSection;