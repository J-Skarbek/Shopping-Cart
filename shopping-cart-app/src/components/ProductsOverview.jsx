import React from 'react';
import ProductCard from './ProductCard';
import ProductData from '../productData.json';

function ProductsOverview() {

  return (
    <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center '>
      <ProductCard /> 
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default ProductsOverview;