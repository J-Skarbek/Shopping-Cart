import React from "react";

function Button(props) {

  return (
    <div className="button">
      <button type="button" className="capitalize">{props.text}</button>
    </div>
  )
}

export default Button;