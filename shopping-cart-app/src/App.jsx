import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { productsLoader } from "./components/ShopPage";
import Homepage from './components/Homepage';
import ShoppingCart from "./components/ShoppingCart";
import ProductsOverview from "./components/ShopPage";
import RootLayout from "./components/RootLayout";
import Product, { productDetailsLoader } from "./components/Product";
import { register } from 'swiper/element/bundle';
// import MailingListSignUp from './components/MailingListSignUp';
import './App.css';

register();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout />}>
      <Route 
        index
        element={<Homepage />}
      />
      <Route path='shop'>
        <Route index element={<ProductsOverview />} loader={productsLoader} />
        <Route path=':id' element={<Product />} loader={productDetailsLoader} />
      </Route>
      <Route 
        path='cart'
        element={<ShoppingCart />}>
      </Route>
    </Route>
    </>
  )
)

function App() {
  const [count, setCount] = React.useState(0);

  const [cartContents, setCartContents] = React.useState([1,2,3,4,5]);

  return (
    <RouterProvider router={router} />
  )
}

export default App;