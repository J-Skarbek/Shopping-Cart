import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import ShoppingCart from "./components/ShoppingCart";
import ProductsOverview from "./components/ProductsOverview";
// import Root from '../RouteSwitch';
// import MailingListSignUp from './components/MailingListSignUp';

function App() {
  const [count, setCount] = React.useState(0);

  const [cartContents, setCartContents] = React.useState([1,2,3,4,5]);

  return (

    <BrowserRouter>
      <Header 
        homeLink={`${"Link to '/'"}`}
      />
      <div>
        <Link to='cart'>Cart</Link>
        <NavLink to='shop'>Shop</NavLink>
      </div>
        <main>
          <Routes>
            <Route 
              index
              element={<Homepage />}
            />
            <Route 
              path='shop'
              element={<ProductsOverview />}
            />
            <Route 
              path='cart'
              element={<ShoppingCart />}
            />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
    // <div className="page">
    // <Header 
    //   cartContents = {cartContents}
    //   setCartContents = {setCartContents} 
    // />
    // {/* <Root
    //   cartContents = {cartContents}
    //   setCartContents = {setCartContents} 
    // /> */}
    // <Homepage />
    // <Footer />

    // </div>
  )
}

export default App;