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

  function testCartAddNiner(newItem) {
    let updatedArray = [];
    if (cartContents.length === 0) {
      console.log('adding to empty cart')
      setCartContents([{...newItem, quantityInCart: newItem.quantityInCart += 1 }])
    } else {
      console.log('else statement successfully triggered');
      updatedArray = cartContents.map(item => {
        console.log('new item added to updatedArray');
        if (newItem.id == item.id) {
          return { ...item, quantityInCart: item.quantityInCart += 1 }
        } else {
          console.log(`new Item: ${newItem.name}`)
          return newItem;
        }
      });
      console.table(updatedArray)
      setCartContents([...updatedArray]);
    }
    // setCartContents(prevCartContents => {
    //   return ([
    //   ...prevCartContents,
    //   ...updatedArray
    //   ])
    // });
    console.log('updated Array')
    console.table(updatedArray)
    return updatedArray;
  }

  //another testing function for dealing with quantity -- name can be whatever
  function testCartAdd(newItem) {
    // let updatedArray = [];
    const checkItems = cartContents.some(item => {
      item.id == newItem.id;
    })

    const existingProductInCart = cartContents.filter(item => newItem.id == item.id);
    console.log(`exisingProductInCart: ${checkItems}`)
    console.table(existingProductInCart)

    if (checkItems === false) {
      // console.log('adding to empty cart');
      setCartContents(prevCartContents => {
        return (
          [
            ... prevCartContents,
            { ...newItem, 
              quantityInCart: newItem.quantityInCart += 1 
            }
          ]
        )
        });
    } else {
      setCartContents(prevCartContents => {
        return (
          [
            ...prevCartContents,
            {
              ...existingProductInCart, 
              quantityInCart: existingProductInCart.quantityInCart += 1
            }
          ]
        )
      });
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