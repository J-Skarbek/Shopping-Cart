import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function Product(props) {

  const { id } = useParams();
  const productDetails = useLoaderData();
  // const { products } = productDetails;

  // console.log(productDetails.products[0]);
  // console.log(id)
  // console.log(productDetails.products)

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
        <div className="ctas flex flex-column">
          <h1 className="product-title">{indiviudualDetails.name}</h1>
          <button type="button"></button>
          <button type="button"></button>
        </div>

      </div>
      <div className="details">
        <h2>{ id }</h2>
      </div>
      <p>This is the product page for {indiviudualDetails.name}</p>
      <div className="more-detail">
        <h2>Product Details</h2>
        <p>{indiviudualDetails.desciption}</p>
        <img src={`/${indiviudualDetails.images.image2}`}></img>
        <img src={`/${indiviudualDetails.images.image}`}></img>
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