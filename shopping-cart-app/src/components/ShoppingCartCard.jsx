import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import PropTypes from 'prop-types';

export default function ShoppingCartCard({image, productName, price, size, quantity, available, cartLoopKey}) {

  const { removeProduct } = useContext(ShopContext);
  console.log(typeof price)

  return (
    <div className="flex" data-dom-key={cartLoopKey}>
      <img src={image} className="w-1/6 mr-4 mb-4"></img>
      <div className="prod-overview flex flex-col px-4">
        <p>Product: {productName}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Available: {available}</p>
        <p>Size: {size}</p>
        <p>Loop Key: {cartLoopKey}</p>
      </div>
      <div>
        <button type="button" onClick={(e) => removeProduct(e)}>Remove</button>
      </div>
    </div>
  )
}

ShoppingCartCard.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  available: PropTypes.number.isRequired,
  cartLoopKey: PropTypes.string.isRequired,
}