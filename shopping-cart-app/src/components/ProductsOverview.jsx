import React from 'react';
import ProductCard from './ProductCard';
import ProductData from '../productData.json';

function ProductsOverview() {

  const [products, setProducts] = React.useState(ProductData);

  console.log(products)
  console.log(products.Tops.products)


  
  const prodCards = products.Tops.products.map(top => {
    return (
      <ProductCard 
        name={top.name}
        img={top.images.image}
      />
    )
  });

  return (
    <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
      { prodCards }
    </div>
  )
}

export default ProductsOverview;