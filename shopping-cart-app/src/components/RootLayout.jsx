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
  testCartAdd: () => {},
  addProduct: () => {}
})

function RootLayout() {

  const [cartContents, setCartContents] = React.useState(JSON.parse(localStorage.getItem('items')) || []);

  // Sync localStorgae to cart contents in state
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartContents))
  }, [cartContents]);

  function addProduct(e, productObject) {
    e.preventDefault();
    let updatedCartArray = [];

    // check to see if the newItem being added already exists in the user's cart -- !! WILL PROBABLY
    // WANT TO ADD THE '&& SIZE == SIZE FILTERING/COMPARISION IN THIS FUNCTION TO DETERMINE
    // IF WE'LL OVERWRITE AN EXISTING PRODUCT A IT'S CURRENT SIZE, OR IF THE SIZE IS DIFERENT,
    // CREATE A NEW PRODUCT IN THE ARRAY
    const existingProductInCart = cartContents.filter(item => productObject.id == item.id && productObject.sizeSelected == item.sizeSelected);

    if (existingProductInCart.length == 0) {
      // If there isn't an existing match, spread in old cart items as well as new ojbect and 
      // increment the quantity in the cart to 1
      setCartContents(prevCartContents => {
        return ([
          ...prevCartContents,
          productObject
        ])
      });
    } else {
      // If there is a match, loop through the cart, find the product, and update the size and quantity
      // whilst returning non-matching products w/o altering them

      // updatedCartArray = cartContents.map(item => {
      //   if (item.id == productObject.id && item.sizeSelected == productObject.sizeSelected) {
      //     return productObject;
      //   } else if (item.id == productObject.id && item.sizeSelected !== productObject.sizeSelected) {
      //     return {
      //       ...productObject,
      //       sizeSelected: productObject.sizeSelected
      //     }
      //   } else {
      //     return item;
      //   }
      // })


      updatedCartArray = cartContents.map(item => {
        if (item.id == productObject.id && item.sizeSelected == productObject.sizeSelected) {
          console.log({...productObject})
          // console.log(`Match  size: ${item.sizeSelected} sizeNewObject: ${productObject.sizeSelected}`);
          console.log('update exisitng item in cart.')
          return {
            ...item, quantityInCart: productObject.quantityInCart
          };
        } else if (item.id == productObject.id) {
          // console.log(`No Match  size: ${item.sizeSelected} sizeNewObject: ${productObject.sizeSelected}`);
          console.log(`return new item ${productObject.sizeSelected, productObject.name, {...productObject}} 1`)
          return {
            ...productObject
          };
        } else {
          console.log('return existing item as-is')
          return item;
        }
      })

      // Since updatedCartArray captures and duplicates the prior state, we don't
      // need the callback function when resetting state
      setCartContents(updatedCartArray);
    }
  }

  function testCartAdd(newItem) {
    let updatedCartArray = [];

    // heck to see if the newItem being added already exists in the user's cart
    const existingProductInCart = cartContents.filter(item => newItem.id == item.id);

    if (existingProductInCart.length == 0) {
      // If there isn't an existing match, spread in old cart items as well as new ojbect and 
      // increment the quantity in the cart to 1
      setCartContents(prevCartContents => {
        return ([
          ...prevCartContents,
          { ...newItem, 
            quantityInCart: newItem.quantityInCart = 1 
          }
        ])
      });
    } else {
      // If there is a match, loop through the cart, find the product, and increment the quantity
      // whilst returning non-matching products w/o altering them
      updatedCartArray = cartContents.map(item => {
        if (item.id == newItem.id) {
          return { ...item, quantityInCart: item.quantityInCart += 1 };
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
    <ShopContext.Provider value={{ cartContents, addToCart, logCartItems, emptyTheCart, testCartAdd, addProduct }}>
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