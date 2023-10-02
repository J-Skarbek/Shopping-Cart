import React from 'react';
import { Outlet, Link, useLoaderData, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductCard from './ProductCard';
import Pill from './Pill';

function ProductsOverview(props) {

  // const { id } = useParams();

  const productArray = useLoaderData();

  const [products, setProducts] = React.useState(productArray);

  console.log(products);

  const displayCategories = products.map(category => {
    return (
      <Pill
        categoryName={category.category}
        key={nanoid()}
        displayedProducts = {products}
        updateDisplayedProducts = {setProducts}
      />
    )
  })

  const displayProductsGrid = products.map(category => {
    let displayCards = category.products.map(individualProduct => {
      return (
        <ProductCard 
          name={individualProduct.name}
          description={individualProduct.desciption}
          img={individualProduct.imageArray[0]}
          price={individualProduct.price}
          key={nanoid()}
        />
      )
    })
    return displayCards;
  })

  //Need to find a way to repurpose the displayProductsGrid to be more dynamic --->
  //Specfically, need it to, by default, load all products, but also, be able to function with the category selection buttons
  //in the pill component and re-render the grid if someone wants to filter by product type
  //It should be almost there, but the problem seems to be that when someone clicks on a category button, it triggers an error
  //Because the structure of the new array being assigned to the state value is slightly different in structure than the
  //original JSON file's structure

  return (
    <div className='products-container'>
      <div className='category-pills flex justify-center gap-2 my-8'>
        <button type='button'>Get all Products</button>
          { displayCategories }
        </div>
      <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
        {/* {products.map(category => {
          let displayProducts = category.products.map(product => {
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
          return displayProducts;
        })} */}
        { displayProductsGrid }
      </div>
    </div>
  )
}

export default ProductsOverview;

export const productsLoader = async () => {
  // const { id } = params;
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}
