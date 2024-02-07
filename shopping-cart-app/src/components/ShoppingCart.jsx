import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";
import { getSubtotal } from "../utlis/cartMaths";

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  // const [purchaseOrder, setPurchaseOrder] = React.useState(null);

  const test = cartContents;
  console.log(test)

  function sendToCheckout(e) {
    e.preventDefault();
    console.log(`Default Prevented == ${e.defaultPrevented}`); 
    console.log(`cartContentsValue: ${typeof cartContents} || testValue: ${test}`)
    return getSubtotal(test);
  }

  const displayCartContents = cartContents.map(item => {
    return (
      <ShoppingCartCard 
        key={item.cartLoopKey}
        image={item.imageArray[0]}
        productName={item.name}
        price={item.price}
        quantity={item.quantityInCart}
        available={item.quantityInInventory}
        size={item.sizeSelected}
        cartLoopKey={item.cartLoopKey}
      />
    )
  })

  return (
    <div className="shopping-cart-main">
      <div className="flex flex-col max-w-7xl px-8 py-16">
        <div className="cart-options flex">
          <button type="button" onClick={emptyTheCart}>Empty Cart</button>
          <button type="button">Go Back</button>
        </div>
        { displayCartContents.length === 0 ? <button>Shop Now</button> : displayCartContents}
        {/* {displayCartContents} */}
      </div>
      <div>
        <button type="button" onClick={sendToCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart;
