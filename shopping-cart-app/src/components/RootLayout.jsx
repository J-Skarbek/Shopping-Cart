import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {

  const [cartContents, setCartContents] = React.useState([1,2,3,4,5]);
  console.log(cartContents);

  return (
    <div className="root-layout">
      <Header />
      <main className="flex justify-center">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default RootLayout;