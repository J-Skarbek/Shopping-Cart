import React from "react";

export default function MenuCartItem({ productName, productImage, productPrice, productSize, quantity }) {

  return (
    <div className="flex menu-mini-cart-item justify-between px-4">
      <div className="menu-cart-item-img">
        <img src={productImage} alt={productName} />
      </div>
      <div className="flex flex-col menu-product-details">
        <p>{productName}</p>
        <p>{productPrice}</p>
        <p>{quantity}</p>
        <p>{productSize}</p>
      </div>
    </div>
  )
}