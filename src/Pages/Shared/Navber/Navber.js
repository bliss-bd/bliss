import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import { userContext } from "../../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import logo1 from "../../../assets/Bliss LOGO- Ontor[1].png";
const Navber = () => {
  const { user, logout } = useContext(userContext);
  const [hasStyle, setHasStyle] = useState(false);
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


  const [currentUser, setCurrentUser] = useState([]);

  // console.log( currentUser, currentUser?.role);

  useEffect(() => {
    fetch(`https://bliss-server-y2j1.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setCurrentUser(data)
      })
  }, [user?.email])


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
        <Link to="/shopmen" title="men" onClick={handleCloseMenu}>
          <span>Men</span>
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

    </>
  );

  return (
    <div className="">
      <header className=" bg-white shadow-md h-20 md:flex">
        <div className=" h-20 lg:px-2 border-r flex w-full md:w-full lg:w-36 items-center justify-between">
          <Link to="/">
            <img className="lg:w-36 w-32 lg:my-1 my-4 px-4 mx-0 lg:mx-0" src={logo1} alt="" />
          </Link>
          <nav className="mt-3 lg:hidden inline-block ">
            <ul className="flex items-center">
              <li className="">
                <a
                  target="blink"
                  href="https://www.facebook.com/blissclothingbangladesh"
                  className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                >
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
              <li className="p-1">
                <a
                  target="blink"
                  href="https://www.instagram.com/blissclothingbd/"
                  className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                >
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li className="">
                <a
                  target="blink"
                  href="https://www.tiktok.com/@blissbd"
                  className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                >
                  <FaTiktok></FaTiktok>
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:hidden mx-8 pt-2">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={handleOpenMenu}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
        <nav className="header-links hidden lg:contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
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
        <nav className="hidden lg:contents">
          <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
            <li className="p-1 logo">
              <a
                target="blink"
                href="https://www.facebook.com/blissclothingbangladesh"
                className="inline-block rounded-full bg-black  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <FaFacebookF></FaFacebookF>
              </a>
            </li>
            <li className="p-1 logo">
              <a
                target="blink"
                href="https://www.instagram.com/blissclothingbd/"
                className="inline-block rounded-full bg-black  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <FaInstagram></FaInstagram>
              </a>
            </li>
            <li className="p-1 logo">
              <a
                target="blink"
                href="https://www.tiktok.com/@blissbd"
                className="inline-block rounded-full bg-black  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
              >
                <FaTiktok></FaTiktok>
              </a>
            </li>
          </ul>
        </nav>
        <div className="border-l hidden lg:flex items-center px-4 lg:px-6 xl:px-8">
          {user?.uid ? (
            <>
              <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
                {currentUser?.role === "Admin"
                  ?
                  <li className="p-1 mx-4 ">
                    <Link
                      to="/dashboard"
                      className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <CgProfile></CgProfile>
                    </Link>
                    <p className="text-xs">Dashboard Profile</p>
                  </li>
                  :
                  <li className="p-1 mx-4 ">
                    <Link
                      to="/cart"
                      className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <CiShoppingCart></CiShoppingCart>
                    </Link>
                    <p className="text-xs">Cart</p>
                  </li>
                }

                <li onClick={handleSignOut} className="p-1 ">
                  <Link className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 ">
                    <GoSignOut className="text-center"></GoSignOut>
                  </Link>
                  <p className="text-xs">Sign Out</p>
                </li>
              </ul>
            </>
          ) : (
            <>
              <li className="p-1 mt-2 mx-4 list-none">
                <Link
                  to="/cart"
                  className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                >
                  <CiShoppingCart></CiShoppingCart>
                </Link>
                {/* <p className="text-xs">Cart</p> */}
              </li>
              <Link to="/signin">
                <button className="bg-black hover:text-[#98EECC] text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>
      </header>
      {/* <!-- mobile nav menu start --> */}
      <div
        className={hasStyle ? " inline fixed z-50 bg-white top-0 left-0 w-full h-screen" : "hidden"}
      >
        <div>
          <ul id="menu-mobile-1" className="menu ml-0 lg:ml-2">
            <div className=" h-20 lg:px-2 shadow-md  flex items-center justify-between">
              <Link to="/" onClick={handleCloseMenu}>
                <img className="w-32 my-4 px-4 mx-0 lg:mx-8" src={logo1} alt="" />
              </Link>
              <nav className="mt-2">
                <ul className="flex items-center">
                  <li className="">
                    <a
                      target="blink"
                      href="https://www.facebook.com/blissclothingbangladesh"
                      className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <FaFacebookF></FaFacebookF>
                    </a>
                  </li>
                  <li className="p-1">
                    <a
                      target="blink"
                      href="https://www.instagram.com/blissclothingbd/"
                      className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                  <li className="">
                    <a
                      target="blink"
                      href="https://www.tiktok.com/@blissbd"
                      className="inline-block rounded-full  border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <FaTiktok></FaTiktok>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="lg:hidden mx-8 pt-2">
                <button className="text-2xl mx-1 mt-1" onClick={handleCloseMenu}>
                  <RxCrossCircled></RxCrossCircled>
                </button>
              </div>
            </div>
            {menu}
            {user?.uid ? (
              <>
                {currentUser?.role === "Admin"
                  ?
                  <li className="menuItems p-3 xl:p-6">
                    <Link to="/dashboard" onClick={handleCloseMenu}>
                      <span>Dashboard Profile</span>
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </Link>
                  </li>
                  :
                  <li className="menuItems p-3 xl:p-6">
                    <Link to="/cart" onClick={handleCloseMenu}>
                      <span>Cart</span>
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </Link>
                  </li>}
                <li onClick={handleSignOut} className="menuItems p-3 xl:p-6">
                  <Link onClick={handleCloseMenu}>
                    <span> Sign Out </span>
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="menuItems p-3 xl:p-6">
                  <Link to="/cart" onClick={handleCloseMenu}>
                    <span>Cart</span>
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </li>
                <li className="menuItems p-3 xl:p-6" onClick={handleCloseMenu}>
                  <Link to="/signin">
                    <span> Sign In </span>
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <!-- mobile nav menu end --> */}
    </div>
  );
};

export default Navber;
