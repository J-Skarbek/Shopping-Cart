import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductCard({img, name, searchParams, price}) {

  return (
    <div className="product-card bg-stone-200 w-80 m-4 rounded-2xl">
      <div className="featured-img">
        <img className="rounded-t-2xl" src={img} alt={name} />
      </div>
      <div className="product-details p-4">
          <Link 
            to={name}
            state={{ search: `?${searchParams.toString()}` }}
          >
            <p className="product-name font-semibold text-lg">{name}</p>
          </Link>
        <p className="product-price">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard;

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}