import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {

  const [cartContents, setCartContents] = React.useState([{}, {}, 3, 4, 5, 6, {}]);
  // console.log(cartContents);

  return (
    <div className="root-layout">
      <Header 
        cartContents={cartContents}
        setCartContents={setCartContents}
      />
      <main className="flex justify-center">
        <Outlet 
          cartContents={cartContents}
          setCartContents={setCartContents}
        />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default RootLayout;