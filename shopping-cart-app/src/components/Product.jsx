import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function Product(props) {

  const { id } = useParams();
  const prodcutDetails = useLoaderData();

  return (
    <div>
      <div className="details">
        <h2>{ id }</h2>
      </div>
      <p>This is the product page for {props.name}</p>
      <p>Testing Product page</p>
      <div className="more-detail">
        <h2>Product Details</h2>
        {/* <p>{prodcutDetails.name}</p> */}
        <p>{prodcutDetails.description}</p>
      </div>
    </div>
  )
}

export default Product;

// loader function

export const productDetailsLoader = async ({params}) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/Tops/' + id);
  return res.json();
}