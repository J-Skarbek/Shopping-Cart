import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout() {
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