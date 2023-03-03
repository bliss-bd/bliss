import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main/Main";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
