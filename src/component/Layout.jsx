import React from "react";
import Navbar2 from "./Navbar2";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Copyright from "./Copyright ";

export default function Layout() {
  return (
    <>
      <Navbar2></Navbar2>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}
