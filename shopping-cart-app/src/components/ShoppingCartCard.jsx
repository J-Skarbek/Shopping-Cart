import React from "react";

export default function ShoppingCartCard({image, productName, price, quantity}) {

  return (
    <div>
        <img src={image}></img>
        <p>{productName}</p>
        <p>{price}</p>
        <p>Quantity will go here.</p>
    </div>
  )
}