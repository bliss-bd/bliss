import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home.js/Home";
import Product from "../Pages/Shop/Product/Product";
import ShopMen from "../Pages/Shop/ShopMen/ShopMen";
import ShopNew from "../Pages/Shop/ShopNew/ShopNew";
import ShopWomen from "../Pages/Shop/ShopWomen/ShopWomen";
import SignUp from "../Pages/SignUp/SignUp"
import SignIn from "../Pages/SignIn/Signin"
import Error from "../Pages/Error/Error"
import PrivateRoute from "../Routes/PrivateRoute"
import Dashboard from "../layouts/Dashboard/Dashboard"

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
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
          // {
          //     path: '/dashboard',
          //     element: <DashboardFeautre></DashboardFeautre>
          // },  
  ]},
    {
      path: '*',
      element: <Error></Error>
  }
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
