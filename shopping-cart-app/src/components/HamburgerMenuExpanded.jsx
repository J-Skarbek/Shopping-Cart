import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShopContext } from "./RootLayout";
import Button from "./Button";
import MenuCartItem from "./MenuCartItem";
import closeBtn from '../assets/close-btn.svg'

export default function HamburgerMenuExpanded({ toggleMenu, toggleState }) {

  const { cartContents, countCartItems, getSubtotal } = useContext(ShopContext);

  function deriveClassName() {
    if (toggleState) {
      return "fade-in"
    }
    return "fade-out"
  }

  const displaySkusInMenu = cartContents.map(item => {
    console.log(item);
    return (
      <MenuCartItem 
        key={item.cartLoopKey}
        productName={item.name}
        productImage={item.imageArray[0]}
        productPrice={item.price}
        quantity={item.quantityInCart}
        productSize={item.sizeSelected}
      />
    )
  })

  console.log(deriveClassName());

  return (
    <div className={`screen-overlay w-screen h-screen bg-black/50 fixed top-0 right-0 z-10 ${deriveClassName()}`}>
      <div className="modal-menu-overlay flex flex-row-reverse absolute top-0 right-0 bg-white shadow-lg">
        <div className="hamburger-open flex flex-col bg-slate-200 w-96 h-fit p-4">
          <div className="close-button flex justify-end">
            <img 
              src={closeBtn} 
              alt='Close the menu'
              onClick={toggleMenu} 
            />
          </div>
          <div className="menu-cart-display-container h-96 overflow-auto">
            {displaySkusInMenu}
          </div>
          <div className="order-details">
            <div className="hamburger-inner-container border-y border-t-slate-300 border-b-slate-500 py-2 my-2">
              <div className="order-value flex justify-between">
                <p>Order Total</p>
                <p>${getSubtotal()}</p>
              </div>
            </div>
          </div>
          <div className="buttons-container flex flex-col">
            <Link to='cart' onClick={toggleMenu}>
              <Button 
                text='View Cart' />
            </Link>
            <Link to='checkout' onClick={toggleMenu}>
              <Button text='Proceed to Checkout' />
            </Link>
          </div>
        </div>
      </div>
    </div> //end screen ovelay
  )
}

HamburgerMenuExpanded.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  toggleState: PropTypes.bool.isRequired 
}
