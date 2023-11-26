import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { productsLoader } from "./components/ShopPage";
import Homepage from './components/Homepage';
import ShoppingCart from "./components/ShoppingCart";
import ProductsOverview from "./components/ShopPage";
import RootLayout from "./components/RootLayout";
import Product, { productDetailsLoader } from "./components/Product";
import { register } from 'swiper/element/bundle';
import NotFound from "./components/NotFound";
import Error from "./components/Error";
// import MailingListSignUp from './components/MailingListSignUp';
import './App.css';

register();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        path='/' 
        element={<RootLayout />}
      >
        <Route 
          index
          element={<Homepage />}
          errorElement={<Error />}
        />
        <Route 
          path='shop'
          //Duplicate errorElement here because eventually I'll need to update the stucture of routes
          //if I want to just use one error element as a catchall
          errorElement={<Error />}
        >
          <Route 
            index 
            element={<ProductsOverview />} 
            loader={productsLoader} 
          />
          <Route 
            path=':productName' 
            element={<Product />} 
            loader={productDetailsLoader} 
          />
        </Route>
        <Route 
          path='cart'
          element={<ShoppingCart />}>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </>
  )
)

function App() {

  const [cartContents, setCartContents] = React.useState([1,2,3,4,5]);
  // console.log(cartContents);

  return (
    <RouterProvider router={router} />
  )
}

export default App;