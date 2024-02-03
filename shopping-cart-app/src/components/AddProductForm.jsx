import React, { useContext } from "react";
import { ShopContext } from './RootLayout';
import PropTypes from 'prop-types';

export default function AddProductForm({details}) {

  const { addToCart, testCartAdd, addProduct } = useContext(ShopContext);
  const [productValues, setProductValues] = React.useState(
    {
    ...details,
    sizeSelected: '',
    quantityInCart: ''
    }
  );

  function handleFormUpdates(e) {
    setProductValues((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div className="form-container">
      <form>
        <label htmlFor='quantity'></label>
        <input 
          type="number" 
          min="0" 
          name="quantityInCart" 
          id="quantity" 
          className="form-input"
          onChange={handleFormUpdates} 
        />
        <label htmlFor='size-selected'></label>
        <select 
          onChange={handleFormUpdates}
          name="sizeSelected" 
          id="size-selected">
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
        <button type="submit" onClick={() => addProduct(productValues)}>Add to Cart</button>
      </form>
      {/* <button type="button" onClick={(() => console.log(productValues))}>Test current product values</button> */}
    </div>
  )
}

AddProductForm.propTypes = {
  details: PropTypes.object.isRequired
}