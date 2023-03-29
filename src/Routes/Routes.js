import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home.js/Home";
import ShopMen from "../Pages/Shop/ShopMen/ShopMen";
import ShopNew from "../Pages/Shop/ShopNew/ShopNew";
import ShopWomen from "../Pages/Shop/ShopWomen/ShopWomen";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
