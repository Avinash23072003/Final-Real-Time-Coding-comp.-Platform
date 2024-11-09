import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // This will be part of the routing
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
// import { ClerkProvider, useUser } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/root-layout.jsx";
import SignIn from "./layouts/SignIn.jsx";
import SignUp from "./layouts/SignUp.jsx";
import ForgotPassword from "./layouts/ForgotPassword.jsx";
import ResetPassword from "./layouts/ResetPassword.jsx";
import Pricing from "./layouts/Pricing.jsx";
import { RecoilRoot } from "recoil";
import LandingPage from "./components/LandingPage.jsx";
import CodeEditor from "./components/CodeEditor.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />, // Root layout wraps the App
    children: [
      {
        path: "/",
        element: <App />, // Conditional rendering component
      },
      {
        path: "/codevita",
        element: <CodeEditor />, // Conditional rendering component
      },
      {
        path:"/sign-in",
        element:<SignIn/>,
      },
      {
        path:"/sign-in/forgot-password",
        element:<ForgotPassword/>
      },
      {
        path:"/sign-in/reset-password",
        element:<ResetPassword/>
      },
      {
        path:"/sign-up",
        element:<SignUp/>
      },
      {
        path:"/pricing",
        element:<Pricing/>
      },
      // other routes...
    ],
  },
]);

// Component for conditional rendering based on user sign-in status
// function ConditionalRender() {
//   const { isSignedIn } = useUser();
//   return isSignedIn ? <App /> : <SignInPage />; // Use the SignInPage component instead
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <RecoilRoot>
      
        <RouterProvider router={router} />
    </RecoilRoot>

    </ChakraProvider>
  </React.StrictMode>
);
