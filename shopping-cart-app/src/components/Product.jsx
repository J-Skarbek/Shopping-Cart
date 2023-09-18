import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function Product(props) {

  const { id } = useParams();
  const productDetails = useLoaderData();
  // const { products } = productDetails;
  console.log(id);
  console.log(productDetails);

  function getAllProductDetails() {
    let details;
    let photoArray;
    productDetails.map(category => {
      const productDeets = category.products.map(detail => {
        if (id === detail.name) {
          details = detail;
        }
      })
      return details;
    })

    return (
      <div className="product-body max-w-7xl">
        <div className="general-overview flex justify-center">
          <div className="product-images">
            <img src={`/${details.images.image}`}></img>
            {/* <img src={`/${details.images.image2}`}></img> */}
          </div>
          <div className="ctas flex flex-col p-16">
            <h1 className="product-title">{details.name}</h1>
            <p>{details.price}</p>
            <p>{details.desciption}</p>
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
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}