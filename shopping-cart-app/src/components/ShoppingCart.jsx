import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import { nanoid } from 'nanoid';

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  const displayCartContents = cartContents.map(item => {
    return (
      <>
        <img src={item.imageArray[0]}></img>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </>
    )
  })

  return (
    <div className="shopping-cart-main">
      <div className="flex flex-col m-4 p-2">
        <p>This will be the shopping cart page.</p>
        {displayCartContents}
      </div>
    </div>
  )
}

export default ShoppingCart;
