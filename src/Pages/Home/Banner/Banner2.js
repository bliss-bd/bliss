import React from "react";
import men from "../../../assets/men.jpg";
import women from "../../../assets/women.jpg";
import bliss11 from "../../../assets/bliss11.jpg";
import "./Banner.css";
import { GiLobArrow } from "react-icons/gi";
const Banner2 = () => {
  return (
    <div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  pt-6 gap-2">
        <div className="">
          <a href="/" aria-label="View Item">
            <div className="relative ">
              <img className="object-cover w-full height " src={men} alt="" />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 from-lime-300 bg-gradient-to-t bg-opacity-75 opacity-0 hover:opacity-75">
                <p className="mb-4 text-lg font-bold text-justify text-gray-900">SHOP MEN</p>
                <GiLobArrow className="h-12 w-12"></GiLobArrow>
              </div>
            </div>
          </a>
        </div>
        <div className="  lg:col-span-2">
          <a href="/" aria-label="View Item">
            {" "}
            <div className="relative ">
              <img className="object-cover w-full height " src={bliss11} alt="" />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 from-lime-300 bg-gradient-to-t bg-opacity-75 opacity-0 hover:opacity-75">
                {" "}
                <p className="mb-4 text-lg font-bold text-justify text-gray-900">SHOP NEW</p>
                <GiLobArrow className="h-12 w-12"></GiLobArrow>
              </div>
            </div>
          </a>
        </div>
        <div className="">
          <a href="/" aria-label="View Item">
            <div className="relative ">
              <img className="object-cover w-full height " src={women} alt="" />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 from-lime-300 bg-gradient-to-t bg-opacity-75 opacity-0 hover:opacity-75">
                {" "}
                <p className="mb-4 text-lg font-bold text-justify text-gray-900">SHOP WOMEN</p>
                <GiLobArrow className="h-12 w-12"></GiLobArrow>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
