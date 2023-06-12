import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './src/components/Homepage';
import ShoppingCart from "./src/components/ShoppingCart";
import ProductsOverview from "./src/components/ProductsOverview";
import HamburgerMenuExpanded from "./src/components/HamburgerMenuExpanded";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ProductsOverview />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/menu" element={<HamburgerMenuExpanded />} />
      </Routes>
    </BrowserRouter>
  )
};

export default RouteSwitch;