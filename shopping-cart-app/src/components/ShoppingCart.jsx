import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  const displayCartContents = cartContents.map(item => {
    return (
      <ShoppingCartCard 
        key={item.id}
        image={item.imageArray[0]}
        productName={item.name}
        price={item.price}
      />
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
