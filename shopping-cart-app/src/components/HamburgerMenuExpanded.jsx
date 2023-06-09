import React from "react";
import Button from "./Button";

function HamburgerMenuExpanded(props) {

  // const [showMenu, setShowMenu] = React.useState(false);

  // const updateMenuStatus = () => {
  //   return setShowMenu(!showMenu);
  // }

  // console.log(showMenu);

  return (
    <div className="modal-menu-overlay flex flex-row-reverse fixed w-full h-screen bg-indigo-800/75 ">
    <div className="hamburger-open flex flex-col bg-slate-200 w-96 h-fit p-4">
      <div className="products-in-cart mb-4">
        <p>Therre are currently no products in your cart.</p>
      </div>
      <div className="order-details">
        <div className="hamburger-inner-container border-y border-t-slate-300 border-b-slate-500 py-4 my-2">
          <div className="order-value flex justify-between mb-4">
            <p>Order Value</p>
            <p>$99.99(ex)</p>
          </div>
          <div className="shipping-value flex justify-between">
            <p>Shipping</p>
            <p className="uppercase">FREE</p>
          </div>
        </div>
      </div>
      <div className="buttons-container flex flex-col">
        <Button 
          text='checkout'
        />
        <Button 
          text='cart'
        />
        {/* <button type="button" onClick={updateMenuStatus}>Checkout</button> */}
        <button type="buton">Cart</button>
      </div>
    </div>
    </div>
  )
}

export default HamburgerMenuExpanded;