import React from "react";

export default function ShoppingCartCard({image, productName, price, size, quantity}) {

  return (
    <div className="flex">
        <img src={image} className="w-1/6 mr-4 mb-4"></img>
        <div className="prod-overview flex flex-col px-4">
          <p>{productName}</p>
          <p>{price}</p>
          <p>Quantity will go here.</p>
        </div>
    </div>
  )
}