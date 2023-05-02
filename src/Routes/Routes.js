import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home.js/Home";
import Product from "../Pages/Shop/Product/Product";
import ShopMen from "../Pages/Shop/ShopMen/ShopMen";
import ShopNew from "../Pages/Shop/ShopNew/ShopNew";
import ShopWomen from "../Pages/Shop/ShopWomen/ShopWomen";
import SignIn from "./SignIn/Signin";
import SignUp from "./SignUp/SignUp";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/product/:id",
          element: <Product></Product>,
          loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
        },
        {
          path: "/shopnew",
          element: <ShopNew></ShopNew>,
        },
        {
          path: "/shopmen",
          element: <ShopMen></ShopMen>,
        },
        {
          path: "/shopwomen",
          element: <ShopWomen></ShopWomen>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
