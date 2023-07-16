import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './src/components/Homepage';
import ShoppingCart from "./src/components/ShoppingCart";
import ProductsOverview from "./src/components/ProductsOverview";
import HamburgerMenuExpanded from "./src/components/HamburgerMenuExpanded";
import Product from "./src/components/Product";

const Root = (props) => {

  let test = props.cartContents[2];
  let setTest = props.setCartContents;

  console.log(`setTest: ${test}`);
  console.log(typeof test);

  return (
    <RouterProvider router={router} />
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    Component: Homepage,
  },
  {
    path: '/shop',
    Component: ProductsOverview,
    children: [
      {
        path: '/shop/product/',
        Component: Product,
      }
    ],
  },
  {
    path: '/cart',
    Component: ShoppingCart,
  },
  {
    path: '/menu',
    Component: HamburgerMenuExpanded,
  },
  // {
  //   path: '/product/',
  //   Component: Product,
  // }
]);

export default Root;

