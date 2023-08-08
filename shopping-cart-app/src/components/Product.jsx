import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function Product(props) {

  const { id } = useParams();
  const productDetails = useLoaderData();
  // const { products } = productDetails;

 function getAllProductDetails() {
  let indiviudualDetails;
  productDetails.products.map(detail => {
    if (id === detail.name) {
      console.log(detail.desciption)
      console.log(detail.images.image)
      indiviudualDetails = detail;
      console.log(indiviudualDetails.name);
    }
  })
  return (
    <div className="product-body">
      <div className="general-overview flex">
        <div className="product-images">
          <img src={`/${indiviudualDetails.images.image}`}></img>
          <img src={`/${indiviudualDetails.images.image2}`}></img>
        </div>
        <div className="ctas flex flex-col p-16">
          <h1 className="product-title">{indiviudualDetails.name}</h1>
          <p>{indiviudualDetails.price}</p>
          <p>{indiviudualDetails.desciption}</p>
          <button type="button"></button>
          <button type="button"></button>
        </div>
      </div>
    </div>
  )
}

  return (
    <div>
      { getAllProductDetails() }
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