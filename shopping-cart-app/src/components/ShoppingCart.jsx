import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

  const { cartContents, emptyTheCart, getSubtotal } = useContext(ShopContext);

  const [purchaseOrder, setPurchaseOrder] = React.useState(null);

  function sendToCheckout(e) {
    e.preventDefault();
    console.log(`Default Prevented == ${e.defaultPrevented}`);
 
    console.log(`processed subtotal: ${getSubtotal()}`)
    return getSubtotal();
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
        <div className="flex justify-evenly cart-options mb-4">
          <button type="button" onClick={sendToCheckout}>Checkout</button>
          <button type="button" onClick={emptyTheCart}>Empty Cart</button>
          <button type="button">Go Back</button>
        </div>
        <div className="products-in-cart-display">
          {displayCartContents.length === 0 ? <button>Shop Now</button> : displayCartContents}
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;