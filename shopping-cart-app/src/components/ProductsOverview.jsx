import React from 'react';
import { nanoid } from 'nanoid'
import ProductCard from './ProductCard';
import ProductData from '../productData.json';

function ProductsOverview() {

  const [products, setProducts] = React.useState(ProductData);

  const { Tops, Shoes, Dresses, Skirts, Accessories} = products;

  console.log(typeof Shoes.products);
  console.table(Tops.products);

  // console.log(products)
  // console.log(products.Tops.products)

  const productCards = products.Tops.products.map(top => {
    return (
      <ProductCard 
        name={top.name}
        img={top.images.image}
        key={nanoid()}
      />
    )
  });

  return (
    <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
      { productCards }
    </div>
  )
}

export default ProductsOverview;