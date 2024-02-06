import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  const [purchaseOrder, setPurchaseOrder] = React.useState(null);

  function sendToCheckout(e) {
    e.preventDefault();
    console.log(`Default Prevented == ${e.defaultPrevented}`);
    let preTaxSubTotal;
    // let purchaseTotal;

    // if cartContents == empty : return $0.00
    // if cartContents.length === 1 : purchaseTotal = Number(item.price)
    // else for each item --> purchase total + Number(item.price)

    // const purchaseOrder = cartContents.map(item => {
    //   if (cartContents.length === 1) {
    //     purchaseTotal = Number(item.price);
    //   } else {

    //   }
    // })
    const getSubTotal = () => {
      if (cartContents.length === 0) {
        preTaxSubTotal = Number(0.00)
        console.log(`pretax subtotal: ${preTaxSubTotal}`)        
      }
      cartContents.map(item => {
        console.log(item);
        const quant = Number(item.quantityInCart);
        const price = Number(item.price);
        console.log(`Price: ${price} || quant: ${quant}`)
        const calculate = price * quant;
        console.log(`calculate: ${calculate}`);
        return preTaxSubTotal = preTaxSubTotal * calculate;
      })
      return preTaxSubTotal;
    }

  console.log(getSubTotal());
  return getSubTotal();
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
