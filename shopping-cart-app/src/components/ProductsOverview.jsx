import React from 'react';
import ProductCard from './ProductCard';
import ProductData from '../productData.json';

function ProductsOverview() {

  const [products, setProducts] = React.useState(ProductData);

  const { Tops, Bottoms, Dresses, Skirts, Accessories} = products;

  console.log(products.Bottoms);

  let test = 0;

  // console.log(products)
  // console.log(products.Tops.products)

  const productCards = products.Tops.products.map(top => {
    return (
      <ProductCard 
        name={top.name}
        img={top.images.image}
        key={test += 1}

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