import React from "react";
import reactLogo from '../assets/react.svg';
import hamburger from '../assets/hamburger.svg';
import HamburgerMenuExpanded from "./HamburgerMenuExpanded";

function Header() {

  const [showMenu, setShowMenu] = React.useState(false);

  const updateMenuStatus = () => {
    return setShowMenu(!showMenu);
  }

  console.log(showMenu);

  return (
    <div className="header flex justify-between items-center px-12">
      <div className="logo">
        <img className="logo-img" src={reactLogo} alt="logo" />
      </div>
      <nav className="nav-menu flex justify-around w-[33%] min-w-[33%]">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
        <a href="/menu">Menu Expanded</a>
      </nav>
      <div className="cart-hamburger-icon">
        <img src={hamburger} className="hamburger" alt="View Your Cart" onClick={updateMenuStatus} />
      </div>
    </div>
  )
}

export default Header;
