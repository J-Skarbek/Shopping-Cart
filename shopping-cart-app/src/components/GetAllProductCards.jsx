import React from "react";
import { nanoid } from "nanoid";
import ProductCard from "./ProductCard";

function GetAllProducts(props) {



  function handleClick() {
    const displayProductsGrid = props.products.map(category => {
      let displayCards = category.products.map(individualProduct => {
        return (
          <ProductCard 
            name={individualProduct.name}
            description={individualProduct.desciption}
            img={individualProduct.imageArray[0]}
            price={individualProduct.price}
            key={nanoid()}
          />
        )
      })
      return displayCards;
    })
  
    console.log('all products clicked!')
  }

  return (
    <>
      <button 
        type='button' 
        className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg" 
        onClick={handleClick}
      >
        All Products
      </button>
    </>
  )
}

export default GetAllProducts;