import React from "react";
import { FaPinterestP } from "react-icons/fa";
import blissLogo from "../../../assets/Bliss LOGO- Ontor[2].png";
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div className="mt-[75px] border-t border-solid border-black">
        <div className="flex flex-col mx-auto  h-auto">
          <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-[45px]  lg:py-0  w-full h-auto lg:h-[380px] bg-white">
            <div className="lg:w-4/12 bg-bl bg-black h-full lg:pt-24 md:pt-16 py-12">
              <div className="">
                <img
                  src={blissLogo}
                  alt="Bliss logo"
                  className="max-w-lg w-1/5 mx-auto object-contain"
                ></img>
              </div>
              <div className="text-center text-white py-3 hover:underline cursor-pointer">
                info@bliss.com
              </div>
            </div>

            <div className="flex justify-center lg:gap-44 gap-16 md:gap-24 flex-wrap lg:flex-nowrap  lg:w-7/12">
              <div className="text-center sm:text-left">
                <div className="mb-[18px] text-gray-500 text-sm font-bold select-none">SHOP</div>

                <ul className="flex flex-col gap-[10px] text-gray-600">
                  <a className="hover:underline" href="#">
                    <li>New</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Men</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Women</li>
                  </a>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <div className="mb-[18px] text-gray-500 text-sm font-bold select-none">Company</div>

                <ul className="flex flex-col gap-[10px] text-gray-600">
                  <a className="hover:underline" href="#">
                    <li>About us</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Subscribe</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>FAQ</li>
                  </a>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <div className="mb-[18px] text-gray-500 text-sm font-bold select-none">Legal</div>

                <ul className="flex flex-col gap-[10px] text-gray-600">
                  <a className="hover:underline" href="#">
                    <li>Store policy </li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Shipping & Returns</li>
                  </a>
                  <a className="hover:underline" href="#">
                    <li>Payment Methods </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col sm:flex-row w-full h-[100px] bg-gray-200  gap-y-[45px] lg:py-0 ">
            <ul className="flex justify-center gap-7 text-gray-black cursor-pointer w-full lg:w-2/4 bg-white py-5 md:py-9 lg:py-9">
              <a target="blink" href="https://www.facebook.com/blissclothingbangladesh">
                <TfiFacebook className="w-6 h-8"></TfiFacebook>
              </a>
              <a target="blink" href="https://www.instagram.com/blissclothingbd/">
                <BsInstagram className="w-6 h-8 text-center"></BsInstagram>
              </a>
              <span>
                <ImYoutube className="w-6 h-8"></ImYoutube>
              </span>
              <span>
                <FaPinterestP className="w-6 h-8"></FaPinterestP>
              </span>
              <span>
                <BsTiktok className="w-6 h-8"></BsTiktok>
              </span>
            </ul>
            <div className="text-gray-600 w-full bg-gray-200 pb-5 lg:pb-0">
              {" "}
              © Copyright 2023 Bliss. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
