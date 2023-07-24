import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function Product(props) {

  const { id } = useParams();
  const productDetails = useLoaderData();
  console.log(productDetails.products[0])

  return (
    <div>
      <div className="details">
        <h2>{ id }</h2>
      </div>
      <p>This is the product page for {productDetails.products[0].name}</p>
      <p>Testing Product page</p>
      <div className="more-detail">
        <h2>Product Details</h2>
        {/* <p>{productDetails}</p>
        <p>{productDetails}</p> */}
      </div>
    </div>
  )
}

export default Product;

// loader function

export const productDetailsLoader = async ({params}) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/Tops/');
  return res.json();
}