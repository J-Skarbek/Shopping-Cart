import React from 'react';
import { Outlet, Link, useLoaderData, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductCard from './ProductCard';
import Pill from './Pill';

function ProductsOverview(props) {

  // const { id } = useParams();

  const productArray = useLoaderData();

  // const changeCategory = e => {
  //   console.log(e.target.innerText);
  //   if (e.target.innerText === 'Tops') {
  //     const topsArray = [];
  //     Tops.products.forEach(item => {
  //       topsArray.push(item);
  //     });
  //     console.log(topsArray)
  //     let topsOnly = topsArray.map(product => {
  //       return (
  //         <ProductCard 
  //           name={product.name}
  //           description={product.description}
  //           img={product.images.image}
  //           price={product.price}
  //           key={nanoid()}
  //         />
  //       );
  //     });
  //     return topsOnly;
  //   }
  // }

  const [allProducts, setAllProducts] = React.useState(productArray);

  console.log(allProducts);

  const displayCategories = allProducts.map(category => {
    return (
      <Pill
        categoryName={category.category}
        // handleClick={changeCategory}
        key={nanoid()}
      />
    )
  })

  return (
    <div className='products-container'>
      <div className='category-pills flex justify-center gap-2 my-8'>
        <button type='button'>Get all Products</button>
          { displayCategories }
        </div>
      <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
        {productArray.map(category => {
          let products = category.products.map(product => {
            return (
              <ProductCard 
                name={product.name}
                description={product.desciption}
                img={product.images.image}
                price={product.price}
                key={nanoid()}
              />
            )
          })
          return products;
        })}
      </div>
    </div>
  )
}

export default ProductsOverview;

export const productsLoader = async () => {
  // const { id } = params;
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
  // const res = await fetch('http://localhost:4000/Tops/')
}

