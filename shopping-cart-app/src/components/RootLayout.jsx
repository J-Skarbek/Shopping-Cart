import React, { createContext } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import useLocalStorage from "../utils";

export const ShopContext = createContext({
  cartContents: [],
  addToCart: () => {},
  logCartItems: () => {},
  emptyTheCart: () => {},
  testCartAdd: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  countCartItems: () => {}

})

function RootLayout() {

  const [cartContents, setCartContents] = React.useState(JSON.parse(localStorage.getItem('items')) || []);

  // Sync localStorgae to cart contents in state
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartContents))
  }, [cartContents]);

  function addProduct(e, productObject) {
    e.preventDefault();
    console.log(`incoming size value selected: ${productObject.sizeSelected}`);
    let updatedCartArray = [];

    // check to see if the newItem being added already exists in the user's cart
    const existingProductInCart = cartContents.filter(item => productObject.id == item.id && item.sizeSelected == productObject.sizeSelected);

    if (existingProductInCart.length == 0) {
      console.log(`existing products ${existingProductInCart.length}`)
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
      updatedCartArray = cartContents.map(item => {
        if (item.id == productObject.id && item.sizeSelected == productObject.sizeSelected) {
          if (item.sizeSelected == productObject.sizeSelected) {
            return {
              ...item, 
              quantityInCart: productObject.quantityInCart
            };
            } else {
              return productObject; 
            }
        } else {
          console.log('return existing item as-is')
          console.log({...item})
          return item;
        }
      })

      // Since updatedCartArray captures and duplicates the prior state, we don't
      // need the callback function when resetting state
      setCartContents(updatedCartArray);
    }
  }

  function removeProduct(e) {
    e.preventDefault();
    let updatedCart = [];

    const getUniqueCartId = e.target.parentNode.parentNode.dataset.domKey;
    cartContents.map(item => {
      if (item.cartLoopKey !== getUniqueCartId) {
        updatedCart.push(item);
      }
    });

    setCartContents(updatedCart);
  }

  function countCartItems() {
    let totalProductCount = 0;
    cartContents.map((item, i)=> {
      if ( i === 0 ) return totalProductCount = Number(item.quantityInCart);
      totalProductCount = totalProductCount + Number(item.quantityInCart);
    })
    console.log(totalProductCount);
    console.log(typeof totalProductCount);
    return totalProductCount;
  }


  // function increaseQuntity() {
  //   //item.id -= 1;
  // }

  // function decraseQuantity() {
  //   //item.id += 1;
  // }
  
  const logCartItems = () => {
    console.log(cartContents)
    console.table(cartContents);
    console.log(`localStorage count of items ${JSON.parse(localStorage.items).length}`)
  }
  
  const emptyTheCart = () => setCartContents([]);

  return (
    <ShopContext.Provider value={{ cartContents, logCartItems, emptyTheCart, addProduct, removeProduct, countCartItems }}>
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