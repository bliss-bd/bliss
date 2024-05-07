import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const AdvertiseProduct = ({ products }) => {
  const { picture1,  _id,name,price } = products;
  console.log(products)


  return (
    <div className="p-0">
      <Link to={`/product/${_id}`} className="block overflow-hidden group">
        <div className="absolute inset-0 flex justify-center items-center content-end z-10">
            <div className="custom-font3 text-[#a6adbb] text-lg md:text-6xl">{name}</div>
        </div>
        <div className="absolute inset-0 flex justify-start items-end content-end z-10">
            <div className="custom-font2 bg-[#1b1b1b] text-start p-2 md:p-4 rounded-tr text-white uppercase flex text-xs font-extrabold md:text-xl">Price : <TbCurrencyTaka></TbCurrencyTaka > {price} Taka</div>
        </div>
        <img
          src={picture1}
          alt=""
          className="h-[310px] w-full object-cover transition duration-500 group-hover:scale-125 md:h-[300px] lg:h-[480px] xl:h-[720px]"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default AdvertiseProduct;
