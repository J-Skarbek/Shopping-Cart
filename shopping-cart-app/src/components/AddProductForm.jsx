import React, { useContext } from "react";
import { ShopContext } from './RootLayout';
import PropTypes from 'prop-types';

export default function AddProductForm({details}) {

  const { addToCart, testCartAdd, addProduct } = useContext(ShopContext);
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  function updateQuantity(e) {
    console.log(e.target.value);
    console.log(`Quanitiy Change`);
  }

  function updateSize(e) {
    console.log(e.target.value);
    console.log(`Size Change`);
  }

  return (
    <div className="form-container">
      <form>
        <label htmlFor='quantity'></label>
        <input 
          type="number" 
          min="0" 
          name="quantity" 
          id="quantity" 
          className="form-input"
          onChange={updateQuantity} 
        />
        <label htmlFor='size-select'></label>
        <select 
          onChange={updateSize}
          name="size-select" 
          id="size-select">
          { details.sizes.map(sizeValue => {
            // console.log(details)
            return (
              // Normally wouln't use the value returned from array as the key
              // but the size values options on each won't be changing, so it should be fine
              // in this use case
              <option 
                value={sizeValue} 
                key={sizeValue} 
                className="text-sm">
                  {sizeValue.toUpperCase()}
              </option>
            )
          })}
        </select>
        <button type="submit" onClick={() => testCartAdd(details)}>Add to Cart</button>
      </form>
    </div>
  )
}

AddProductForm.propTypes = {
  details: PropTypes.object.isRequired
}