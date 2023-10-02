import React from 'react';
import { Outlet, Link, useLoaderData, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductCard from './ProductCard';
import ProductData from '../productData.json';
import Pill from './Pill';

function ProductsOverview(props) {

  // const { id } = useParams();

  const productArray = useLoaderData();

  // const [products, setProducts] = React.useState(ProductData);

  // const { Tops, Shoes, Dresses, Skirts, Accessories } = products;

  // console.log(tops);

  // const displayAllProducts = () => {
  //   const newArray = [];
  //   Tops.products.forEach(item => {
  //     newArray.push(item)
  //   });
  //   Shoes.products.forEach(item => {
  //     newArray.push(item)
  //   });
  //   Dresses.products.forEach(item => {
  //     newArray.push(item)
  //   });
  //   Skirts.products.forEach(item => {
  //     newArray.push(item)
  //   });
  //   Accessories.products.forEach(item => {
  //     newArray.push(item)
  //   });
  //   // console.log(newArray);

  //   let all = newArray.map(product => {
  //     return (
  //       <ProductCard 
  //         name={product.name}
  //         description={product.description}
  //         img={product.images.image}
  //         price={product.price}
  //         key={nanoid()}
  //       />
  //     );
  //   })

  //   return all;
  // }

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

  // const getProductCategories = () => {
  //   let productCategories = [];
  //   for (let property in products) {
  //     // console.log(`${property}`);
  //     productCategories.push(property);
  //   }
  //   let cats = productCategories.map(category => {
  //     return (
  //       <Pill 
  //         categoryName={category}
  //         handleClick={changeCategory}
  //         key={nanoid()}
  //       />
  //     )
  //   })
  //   return cats;
  // }

  // let displayArray = [];
  // const allProds = tops.map(category => {
  //   displayArray.push(category)
  // });
  // console.log(displayArray)

  const [allProducts, setAllProducts] = React.useState(productArray);

  console.log(allProducts);

  function displayProductCategories() {
    let productCategories = [];
    allProducts.map(category => {
      category.products.map(product => {
        productCategories.push(product.category);
      })

    })
    console.log(productCategories);
  }

  displayProductCategories();

  // function getAllProductDetails() {
  //   let details;
  //   productDetails.map(category => {
  //     const productDeets = category.products.map(detail => {
  //       if (id === detail.name) {
  //         details = detail;
  //       }
  //     })
  //     return details;
  //   })

  return (
    <div className='products-container'>
      <div className='category-pills flex justify-center gap-2 my-8'>
        <button type='button'>Get all Products</button>
          {/* { getProductCategories } */}
        </div>
      <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
        {productArray.map(category => {
          let products = category.products.map(product => {
            // console.log(product.name)
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

