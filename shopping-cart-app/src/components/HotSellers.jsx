import React from "react";
import { useLoaderData, useSearchParams } from 'react-router-dom';
import ProductCard from "./ProductCard";
import { nanoid } from "nanoid";

export const productsLoader = async () => {
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}

export default function HotSellers() {

  const productArray = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const allProducts = [];

  productArray.map(category => {
    category.products.map(product => {
      allProducts.push(product);
    });
  });

  const displayHotSellers = allProducts.map(product => {
    return (
      <ProductCard 
        name={product.name}
        description={product.desciption}
        img={product.imageArray[0]}
        price={product.price}
        key={nanoid()}
        searchParams={searchParams}
      />
    )
  })

  return(
    <div className="w-full my-8">
      <div className="hot-sellers w-3/4 flex">
        { displayHotSellers }
      </div>
    </div>
  )
}