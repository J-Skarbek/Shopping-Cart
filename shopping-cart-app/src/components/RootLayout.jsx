import React, { createContext } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useLocalStorage from "../utils";

export const ShopContext = createContext({
  cartContents: [],
  addToCart: () => {},
  logCartItems: () => {},
  emptyTheCart: () => {},
  testCartAdd: () => {}
})

function RootLayout() {

  const [cartContents, setCartContents] = React.useState(JSON.parse(localStorage.getItem('items')) || []);

  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartContents))
  }, [cartContents])

  // function addToCart(newItem) {
  //   const test = cartContents.map(item => {
  //     if (item.id == newItem.id) {
  //       item.quantityInCart += 1;
  //       console.log(item.quantityInCart, newItem.quantityInCart)
  //     } else {
  //       setCartContents(prevCartContents => {
  //         return ([
  //         ...prevCartContents,
  //         newItem
  //         ])
  //       })
  //       console.log(`updated cart contains: ${newItem}`);
  //     } 
  //   })
  //   return test;
  // }

  function testCartAdd(newItem) {
    console.log(newItem.id);
    cartContents.map(item => {
      item.id == newItem.id ? console.log(`Matched product ID:${newItem.id} with ${newItem.name}`) : console.log('could not match product IDs')
    })

  } 
    
  function addToCart(newItem) {
    setCartContents(prevCartContents => {
      return ([
      ...prevCartContents,
      newItem
      ])
    })
    console.log(`updated cart contains: ${newItem}`);
  }
  
  // Will eventually need to add removeFromCart function, possibly only need 
  // on the actualy cart page

  // const logCartItems = () => cartContents.length > 0 ? console.table(cartContents) : console.log('The cart is empty');
  const logCartItems = () => {
    console.log('Cart itmes in state:');
    console.table(cartContents);
    console.log(`localStorage count of items ${JSON.parse(localStorage.items).length}`)
  }
  
  const emptyTheCart = () => setCartContents([]);
  
  return (
    <ShopContext.Provider value={{ cartContents, addToCart, logCartItems, emptyTheCart, testCartAdd }}>
      <div className="root-layout">
        <Header />
        <main className="flex justify-center">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </ShopContext.Provider>
  )
}

export default RootLayout;