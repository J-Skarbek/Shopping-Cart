import React from "react";

export default function MenuCartItem({ productName }) {

  return (
    <div className="flex menu-mini-cart-item">
      <div className="menu-cart-item-img">
        <img src="#" alt="#" />
      </div>
      <p>Hello here's another item: {productName}</p>
    </div>
  )
}