import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import "./global.css"
import LandingPage from "./components/LandingPage";
import { loggedInAtom } from "./lib/atoms";
import { useRecoilState } from "recoil";
import NoPage from "./pages/NoPage";
import { useEffect, useState } from "react";
function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token'); // or sessionStorage
    return token !== null;
  };

  const isLoggedIn = isAuthenticated();
  // const [loggedIn , setLoggedIn] = useRecoilState(loggedInAtom);
  
  return (
    
    <Box
    minH="100vh" bg="#0f0a19" color="gray.500" px={6}>
      <LandingPage/>
    </Box>
  );
}

export default App;
