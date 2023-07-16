import React from "react";
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ShoppingCart from "./components/ShoppingCart";
import ProductsOverview from "./components/ProductsOverview";
import RootLayout from "./components/RootLayout";
import Product from "./components/Product";
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
      <Route 
        path='shop'
        element={<ProductsOverview />}>
        <Route 
          path='*' 
          element={<Product />}>
        </Route>
      </Route>
      <Route 
        path='cart'
        element={<ShoppingCart />}>
      </Route>
      {/* <Route
        path='product'
        element={<Product />}
      /> */}
      {/* <Route 
        path='help' 
        element={<testLayout />}>
          <Route path='test' />
      </Route> */}
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