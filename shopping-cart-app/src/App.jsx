import React from "react";
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { topsLoader } from "./components/ShopPage";
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ShoppingCart from "./components/ShoppingCart";
import ProductsOverview from "./components/ShopPage";
import RootLayout from "./components/RootLayout";
import Product, { productDetailsLoader } from "./components/Product";
import ProductCard from "./components/ProductCard";
// import Root from '../RouteSwitch';
// import MailingListSignUp from './components/MailingListSignUp';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route 
        index
        element={<Homepage />}
      />
      <Route path='shop'>
        <Route index element={<ProductsOverview />} loader={topsLoader} />
        <Route path=':id' element={<Product />} loader={productDetailsLoader} />
      </Route>
      <Route 
        path='cart'
        element={<ShoppingCart />}>
      </Route>
    </Route>
  )
)

function App() {
  const [count, setCount] = React.useState(0);

  const [cartContents, setCartContents] = React.useState([1,2,3,4,5]);

  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App;