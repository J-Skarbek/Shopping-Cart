import React from "react";

function Pill(props) {

  const handleClick = () => {
    console.log('I am clicked');
  }

  return (
    <div 
      className="pill bg-fuchsia-100 py-1 px-6 rounded-3xl drop-shadow-lg" 
      onClick={handleClick}
    >
      <p>{props.categoryName}</p>
    </div>
  )
}

export default Pill;