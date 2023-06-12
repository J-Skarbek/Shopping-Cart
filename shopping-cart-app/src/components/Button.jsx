import React from "react";

function Button(props) {

  return (
    <div className="button">
      <button type="button" className="capitalize" onClick={props.route}>{props.text}</button>
    </div>
  )
}

export default Button;