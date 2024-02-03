import React from "react";

export default function ShoppingCartCard({image, productName, price, size, quantity, available}) {

  return (
    <div className="flex">
        <img src={image} className="w-1/6 mr-4 mb-4"></img>
        <div className="prod-overview flex flex-col px-4">
          <p>Product: {productName}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Available: {available}</p>
          <p>Size: {size}</p>
        </div>
    </div>
  )
}