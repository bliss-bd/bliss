import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Contexts/UserContexts/UserContexts";

const DashBoardHome = () => {
  const { user } = useContext(userContext);

  const [currentUser, setCurrentUser] = useState([]);

  // console.log( currentUser, currentUser?.role);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setCurrentUser(data)
      })
  }, [user.email])

  return (
    <div className="my-2 lg:max-w-[1440px] relative inset-0 md:max-w-[744px] max-w-[465px] mx-auto  lg:px-20 md:px-6 px-4 lg:py-8 md:py-6 py-4">
      <div className="relative">
        <div className="w-full h-full md:flex flex-auto items-center justify-start p-10 bg-gray-900 text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b to-black from-lime-300 opacity-75 inset-0 z-0"></div>
          <div className="w-full mx-auto max-w-md z-10">
            <img
              src={user?.photoURL}
              alt=""
              className="w-32 h-32 mx-auto rounded-full my-6 dark:bg-gray-500 aspect-square"
            />
            <p className="lg:text-4xl md:text-2xl text-lg font-semibold  text-white">
              {user?.displayName}
            </p>
          </div>
          {/* <!---remove custom style--> */}
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="relative">
        {/* For large screens */}
        <div className="bg-black px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white"></h1>
            <ul className="w-8/12 flex items-center justify-center space-x-8">

              {currentUser?.role === "Admin" &&
                <>
                  <li>
                    <Link
                      to="/dashboard"
                      className="dark:text-white text-base focus:outline-none focus:ring-2 hover:underline"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/addproducts"
                      className="dark:text-white text-base focus:outline-none focus:ring-2 hover:underline"
                    >
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/allproducts"
                      className="dark:text-white text-base focus:outline-none focus:ring-2 hover:underline"
                    >
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/dashboarduser"
                      className="dark:text-white text-base focus:outline-none focus:ring-2 hover:underline"
                    >
                      All Users
                    </Link>
                  </li>
                </>
              }
              {currentUser.role === "" &&
                <>
                  <li>
                    <Link
                      to="/dashboard/cart"
                      className="dark:text-white text-base  focus:outline-none focus:ring-2 hover:underline"
                    >
                      Cart
                    </Link>
                  </li>
                </>
              }
            </ul>
            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
