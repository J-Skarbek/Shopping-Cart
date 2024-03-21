import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";

export default function Checkout() {

  const { cartContents, getSubtotal } = useContext(ShopContext);

  console.table(cartContents);
  console.log(getSubtotal());

  return (
    <div>
      <p>This is the checkout page.</p>
    </div>
  )
}
