import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  const displayCartContents = cartContents.map(item => {
    return (
      <>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </>
    )
  })

  return (
    <div className="shopping-cart-main">
      <div className="flex m-4 p-2">
        <p>This will be the shopping cart page.</p>
        {displayCartContents}
      </div>
    </div>
  )
}

export default ShoppingCart;