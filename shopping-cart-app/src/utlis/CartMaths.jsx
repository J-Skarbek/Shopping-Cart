import React, { useContext } from "react";
// import { ShopContext } from "./RootLayout";

export function CartMaths() {

  

  return (
    <></>
  )
}

// const roundCents = cartValue => Number.parseFloat(cartValue).toFixed(2);

// const applyTax = cartValue => cartValue * 1.06125;

// const calcShipping = (cartValue, shippingOption) => {
//   if (shippingOption === 'Express') {
//     return cartValue * 1.0375;
//   }
//   return cartValue * 1.01875;
// }
  
// export function getSubtotal(cartContents) {
//   console.log(cartContents.length);
//   let preTaxSubTotal;
//   let additionArray = [];
//   if (cartContents.length === 0) {
//     preTaxSubTotal = Number(0.00);
//     console.log(`pretax subtotal: ${preTaxSubTotal}`);   
//   } else {
//     cartContents.map(item => {
//       const quant = Number(item.quantityInCart);
//       const price = Number(item.price);
//       const multiply = price * quant;
//       additionArray.push(Number(roundCents(multiply)));
//     })
//   }

//   function reducer(accumulator, currentValue) {
//     const returns = accumulator + currentValue;
//     return returns;
//   }

//   const subTotalAll = () => {
//     if (additionArray.length === 0) {
//       console.log('There are no products in the cart.');
//       return;
//     }
//     const subTotaledValue = additionArray.reduce(reducer);
//     return subTotaledValue;
//   }
//   console.log(`processed subtotal: ${getSubtotal()}`)
//   return subTotalAll();
// }

// export {
//   applyTax,
//   calcShipping,
// }



