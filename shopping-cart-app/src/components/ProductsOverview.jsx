import React from 'react';
import { nanoid } from 'nanoid'
import ProductCard from './ProductCard';
import ProductData from '../productData.json';
import Pill from './Pill';

function ProductsOverview() {

  const [products, setProducts] = React.useState(ProductData);

  const { Tops, Shoes, Dresses, Skirts, Accessories} = products;

  console.log(typeof Shoes.products);
  console.table(Tops.products);

  const displayAllProducts = () => {
    const newArray = [];
    Tops.products.forEach(item => {
      newArray.push(item)
    });
    Shoes.products.forEach(item => {
      newArray.push(item)
    });
    Dresses.products.forEach(item => {
      newArray.push(item)
    });
    Skirts.products.forEach(item => {
      newArray.push(item)
    });
    Accessories.products.forEach(item => {
      newArray.push(item)
    });
    console.log(newArray);

    let all = newArray.map(product => {
      return (
        <ProductCard 
        name={product.name}
        img={product.images.image}
        key={nanoid()}
      />
      );
    })

    return all;
  }

  // displayAllProducts();

  // const testingloop = () => {
  //   for (let property in products) {
  //     for (let item in property) {
  //       console.log(`${item}: ${property[item]}`)
  //     }
  //     console.log(`${property}: ${products[property].name}`)
  //   }
  // }

  // testingloop();

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
      {/* { productCards } */}
      <div className='category-pills'>
        <Pill 
          categoryName='hello'
        />
        <Pill 
          categoryName='hello'
        />
        <Pill 
          categoryName='hello'
        />
        <Pill 
          categoryName='hello'
        />
        <Pill 
          categoryName='hello'
        />
      </div>
      { displayAllProducts() }
    </div>
  )
}

export default ProductsOverview;