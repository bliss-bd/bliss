import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

const Navber = () => {
  const menu = (
    <>
      <li className="rounded-none">
        <Link
          to="/shopnew"
          title="New Products"
          className="lg:px-20 px-12 py-6 hover:bg-gray-900  hover:text-lime-400 lg:border-r border-solid border-slate-900 text-md transition duration-300 "
        >
          New
        </Link>
      </li>
      <li className="rounded-none">
        <Link
          to="/shopwomen"
          title="women"
          className="lg:px-20 px-12 py-6 hover:bg-gray-900  hover:text-lime-400 lg:border-r border-solid border-slate-900 text-md transition duration-300 "
        >
          Women
        </Link>
      </li>
      <li class="p-3 xl:p-6">
        <a href="">
          <span>Projects</span>
        </a>
      </li>
    </>
  );

  return (
    <div className="">
      <header class=" bg-white shadow-md h-20 hidden md:flex">
        <div className="logo h-20 px-2 border-r flex items-center justify-center ">
          <Link to="/">
            <img class="w-36 my-4 px-4 mx-8" src="https://i.ibb.co/tqgmVWj/logo.png" alt="" />
          </Link>
        </div>
        <nav class="header-links contents font-semibold text-base lg:text-lg">
          <ul class="flex items-center ml-4 xl:ml-8 mr-auto">
            <li className="menuItems p-3 xl:p-6">
              <Link to="/" title="men">
                <span>Home</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6">
              <Link to="/shopnew" title="new">
                <span>New</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6">
              <Link to="/shopwomen" title="women">
                <span>Women</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
            <li className="menuItems p-3 xl:p-6">
              <Link to="/shopmen" title="men">
                <span>Men</span>
                <svg viewBox="0 0 13 20">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                </svg>
              </Link>
            </li>
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
        <div class="border flex items-center px-4 lg:px-6 xl:px-8">
          <button class="bg-black hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
            Contact Me
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navber;
