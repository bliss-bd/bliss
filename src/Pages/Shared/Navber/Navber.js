import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { userContext } from "../../../Contexts/UserContexts/UserContexts";
import { toast } from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoBagCheck } from "react-icons/io5";

import logo1 from "../../../assets/Bliss LOGO- Ontor[2].png";
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

  useEffect(() => {
    fetch(`https://bliss-bd.vercel.app/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setCurrentUser(data)
      })
  }, [user?.email])

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={` custom-font2 fixed w-full top-0 z-50 transition duration-500 ease-in-out ${scrolled ? 'bg-[#1b1b1b] py-0 transition duration-500 ease-in-out' : 'bg-gradient-to-t from-[#00000000] to-[#1a1a1ad0] py-5 transition duration-500 ease-in-out'}`}>
      <div className="flex justify-between items-center w-full" >

        <nav className="mx-5 hidden lg:flex">
          <ul className="flex items-center">
            <li className="text-white">
              <a
                target="blink"
                href="https://www.facebook.com/blissclothingbangladesh"
                className="inline-block  p-2 hover:shadow-lg duration-200 hover:-translate-y-0.5 "
              >
                <FaFacebookF></FaFacebookF>
              </a>
            </li>
            <li className="p-1 text-white">
              <a
                target="blink"
                href="https://www.instagram.com/blissclothingbd/"
                className="inline-block p-2 hover:shadow-lg  duration-200 hover:-translate-y-0.5 "
              >
                <FaInstagram></FaInstagram>
              </a>
            </li>
            <li className="text-white">
              <a
                target="blink"
                href="https://www.tiktok.com/@blissbd"
                className="inline-block  p-2 hover:shadow-lg duration-200 hover:-translate-y-0.5 "
              >
                <FaTiktok></FaTiktok>
              </a>
            </li>
          </ul>
        </nav>
        <div className={`w-12 font-bold transition duration-1000 ease-in-out items-center ${scrolled ? 'w-8 mt-4 transition duration-500 ease-in-out' : 'w-12 transition duration-500 ease-in-out'}`}>
          <Link to="/">
            <img className="w-12 lg:pb-0 pb-5 ml-7 lg:ml-0" src={logo1} loading="lazy" alt="" />
          </Link>
        </div>
        <div className=" flex items-center px-4 lg:px-6 xl:px-8">
          {user?.uid ? (
            <>
              <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
                {currentUser?.role === "Admin"
                  ?
                  <li className="p-1 mx-4 ">
                    <Link to="/dashboard" className="lg:inline-block hidden rounded-full  duration-200 hover:-translate-y-0.5 ">
                      <CgProfile className="text-white text-2xl"></CgProfile>
                    </Link>
                  </li>
                  :
                  <li className="p-1 mt-2 mx-4 list-none">
                    <Link
                      to="/cart"
                      className="text-white inline-block hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                    >
                      <IoBagCheck className="text-2xl" />
                    </Link>
                  </li>
                }

                <li onClick={handleSignOut} className="p-1 mt-[6px]">
                  <Link className="lg:inline-block hidden rounded-full  duration-200 hover:-translate-y-0.5 ">
                    <GoSignOut className="text-center text-white text-2xl"></GoSignOut>
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <li className="p-1 mt-2 mx-4 list-none">
                <Link
                  to="/cart"
                  className="text-white inline-block hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5 "
                >
                  <IoBagCheck className="text-2xl" />
                </Link>
              </li>
              <Link to="/signin" className="lg:inline-block hidden">
                <button className=" hover:text-[#98EECC] text-white font-bold  rounded">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      <header className=" flex justify-center items-center">

        <div className="flex w-full md:w-full items-center justify-end lg:hidden ">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className={`transition duration-200 rounded focus:outline-none focus:shadow-outline ${scrolled ? ' p-2 -mt-[4.5rem] transition duration-500 ease-in-out' : ' -mt-20 p-2 '}`}
            onClick={handleOpenMenu}


          >
            <svg className="w-5 text-white" viewBox="0 0 24 24">
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
        <nav className="header-links hidden lg:contents font-semibold text-base lg:text-lg">
          <ul className="flex items-center">
            <li className="menuItems px-4 pb-4  pt-2  ">
              <Link to="/" title="men" onClick={handleCloseMenu}>
                <span className={`text-white uppercase transition duration-1000 ease-in-out ${scrolled ? ' text-sm transition duration-500 ease-in-out' : ' text-lg transition duration-500 ease-in-out'}`}>Home</span>

              </Link>
            </li>
            <li className="menuItems px-4 pb-4  pt-2 ">
              <Link to="/shopnew" title="new" onClick={handleCloseMenu}>
                <span className={`text-white uppercase transition duration-1000 ease-in-out ${scrolled ? ' text-sm transition duration-500 ease-in-out' : ' text-lg transition duration-500 ease-in-out'}`}>New</span>

              </Link>
            </li>
            <li className="menuItems px-4 pb-4   pt-2 ">
              <Link to="/shopmen" title="men" onClick={handleCloseMenu}>
                <span className={`text-white uppercase transition duration-1000 ease-in-out ${scrolled ? ' text-sm transition duration-500 ease-in-out' : ' text-lg transition duration-500 ease-in-out'}`}>Men</span>

              </Link>
            </li>
            <li className="menuItems px-4 pb-4  pt-2 ">
              <Link to="/shopwomen" title="women" onClick={handleCloseMenu}>
                <span className={`text-white uppercase transition duration-1000 ease-in-out ${scrolled ? ' text-sm transition duration-500 ease-in-out' : ' text-lg transition duration-500 ease-in-out'}`}>Women</span>

              </Link>
            </li>
            <li className="menuItems px-4 pb-4  pt-2 ">
              <Link to="/shopkids" title="kids" onClick={handleCloseMenu}>
                <span className={`text-white uppercase transition duration-1000 ease-in-out ${scrolled ? ' text-sm transition duration-500 ease-in-out' : ' text-lg transition duration-500 ease-in-out'}`}>kids</span>

              </Link>
            </li>
            <li className="menuItems px-4 pb-4 pt-2 ">
              <Link to="/shopspecialitems" title="SPECIAL ITEMS" onClick={handleCloseMenu}>
                <span className={`text-white uppercase transition duration-1000 ease-in-out ${scrolled ? ' text-sm transition duration-500 ease-in-out' : ' text-lg transition duration-500 ease-in-out'}`}>SPECIAL</span>

              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* <nav  className="bg-gray-100 fixed w-full top-0 z-50 transition duration-400">
      <div className="text-4xl font-bold transition duration-400">
        Logo
      </div>
      <div  className="hidden md:block">
        <a href="#" className="text-black hover:bg-gray-300 py-3 px-4 rounded-lg">Home</a>
        <a href="#" className="text-black hover:bg-gray-300 py-3 px-4 rounded-lg">About</a>
        <a href="#" className="text-black hover:bg-gray-300 py-3 px-4 rounded-lg">Services</a>
        <a href="#" className="text-black hover:bg-gray-300 py-3 px-4 rounded-lg">Contact</a>
      </div>
    </nav> */}
      {/* <!-- mobile nav menu start --> */}
      <div
        className={hasStyle ? " bg-[#1b1b1b] inline fixed z-50  top-0 left-0 w-full h-screen" : "hidden"}
      >
        <div>
          <ul id="menu-mobile-1" className="menu ml-0 lg:ml-2">
            <div className=" h-20 lg:px-2 shadow-md  flex items-center justify-between">
              <div className="w-8 mt-4 font-bold transition duration-1000 ease-in-out items-center">
                <Link to="/">
                  <img className="w-12 lg:pb-0 pb-5 ml-7 lg:ml-0" src={logo1} loading="lazy" alt="" />
                </Link>
              </div>

              <div className="lg:hidden mx-2 pt-2 flex items-center">
                <nav className="mr-4">
                  <ul className="flex items-center">
                    <li className="text-white">
                      <a
                        target="blink"
                        href="https://www.facebook.com/blissclothingbangladesh"
                        className="inline-block  p-2 hover:shadow-lg duration-200 hover:-translate-y-0.5 "
                      >
                        <FaFacebookF></FaFacebookF>
                      </a>
                    </li>
                    <li className="p-1 text-white">
                      <a
                        target="blink"
                        href="https://www.instagram.com/blissclothingbd/"
                        className="inline-block p-2 hover:shadow-lg  duration-200 hover:-translate-y-0.5 "
                      >
                        <FaInstagram></FaInstagram>
                      </a>
                    </li>
                    <li className="text-white">
                      <a
                        target="blink"
                        href="https://www.tiktok.com/@blissbd"
                        className="inline-block  p-2 hover:shadow-lg duration-200 hover:-translate-y-0.5 "
                      >
                        <FaTiktok></FaTiktok>
                      </a>
                    </li>
                  </ul>
                </nav>
                <button className="text-2xl mx-1 mt-1" onClick={handleCloseMenu}>
                  <RxCrossCircled></RxCrossCircled>
                </button>
              </div>
            </div>
            <li className="menuItems p-3 xl:p-6">
              <Link to="/shopnew" title="new" onClick={handleCloseMenu}>
                <span className=" text-white tracking-wider  font-bold" >New</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6  ">
              <Link to="/shopmen" title="men" onClick={handleCloseMenu}>
                <span className=" text-white tracking-wider font-bold">Men</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6 s">
              <Link to="/shopwomen" title="women" onClick={handleCloseMenu}>
                <span className=" text-white tracking-wider font-bold">Women</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6 s">
              <Link to="/special" title="kids" onClick={handleCloseMenu}>
                <span className=" text-white tracking-wider font-bold">Kids</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6 s">
              <Link to="/special" title="special" onClick={handleCloseMenu}>
                <span className=" text-white tracking-wider font-bold">Special Items</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>

            {user?.uid ? (
              <>
                {currentUser?.role === "Admin"
                  ?
                  <li className="menuItems p-3 xl:p-6">
                    <Link to="/dashboard" onClick={handleCloseMenu}>
                      <span className="text-white tracking-wider font-bold">Dashboard</span>
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </Link>
                  </li>
                  :
                  <li className="menuItems p-3 xl:p-6">
                    <Link to="/cart" onClick={handleCloseMenu}>
                      <span className="text-white tracking-wider font-bold">Cart</span>
                      <svg viewBox="0 0 13 20">
                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                      </svg>
                    </Link>
                  </li>}
                <li onClick={handleSignOut} className="menuItems p-3 xl:p-6">
                  <Link onClick={handleCloseMenu}>
                    <span className="text-white tracking-wider font-bold"> Sign Out </span>
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
                    <span className="text-white tracking-wider font-bold">Cart</span>
                    <svg viewBox="0 0 13 20">
                      <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                    </svg>
                  </Link>
                </li>
                <li className="menuItems p-3 xl:p-6" onClick={handleCloseMenu}>
                  <Link to="/signin">
                    <span className="text-white tracking-wider font-bold"> Sign In </span>
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
