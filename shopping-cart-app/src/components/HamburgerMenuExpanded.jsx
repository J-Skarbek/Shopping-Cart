import React from "react";

function HamburgerMenuExpanded(props) {

  return (
    <div className="hamburger-open flex flex-col">
      <div className="products-in-cart">
        <p>Therre are currently no products in your cart.</p>
      </div>
      <div className="order-details">
        <div className="order-value flex">
          <p>Order Value</p>
          <p>$99.99 Sample Value</p>
        </div>
        <div className="order-value flex">
          <p>Order Value</p>
          <p>$99.99 Sample Value</p>
        </div>
        <div className="shipping-value flex">
          <p>Shipping</p>
          <p>FREE</p>
        </div>
        <div className="order-total flex">
          <p>Total</p>
          <p>$99.99</p>
        </div>
      </div>
      <div className="buttons-container">
        <button type="button">Checkout</button>
        <button type="Shopping Cart">Cart</button>
      </div>
    </div>
  )
}

export default HamburgerMenuExpanded;