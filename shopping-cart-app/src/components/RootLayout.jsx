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

  // function testCartAdd(newItem) {
  //   console.log(newItem.id);
  //   cartContents.length === 0 ? setCartContents(newItem) : 
  //   cartContents.map(item => {
  //     // item.id == newItem.id ? console.log(`Matched product ID:${newItem.id} with ${newItem.name}`) : console.log('could not match product IDs');
  //     if (item.id == newItem.id) {
  //       item.quantityInCart += 1;
  //     } else {
  //       setCartContents(prevCartContents => {
  //         console.log('this is spreading in the cart info')
  //         return ([
  //           ...prevCartContents,
  //           newItem
  //         ])
  //       })
  //     }
  //   })
  // }

  function testCartAdd(newItem) {
    if (cartContents.length === 0) {
      setCartContents(newItem)
      console.log(newItem.id)

    }
    const updated = cartContents.map(item => {
      item.id == newItem.id
      ? { ...item, quantityInCart: item.quantityInCart += 1 }
      : item
    })
    console.log('array had items, updated to:')
    setCartContents([updated]);
    
  }

  //actual fn name is addItemToCart()
  // function testCartAdd(newItem) {
  //   console.log(`Adding new item: ${newItem}`);
  //   if (cartContents.length === 0) {
  //     setCartContents([newItem]);
  //     console.log(cartContents)
  //   } else {
  //     console.log('else triggered')
      // const updatedProducts = cartContents.map(item => {
      //   if (item.id == newItem.id) {
      //     return item.quantityInCart += 1;
      //   }
      // })
      // setCartContents([
      //     ...updatedProducts,
      //     newItem
      //   ]);
    //   }
    // }
  
  
  // function filterAndAddProduct(newItem) {
  //   console.log(newItem.id);
  //   cartContents.filter((item => newItem.id == item.id))
  // }
    
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