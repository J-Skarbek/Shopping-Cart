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
        quantity={item.quantityInCart}
        available={item.quantityInInventory}
      />
    )
  })

  return (
    <div className="shopping-cart-main">
      <div className="flex flex-col max-w-7xl px-8 py-16">
        { displayCartContents.length === 0 ? <button>Shop Now</button> : displayCartContents}
        {/* {displayCartContents} */}
      </div>
    </div>
  )
}

export default ShoppingCart;
