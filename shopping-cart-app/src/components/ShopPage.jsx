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

export default function ProductsOverview(props) {

  const productArray = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [products, setProducts] = React.useState(productArray);

  function getAllProducts() {
    const allProducts = [];
     productArray.map(category => {
      category.products.map(product => {
        allProducts.push(product);
      });
    });
    return allProducts;
  }

  const filterProducts = categoryFilter
    ? productArray.filter(prod => prod.category.toLowerCase() === categoryFilter)[0].products
    : getAllProducts()
  ;

  const displayProducts = filterProducts.map(product => (
    <ProductCard 
      name={product.name}
      description={product.desciption}
      img={product.imageArray[0]}
      price={product.price}
      key={nanoid()}
    />
  ))

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
        { displayProducts }
      </div>
    </div>
  )
}

