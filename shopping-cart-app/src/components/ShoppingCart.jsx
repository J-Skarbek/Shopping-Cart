import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

  const { cartContents, emptyTheCart, getSubtotal } = useContext(ShopContext);

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
          {/* <button type="button" onClick={sendToCheckout}>Checkout</button> */}
          <Link to={'/checkout'}><button onClick={sendToCheckout}>Go To Checkout</button></Link>
          <button type="button" onClick={emptyTheCart}>Empty Cart</button>
        </div>
        <div className="products-in-cart-display flex flex-col items-center">
          { displayCartContents.length === 0 ? 
          <div className="nothing-in-cart">
            <h2 className="font-bold">There&apos;s nothing in your cart right now.</h2>
            <Link to={'/shop'}>Shop Now</Link>
          </div>
          : displayCartContents }
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;