import React from 'react';
import { Outlet, Link, useLoaderData, useParams, useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductCard from './ProductCard';
import GetAllProducts from './GetAllProductCards';
import Pill from './Pill';

export const productsLoader = async () => {
  // const { id } = params;
  const res = await fetch('http://localhost:4000/allProudcts')
  return res.json();
}

export default function ProductsOverview(props) {

  const productArray = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [products, setProducts] = React.useState(productArray);
  console.log(searchParams.toString())
  console.log(`category is ${categoryFilter}`)
  console.log(productArray[0].category);

  const filterProducts = categoryFilter
    ? productArray.filter(prod => prod.category.toLowerCase() === categoryFilter)
    : productArray
  ;

  console.log(filterProducts)

  

  const displayCategories = products.map(category => {
    return (
      <Pill
        categoryName={category.category}
        key={nanoid()}
        displayedProducts={products}
        updateDisplayedProducts={setProducts}
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

  function resetProductGrid() {
    console.log('clicked!');
    return displayProductsGrid;
  }

  //Need to find a way to repurpose the displayProductsGrid to be more dynamic --->
  //Specfically, need it to, by default, load all products, but also, be able to function with the category selection buttons
  //in the pill component and re-render the grid if someone wants to filter by product type
  //It should be almost there, but the problem seems to be that when someone clicks on a category button, it triggers an error
  //Because the structure of the new array being assigned to the state value is slightly different in structure than the
  //original JSON file's structure

  return (
    <div className='products-container'>
      <div className='category-pills flex justify-center gap-2 my-8'>
        <button 
          type='button' 
          className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg" 
          onClick={resetProductGrid}
        >
          All Products
        </button>
          <GetAllProducts 
            allProducts={products}
            updateDisplayedProducts={setProducts}
          />
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

