import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  const [purchaseOrder, setPurchaseOrder] = React.useState(null);

  function sendToCheckout(e) {
    e.preventDefault();
    console.log(`Default Prevented == ${e.defaultPrevented}`);
    // let preTaxSubTotal;
    // let totalingArray = [];
 
    // if Array.length === 0 -- do nothing
    // if arrry.length === 1 -- multiply price by quantity in cart
    // array.length > 1 -- go through it, multiplying the price by quantity, and saving
    //   updating the subtotal price as we go along (or, create a new temp array to hold the subtotal
    //   values)

    const roundCents = cartValue => Number.parseFloat(cartValue).toFixed(2);
    const applyTax = cartValue => cartValue * 0.6125;

    // const calculateSubTotal = ({ item }) => {
    //   const quant  = Number(item.quantityInCart);
    //   const price = Number(item.quantityInCart);
    //   const subTotal = quant * price;
    //   return roundCents(subTotal);
    // }




    const getSubTotal = () => {
      let preTaxSubTotal;
      if (cartContents.length === 0) {
        preTaxSubTotal = Number(0.00);
        console.log(`pretax subtotal: ${preTaxSubTotal}`);   
      } else if (cartContents.length === 1) {     
          const quant = Number(cartContents[0].quantityInCart);
          const price = Number(cartContents[0].price);
          console.log(`Price: ${price} || quant: ${quant}`);
          const cartItemsValue = price * quant;
          preTaxSubTotal = roundCents(cartItemsValue);
          console.log(`pretaxSubtotal value: ${preTaxSubTotal}`)
      } else {
      cartContents.map(item => {
        console.log(item);
        const quant = Number(item.quantityInCart);
        const price = Number(item.price);
        console.log(`Price: ${price} || quant: ${quant}`)
        const cartItemsValue = price * quant;
        const subTotal = roundCents(cartItemsValue);
        console.log(`calculate: ${subTotal}`);
        return preTaxSubTotal = preTaxSubTotal * subTotal;
      })
      // console.log('test ' + preTaxSubTotal)
      // return preTaxSubTotal;
     }
     console.log('test ' + preTaxSubTotal)
     return preTaxSubTotal;
    }
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
