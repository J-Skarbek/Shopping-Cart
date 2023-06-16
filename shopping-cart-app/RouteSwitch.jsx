import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './src/components/Homepage';
import ShoppingCart from "./src/components/ShoppingCart";
import ProductsOverview from "./src/components/ProductsOverview";
import HamburgerMenuExpanded from "./src/components/HamburgerMenuExpanded";

const RouteSwitch = (props) => {

  let test = props.cartContents[2];
  let setTest = props.setCartContents;

  console.log(`setTest: ${test}`);
  console.log(typeof test)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ProductsOverview cartContents = {test} setCartContents = {setTest} />} />
        <Route path="/cart" element={<ShoppingCart cartContents = {test} setCartContents = {setTest} />} />
        <Route path="/menu" element={<HamburgerMenuExpanded cartContents = {test} setCartContents = {setTest} />} />
      </Routes>
    </BrowserRouter>
  )
};

export default RouteSwitch;