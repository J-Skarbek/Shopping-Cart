import React from "react";

function GetAllProducts(props) {



  function handleClick() {
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