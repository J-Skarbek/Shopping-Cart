import React from "react";

function Pill(props) {

  const handleClick = () => {
    console.log('I am clicked');
  }

  //if pill is clicked, look at the textContent in the pill, then
  //Find the category in productData, then 
  //map over the products in that category

  return (
    <>
      <button 
        type="button" 
        className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg" 
        onClick={handleClick}>{props.categoryName}
      </button>
    </>
  )
}

export default Pill;