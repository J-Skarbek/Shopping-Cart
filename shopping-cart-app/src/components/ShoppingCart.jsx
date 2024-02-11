import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import ShoppingCartCard from "./ShoppingCartCard";

function ShoppingCart() {

  const { cartContents, emptyTheCart } = useContext(ShopContext);

  const [purchaseOrder, setPurchaseOrder] = React.useState(null);

  function sendToCheckout(e) {
    e.preventDefault();
    console.log(`Default Prevented == ${e.defaultPrevented}`);
 
    const roundCents = cartValue => Number.parseFloat(cartValue).toFixed(2);
    const applyTax = cartValue => cartValue * 1.06125;
    const calcShipping = (cartValue, shippingOption) => {
      if (shippingOption === 'Express') {
        return cartValue * 1.0375;
      }
      return cartValue * 1.01875;
    }
    
    const getSubtotal = () => {
      let preTaxSubTotal;
      let additionArray = [];
      if (cartContents.length === 0) {
        preTaxSubTotal = Number(0.00);
        console.log(`pretax subtotal: ${preTaxSubTotal}`);   
      } else {
        cartContents.map(item => {
          const quant = Number(item.quantityInCart);
          const price = Number(item.price);
          const multiply = price * quant;
          additionArray.push(Number(roundCents(multiply)));
        })
      }
    
      function reducer(accumulator, currentValue) {
        const returns = accumulator + currentValue;
        return returns;
      }

      const subTotalAll = () => {
        if (additionArray.length === 0) {
          console.log('There are no products in the cart.');
          return;
        }
        const subTotaledValue = additionArray.reduce(reducer);
        return subTotaledValue;
      }

      return subTotalAll();
    }
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