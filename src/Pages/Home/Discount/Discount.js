import React from "react";
import "./Discount.css"
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <div className="shop-all-section bg-[#1b1b1b] pb-36 pt-12">
      <div className="mx-8">
        <Link to="/shopnew" className="shop-all-link w-inline-block">
          <h6 className="shop-link z-20 custom-font3 text-[#a6adbb]">Shop all</h6>
          <div className=" shop-image-wrap1 one">
            <img src="https://assets.website-files.com/6391586f7ac2b543ed183772/63a43b6ccbe18f4686da2353_shop-hover01.jpg" loading="eager" alt="" className="shop-image-item z-10" />

          </div>
          <div className="shop-image-wrap2 two ">
            <img src="https://assets.website-files.com/6391586f7ac2b543ed183772/63a444346b5256044653bffd_shop-hover02.jpg" loading="eager" alt="" className="shop-image-item z-10 " />

          </div>
        </Link>
      </div>
    </div>
  );
};

export default Discount;
