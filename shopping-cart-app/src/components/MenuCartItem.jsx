import React from "react";

export default function MenuCartItem({ productName, productImage, productPrice, productSize, quantity }) {

  return (
    <div className="flex menu-mini-cart-item justify-between p-4 mb-2 border-b border-gray-300">
      <div className="menu-cart-item-img w-1/4">
        <img src={productImage} alt={productName} />
      </div>
      <div className="flex flex-col menu-product-details">
        <p className="font-semibold">{productName}</p>
        <p>Price: {productPrice}</p>
        <p>Quantity: {quantity}</p>
        <p>Size: {productSize.toUpperCase()}</p>
      </div>
    </div>
  )
}