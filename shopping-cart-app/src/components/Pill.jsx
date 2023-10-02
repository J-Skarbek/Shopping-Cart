import React from "react";

function Pill(props) {

  const handleClick = e => {
    const test = e.currentTarget.textContent;
    console.log(test);
    let newProductDisplay = [];
    props.displayedProducts.map(category => {
      if (category.category === props.categoryName) {
        category.products.map(product => {
          newProductDisplay.push(product)
        })
      }
      console.log(category.category, props.categoryName);
    })
    console.table(newProductDisplay)
    // return props.updateDisplayedProducts(newProductDisplay)
  }

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