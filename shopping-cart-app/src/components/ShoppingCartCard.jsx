import React, { useContext } from "react";
import { ShopContext } from "./RootLayout";
import PropTypes from 'prop-types';
import trashCan from '/trash-can.svg';

export default function ShoppingCartCard({image, productName, price, size, quantity, available, cartLoopKey}) {

  const { removeProduct } = useContext(ShopContext);

  return (
    <div className="flex mb-4 bg-slate-50 drop-shadow rounded-md justify-between" data-dom-key={cartLoopKey}>
      <div className="cart-content-wrapper flex">
        <img src={image} className="h-36 sm:h-60 mr-4"></img>
        <div className="prod-overview flex flex-col w-48 sm:w-96 p-4">
          <p className="font-bold">{productName}</p>
          <p>Price: ${price}</p>
          <p>In Cart: {quantity}</p>
          <p>Size: {size.toUpperCase()}</p>
          <p>CartloopKey: {cartLoopKey}</p>
        </div>
        <div>
          {/* <div className="cart-cardImg-container p-4"> */}
            {/* <button type="button" onClick={(e) => removeProduct(e)}>Remove</button> */}
            <img src={trashCan} alt='remove from cart' onClick={(e) =>removeProduct(e)} className="remove-from-cart-icon w-8 sm:w-6"></img>
          {/* </div> */}
        </div>
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