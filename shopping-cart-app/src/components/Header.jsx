import React from "react";
import reactLogo from '../assets/react.svg';
import hamburger from '../assets/hamburger.svg';

function Header() {

  return (
    <div className="header flex">
      <div className="logo">
        <img className="logo-img" src={reactLogo} alt="logo" />
      </div>
      <div className="nav-menu flex">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Cart</a>
      </div>
      <div className="cart-hamburger-icon">
        <img src={hamburger} className="hamburger" alt="View Your Cart" />
      </div>
    </div>
  )
}

export default Header;
