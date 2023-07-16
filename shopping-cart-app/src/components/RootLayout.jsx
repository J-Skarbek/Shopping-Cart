import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <div>
        <Link to='cart'>Cart</Link>
        <NavLink to='shop'>Shop</NavLink>
        <NavLink to='product'>Product Test</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout;