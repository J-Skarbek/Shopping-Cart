import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";

export default function ShoppingCartCard({image, productName, price, size, quantity, available, cartLoopKey}) {

  const { cartContents, removeProduct } = useContext(ShopContext);

  return (
    <div className="flex" data-dom-key={cartLoopKey}>
      <img src={image} className="w-1/6 mr-4 mb-4"></img>
      <div className="prod-overview flex flex-col px-4">
        <p>Product: {productName}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Available: {available}</p>
        <p>Size: {size}</p>
        <p>Loop Key: {cartLoopKey}</p>
      </div>
      <div>
        <button type="button" onClick={(e) => removeProduct(e)}>Remove</button>
      </div>
    </div>
  )
}