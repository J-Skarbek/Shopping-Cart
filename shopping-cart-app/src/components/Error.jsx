import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  
  return (
    <div className="flex flex-col">
      <h1>There was an error here.</h1>
      <p>{error.message}</p>
    </div>
  )
}