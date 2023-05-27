import React from 'react';
import ProductCard from './ProductCard';
import ProductData from '../productData.json';

function ProductsOverview() {

  return (
    <div className='card-grid'>
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