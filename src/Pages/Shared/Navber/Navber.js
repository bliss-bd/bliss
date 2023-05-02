import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { userContext } from "../../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

const Navber = () => {
  const { user, logout } = useContext(userContext);
  const [hasStyle, setHasStyle] = useState(false);
  console.log(user)
  const handleOpenMenu = () => {
    setHasStyle(true);
  };

  const handleCloseMenu = () => {
    setHasStyle(false);
  };

  const handleSignOut = () => {
    logout()
      .then(() => {
        toast.success("SuccessFully Sign out");
      })
      .then((error) => console.error(error));
  };

  const menu = (
    <>
      <li className="menuItems p-3 xl:p-6">
        <Link to="/shopnew" title="new" onClick={handleCloseMenu}>
          <span>New</span>
          <svg viewBox="0 0 13 20">
            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          </svg>
        </Link>
      </li>
      <li className="menuItems p-3 xl:p-6">
        <Link to="/shopwomen" title="women" onClick={handleCloseMenu}>
          <span>Women</span>
          <svg viewBox="0 0 13 20">
            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          </svg>
        </Link>
      </li>
      <li className="menuItems p-3 xl:p-6">
        <Link to="/shopmen" title="men" onClick={handleCloseMenu}>
          <span>Men</span>
          <svg viewBox="0 0 13 20">
            <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
          </svg>
        </Link>
      </li>
    </>
  );

  return (
    <div className="">
      <header class=" bg-white shadow-md h-20 md:flex">
        <div className="logo h-20 lg:px-2 border-r flex items-center justify-between">
          <Link to="/">
            <img
              class="w-36 my-4 px-4 mx-2 lg:mx-8"
              src="https://i.ibb.co/tqgmVWj/logo.png"
              alt=""
            />
          </Link>
          <div class="lg:hidden mx-8 pt-2">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={handleOpenMenu}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav class="header-links hidden lg:contents font-semibold text-base lg:text-lg">
          <ul class="flex items-center ml-4 xl:ml-8 mr-auto">
            <li className="menuItems p-3 xl:p-6">
              <Link to="/" title="men" onClick={handleCloseMenu}>
                <span>Home</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            {menu}
          </ul>
        </nav>
        <nav class="hidden xl:contents">
          <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li class="p-1 logo">
              <a
                target="blink"
                href="https://www.facebook.com/blissclothingbangladesh"
                class="inline-block rounded-full bg-black  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <FaFacebookF></FaFacebookF>
              </a>
            </li>
            <li class="p-1 logo">
              <a
                target="blink"
                href="https://www.instagram.com/blissclothingbd/"
                class="inline-block rounded-full bg-black  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <FaInstagram></FaInstagram>
              </a>
            </li>
            <li class="p-1 logo">
              <a
                target="blink"
                href="https://www.tiktok.com/@blissbd"
                class="inline-block rounded-full bg-black  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <FaTiktok></FaTiktok>
              </a>
            </li>
          </ul>
        </nav>
        <div class="border-l hidden lg:flex items-center px-4 lg:px-6 xl:px-8">
          {user?.uid ?
            <>
          <ul class="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li class="p-1 mx-4 ">
              <Link
                class="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <CgProfile></CgProfile>
              </Link>
                <p className="text-xs">Dashboard Profile</p>
            </li>
            <li onClick={handleSignOut} class="p-1 ">
              <Link
              
                class="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <GoSignOut className="text-center"></GoSignOut>
              </Link>
                <p className="text-xs">Sign Out</p>
            </li>
          </ul>
            </>
           : 
            <Link to="/signin">
              <button class="bg-black hover:text-lime-300 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
                Sign in
              </button>
            </Link>
          }
        </div>
      </header>
      {/* <!-- mobile nav menu start --> */}
      <div
        className={hasStyle ? " inline fixed z-50 bg-white top-0 left-0 w-full h-screen" : "hidden"}
      >
        <div>
          <ul id="menu-mobile-1" class="menu ml-0 lg:ml-2">
            <div className=" h-20 lg:px-2 shadow-md  flex items-center justify-between">
              <Link to="/" onClick={handleCloseMenu}>
                <img
                  class="w-36 my-4 px-4 mx-2 lg:mx-8"
                  src="https://i.ibb.co/tqgmVWj/logo.png"
                  alt=""
                />
              </Link>
              <nav class="mt-2">
                <ul class="flex items-center">
                  <li class="">
                    <a
                      target="blink"
                      href="https://www.facebook.com/blissclothingbangladesh"
                      class="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <FaFacebookF></FaFacebookF>
                    </a>
                  </li>
                  <li class="p-1">
                    <a
                      target="blink"
                      href="https://www.instagram.com/blissclothingbd/"
                      class="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                  <li class="">
                    <a
                      target="blink"
                      href="https://www.tiktok.com/@blissbd"
                      class="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <FaTiktok></FaTiktok>
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="lg:hidden mx-8 pt-2">
                <button class="text-2xl mx-1 mt-1" onClick={handleCloseMenu}>
                  <RxCrossCircled></RxCrossCircled>
                </button>
              </div>
            </div>
            {menu}
            {user?.uid ?
            <>
            <li className="menuItems p-3 xl:p-6">
              <Link to="/shopwomen" title="women" onClick={handleCloseMenu}>
                <span>Women</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li class="menuItems p-3 xl:p-6">
              <Link
              >
              <span>Dashboard Profile</span>
              <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li onClick={handleSignOut} class="menuItems p-3 xl:p-6">
              <Link
              onClick={handleCloseMenu}
              >
              <span> Sign Out </span>
              <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            </>
           : 
           <li  class="menuItems p-3 xl:p-6" onClick={handleCloseMenu}>
           <Link
           to='/signin'
           >
           <span> Sign In </span>
           <svg viewBox="0 0 13 20">
               <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
             </svg>
           </Link>
         </li>
          }
          </ul>
        </div>
      </div>
      {/* <!-- mobile nav menu end --> */}
    </div>
  );
};

export default Navber;
