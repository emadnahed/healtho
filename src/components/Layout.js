import React from "react";
import { Outlet } from "react-router-dom";

// import Footer from "./Footer";
import Navbar from "./Navbar";

// This helps to share the UI as we have nested multiple routes.

export default function Layout() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}
