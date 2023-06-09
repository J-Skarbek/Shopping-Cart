import React from "react";
import { createPortal } from 'react-dom';
import reactLogo from '../assets/react.svg';
import panda from '../assets/panda-logo.svg';
import hamburger from '../assets/hamburger.svg';
import HamburgerMenuExpanded from "./HamburgerMenuExpanded";

function Header() {

  const [showMenu, setShowMenu] = React.useState(false);

  const updateMenuStatus = () => {
    return setShowMenu(!showMenu);
  }

  function displayMenu() {
    if (showMenu === true) {
      return (
        <HamburgerMenuExpanded />
      )
    } else {
      return;
    }
  }

  displayMenu();

  console.log(showMenu);

  return (
    <div className="header flex justify-between items-center px-12">
      <div className="logo w-1/12">
        <img className="logo-img w-5/6" src={panda} alt="logo" />
      </div>
      <nav className="nav-menu flex justify-around w-[33%] min-w-[33%]">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
        <a href="/menu">Menu Expanded</a>
      </nav>
      <div className="cart-hamburger-icon">
        <img src={hamburger} className="hamburger" alt="View Your Cart" onClick={updateMenuStatus} />
        {showMenu && createPortal(
          <HamburgerMenuExpanded />, document.body
        )}
      </div>
    </div>
  )
}

export default Header;
