import React from 'react';
import { Outlet, Link, useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductCard from './ProductCard';
import GetAllProducts from './GetAllProductCards';
import Pill from './Pill';

export const productsLoader = async () => {
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}

export default function ProductsOverview() {

  const productArray = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  function getAllProducts() {
    const allProducts = [];
     productArray.map(category => {
      category.products.map(product => {
        allProducts.push(product);
      });
    });
    return allProducts;
  }

  //This works similar to the handleFilterChange -- will delete later
  //
  // function getNewSearchParamString(key, value) {
  //   const sp = new URLSearchParams(searchParams);
  //   if ( value === null) {
  //     sp.delete(key)
  //   } else {
  //     sp.set(key, value)
  //   }
  //   console.log(sp.toString())
  //   return `?${sp.toString()}`
  // }

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  const dipslayCategoryFilters = productArray.map(category => {
    return (
      <button
        key={nanoid()}
        onClick={() => handleFilterChange("category", `${category.category}`)}
        className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg" 
        >{category.category}
      </button>
    )
  })

  const filterProducts = categoryFilter ? 
    productArray.filter(prod => prod.category.toLowerCase() === categoryFilter)[0].products
    : getAllProducts();

  const displayProducts = filterProducts.map(product => (
    <ProductCard 
      name={product.name}
      description={product.desciption}
      img={product.imageArray[0]}
      price={product.price}
      key={nanoid()}
      searchParams={searchParams}
    />
  ))

  return (
    <div className='products-container'>
      <div className='category-pills flex justify-center gap-2 my-8'>
        <button
          onClick={() => setSearchParams({})}
          className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg" 
        >
          All Products
        </button>
        { dipslayCategoryFilters }
      </div>
      <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
        { displayProducts }
      </div>
    </div>
  )
}