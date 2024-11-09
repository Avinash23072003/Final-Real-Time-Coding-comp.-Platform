import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import UserProfileButton from "../components/UserProfileButton";
import Header from "@/components/Header";

export default function RootLayout() {
  

  return (
    <div >
      <Header/>
      <main>
      <Outlet /> 
      </main>
    </div>
  );
}
















 /* <li id="nav-links">
            <Link to="/contact">Contact</Link>
          </li>
          <li id="nav-links">
            <Link to="/sign-up">signUp</Link>
          </li> */
          /* <li id="nav-links">
            <Link to="/dashboard">Dashboard</Link>
          </li> */