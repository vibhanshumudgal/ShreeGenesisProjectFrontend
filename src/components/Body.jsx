import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex-grow pt-15">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
