import React from "react";
import { Outlet } from "react-router-dom";
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
    </div>
  )
}

export default RootLayout;