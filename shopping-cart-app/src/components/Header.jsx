import React, { useContext } from "react";
import { createPortal } from 'react-dom';
import { Link, NavLink } from "react-router-dom";
import panda from '../assets/panda-logo.svg';
import hamburger from '../assets/hamburger.svg';
import HamburgerMenuExpanded from "./HamburgerMenuExpanded";
import { ShopContext } from "./RootLayout";

function Header() {

  const [showMenu, setShowMenu] = React.useState(false);
  const { logCartItems, emptyTheCart, countCartItems } = useContext(ShopContext);

  const updateMenuStatus = () => {
    console.log(`oldshowmenustatus: ${showMenu}`)
    return setShowMenu(!showMenu);
  }

  return (
    <div className="header flex justify-between items-center px-12">
      <div className="logo w-1/12">
        <Link to='/'><img className="logo-img w-5/6" src={panda} alt="logo" /></Link>
      </div>
      <nav className="nav-menu flex justify-around w-[33%] min-w-[33%]">
        <NavLink to='cart'>Cart</NavLink>
        <NavLink to='shop'>Shop</NavLink>
        <NavLink to='checkout'>Checkout</NavLink>
        <button type="button" onClick={emptyTheCart}>Empty the Cart Testing BTN</button>
        <button type="button" onClick={logCartItems}>See the current cart status</button>
        <button type="button" onClick={countCartItems}>Test count all products + quantity</button>
      </nav>
      <div className="items-in-cart">
        {/* <p>
          {countCartItems()}
        </p> */}
      </div>
      <div className="cart-hamburger-icon">
        <img src={hamburger} className="hamburger" alt="View Your Cart" onClick={updateMenuStatus} />
        {showMenu && createPortal(
          <HamburgerMenuExpanded toggleMenu={updateMenuStatus} />, document.querySelector('.header')
        )}
      </div>
    </div>
  )
}

export default Header;
