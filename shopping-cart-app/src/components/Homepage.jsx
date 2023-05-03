import React from "react";

function Homepage() {

  return (
    <div className="homepage-body">
      <div className="hero-section">
        <div className="hero-text left-side">
          <h1>Main Page Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="buttons">
            <button type="button">Shop Now</button>
            <button type="button">Join Our Mailing List</button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Homepage;