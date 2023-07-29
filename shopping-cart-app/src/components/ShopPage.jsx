import React from 'react';
import { Outlet, Link, useLoaderData, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProductCard from './ProductCard';
import ProductData from '../productData.json';
import Pill from './Pill';

function ProductsOverview(props) {

  const { id } = useParams();

  const tops = useLoaderData();

  const [products, setProducts] = React.useState(ProductData);

  const { Tops, Shoes, Dresses, Skirts, Accessories } = products;

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
    // console.log(newArray);

    let all = newArray.map(product => {
      return (
        <ProductCard 
          name={product.name}
          description={product.description}
          img={product.images.image}
          price={product.price}
          key={nanoid()}
        />
      );
    })

    return all;
  }

  const changeCategory = e => {
    console.log(e.target.innerText);
    if (e.target.innerText === 'Tops') {
      const topsArray = [];
      Tops.products.forEach(item => {
        topsArray.push(item);
      });
      console.log(topsArray)
      let topsOnly = topsArray.map(product => {
        return (
          <ProductCard 
            name={product.name}
            description={product.description}
            img={product.images.image}
            price={product.price}
            key={nanoid()}
          />
        );
      });
      return topsOnly;
    }
  }

  const getProductCategories = () => {
    let productCategories = [];
    for (let property in products) {
      // console.log(`${property}`);
      productCategories.push(property);
    }
    let cats = productCategories.map(category => {
      return (
        <Pill 
          categoryName={category}
          handleClick={changeCategory}
          key={nanoid()}
        />
      )
    })
    return cats;
  }

  // console.log(tops.products)
  // const displayState

  return (
    <div className='products-container'>
      <div className='category-pills flex justify-center gap-2 my-8'>
        <button type='button'>Get all Products</button>
          { getProductCategories() }
        </div>
      <div className='card-grid my-0 mx-auto w-4/5 flex flex-wrap justify-around items-center'>
        {/* { productCards } */}
        { displayAllProducts() }
      </div>
      <div className="product-test">
        {tops.products.map(top => {
          return (
            <div>
              <Link to={top.name} key={nanoid()}>
              <p>{top.name}</p>
              </Link>
              <p>{top.desciption}</p>
              <img src={`/${top.images.image}`}></img>
            </div>
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}

export default ProductsOverview;

export const topsLoader = async () => {
  // const { id } = params;
  const res = await fetch('http://localhost:4000/Tops/')
  return res.json()
}

// export const productDetailsLoader = async ({params}) => {
//   const { id } = params;
//   const res = await fetch('http://localhost:4000/Tops/' + id);
//   return res.json();
// }
