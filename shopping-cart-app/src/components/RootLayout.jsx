import React, { createContext } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  logCartItems: () => {},
  emptyTheCart: () => {}
})

function RootLayout() {

  const [cartContents, setCartContents] = React.useState([{}, {}, 3, 4, 5, 6, {}]);
  // console.log(cartContents);

  const cartItems = cartContents;

  function addToCart(newItem) {
    setCartContents(prevCartContents => {
      return ({
      ...prevCartContents,
      newItem
      })
    })
    console.log(`updated cart contains: ${console.table(cartContents)}`);
  }

  const logCartItems = () => console.table(cartItems)

  const emptyTheCart = () => setCartContents("empty cart");
  

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, logCartItems, emptyTheCart }}>
      <div className="root-layout">
        <Header 
          cartContents={cartContents}
          setCartContents={setCartContents}
        />
        <main className="flex justify-center">
          <Outlet 
            cartContents={cartContents}
            setCartContents={setCartContents}
          />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </ShopContext.Provider>
  )
}

export default RootLayout;