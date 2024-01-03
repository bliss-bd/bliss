import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const AdvertiseProduct = ({ products }) => {
  const { name, picture1, price, _id } = products;


  return (
    <div className="p-8">
      <Link to={`/product/${_id}`} className="block overflow-hidden group">
        <img
          src={picture1}
          alt=""
          className="h-[160px] w-full object-cover transition rounded-sm duration-500 group-hover:scale-125 md:h-[300px] lg:h-[440px] xl:h-[560px]"
          loading="lazy"
        />

        <div className="relative pt-3 bg-white">
          {/* <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3> */}
{/* 
          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>
            <span className="tracking-wider text-gray-900 flex items-center">
              <TbCurrencyTaka></TbCurrencyTaka> {price}
            </span>
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default AdvertiseProduct;
