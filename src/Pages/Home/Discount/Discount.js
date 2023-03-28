import React from "react";
import RAF from "../../../assets/RAF.jpg";
import { BsLightningChargeFill } from "react-icons/bs";

const Discount = () => {
  return (
    <div className="my-12 grid grid-cols-3 ">
      <div className="col-span-2 text-center sm:text-left pt-64 from-lime-300 h-full  bg-gradient-to-t bg-opacity-75 ">
        <BsLightningChargeFill className="text-center mx-auto w-20 h-16 text-black"></BsLightningChargeFill>
        <p className="hidden text-gray-700 text-center text-2xl md:mt-4 md:block">SALE IS ON!</p>
        <h2 className="text-2xl font-bold text-black text-center md:text-9xl">25% OFF</h2>
        <p className="hidden text-gray-700 text-center text-xl md:mt-4 md:block">
          25% off sitewide using TEES25 at checkout
        </p>
      </div>
      <div>
        <img alt="Violin" src={RAF} className=" md:rounded-tl-[60px]" />
      </div>
    </div>
  );
};

export default Discount;
