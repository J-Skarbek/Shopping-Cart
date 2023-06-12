import React from "react";
import Button from "./Button";

function HamburgerMenuExpanded(props) {

  return (
    <div className="hamburger-open flex flex-col bg-slate-200 w-96 p-4">
      <div className="products-in-cart mb-4">
        <p>Therre are currently no products in your cart.</p>
      </div>
      <div className="order-details">
        <div className="order-value flex justify-between">
          <p>Order Value</p>
          <p>$99.99(ex)</p>
        </div>
        {/* <div className="order-value flex justify-between mb-4">
          <p>Order Value</p>
          <p>$99.99(ex)</p>
        </div> */}
        <div className="shipping-value flex justify-between mb-4">
          <p>Shipping</p>
          <p className="uppercase">FREE</p>
        </div>
        <div className="order-total flex justify-between mb-4">
          <p>Total</p>
          <p>$99.99</p>
        </div>
      </div>
      <div className="buttons-container flex flex-col">
        <Button 
          text='checkout'
        />
        <Button 
          text='cart' 
        />
        <button type="button">Checkout</button>
        <button type="buton">Cart</button>
      </div>
    </div>
  )
}

export default HamburgerMenuExpanded;