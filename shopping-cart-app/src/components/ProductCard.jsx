import React from "react";
import ProductData from '../productData.json';

function ProductCard() {

  return (
    <div className="product-card bg-red-400">
      {/* <img src={ProductData.ProductData.Tops.products[0].images.image} /> */}
      <img src={ProductData.Tops.products[0].images.image} alt={ProductData.Tops.products[0].name} />
      <p>testing</p>
    </div>
  )
}

export default ProductCard;