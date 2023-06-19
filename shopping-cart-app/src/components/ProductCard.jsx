import React from "react";
import ProductsPage from "./ProductsPage";
import { Link } from 'react-router-dom';

function ProductCard(props) {

  return (
    <div className="product-card bg-stone-200 w-80 m-4 rounded-2xl">
      <div className="featured-img">
        <img className="rounded-t-2xl" src={props.img} alt={props.name} />
      </div>
      <div className="product-details p-4">
          <Link to={props.name}><p className="product-name font-semibold text-lg">{props.name}</p></Link>
        <p className="product-price">{props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard;