import React from "react";

function ProductsPage(props) {

  return (
    <div>
      <h1>{props.name}</h1>
      product.images.image
      <p>{props.price}</p>
      <p>{props.description}</p>
      <img src={props.img}></img>
      <p>This is the shopping/products page.</p>
    </div>
  )
}

export default ProductsPage;