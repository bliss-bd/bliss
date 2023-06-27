import React from "react";
import RAF from "../../../assets/RAF.jpg";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Discount = () => {
  return (
    <div>
      <div className=" grid mx-auto lg:grid-cols-3 md:grid-cols-2">
        <div className="lg:col-span-2 md:col-span-1 col-span-1 text-center sm:text-left py-14 lg:pt-64 h-full from-[#98EECC]  bg-gradient-to-t bg-opacity-75 ">
          <BsLightningChargeFill className="text-center mx-auto w-20 h-16 text-black"></BsLightningChargeFill>
          <p className="hidden text-gray-700 text-center text-2xl md:mt-4 md:block">SALE IS ON!</p>
          <h2 className="text-2xl font-bold text-black text-center md:text-9xl">25% OFF</h2>
          <p className="hidden text-gray-700 text-center text-xl md:mt-4 md:block">
            25% off sitewide using TEES25 at checkout
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-1">
          <img
            alt="Violin"
            src={RAF}
            className="md:rounded-tl-[60px] lg:rounded-tl-[60px] h-full"
          />
        </div>
      </div>

      <div className="my-12">
        <h1 className="flex lg:gap-8 mx-1 items-center justify-center text-4xl font-bold text-black underline cursor-pointer">
          <span>
            <FaLongArrowAltRight className="w-16 h-16"></FaLongArrowAltRight>
          </span>
          GET 10% OFF YOUR FIRST ORDER!
          <span>
            <FaLongArrowAltLeft className="w-16 h-16"></FaLongArrowAltLeft>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Discount;
