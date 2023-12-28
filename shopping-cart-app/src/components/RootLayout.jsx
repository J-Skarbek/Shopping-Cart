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

  function testCartAdd(newItem) {
    let updatedCartArray = [];

    // heck to see if the newItem being added already exists in the user's cart
    const existingProductInCart = cartContents.filter(item => newItem.id == item.id);

    if (existingProductInCart.length == 0) {
      // If there isn't an existing match, spread in old cart items as well as new ojbect and increment the cart quantity
      setCartContents(prevCartContents => {
        return ([
          ...prevCartContents,
          { ...newItem, 
            quantityInCart: newItem.quantityInCart += 1 
          }
        ])
      });
    } else {
      // If there is a match, loop through the cart, find the product, and increment the quantity
      // whilst returning non-matching products w/o altering them
      updatedCartArray = cartContents.map(item => {
        if (item.id == newItem.id) {
          return { ...item, quantityInCart: item.quantityInCart += 1};
        } else {
          return item;
        }
      })
      // Since updatedCartArray captures and duplicates the prior state, we don't
      // need the callback function when resetting state
      setCartContents(updatedCartArray);
    }
  }
  
 // OG add to cart with no regard to quantity values of each item in the array
  function addToCart(newItem) {
    setCartContents(prevCartContents => {
      return ([
      ...prevCartContents,
      newItem
      ])
    })
    console.log(`updated cart contains: ${newItem}`);
  }

  // function increaseQuntity() {
  //   //item.id -= 1;
  // }

  // function decraseQuantity() {
  //   //item.id += 1;
  // }
  
  // Will eventually need to add removeFromCart function, possibly only need 
  // on the actualy cart page

  // const logCartItems = () => cartContents.length > 0 ? console.table(cartContents) : console.log('The cart is empty');
  const logCartItems = () => {
    console.log(cartContents)
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