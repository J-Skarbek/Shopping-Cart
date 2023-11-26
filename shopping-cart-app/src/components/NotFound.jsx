import React from "react";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Oopsies, the page you&#39;re looking for doesn&#39;t exist!</h1>
      <Link to='/'>Go To Home</Link>
    </div>
  )
}