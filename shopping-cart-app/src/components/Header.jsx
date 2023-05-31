import React from "react";
import reactLogo from '../assets/react.svg';
import hamburger from '../assets/hamburger.svg';

function Header() {

  return (
    <div className="header flex justify-between items-center px-12">
      <div className="logo">
        <img className="logo-img" src={reactLogo} alt="logo" />
      </div>
      <nav className="nav-menu flex justify-around w-[33%] min-w-[33%]">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Cart</a>
      </nav>
      <div className="cart-hamburger-icon">
        <img src={hamburger} className="hamburger" alt="View Your Cart" />
      </div>
    </div>
  )
}

export default Header;
