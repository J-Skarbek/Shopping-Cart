import React from 'react';
// import { useParams } from 'react-router-dom';

function Product(props) {

  // const { id } = useParams()

  return (
    <div>
      {/* <div className="details">
        <h2>{ id }</h2>
      </div> */}
      <p>This is the product page for {props.name}</p>
      <p>Testing Product page</p>
    </div>
  )
}

export default Product;