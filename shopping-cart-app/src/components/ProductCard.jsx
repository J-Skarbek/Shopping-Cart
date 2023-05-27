import React from "react";
import ProductData from '../productData.json';

function ProductCard(props) {

  return (
    <div className="product-card bg-stone-200 w-80 m-4 rounded-2xl">
      <div className="featured-img">
        <img className="rounded-t-2xl" src={props.img} alt={props.name} />
      </div>
      <div className="product-details p-4">
        <p className="product-name font-semibold text-lg">{props.name}</p>
        <p className="product-price">{ProductData.Tops.products[0].price}</p>
      </div>
    </div>
  )
}

export default ProductCard;