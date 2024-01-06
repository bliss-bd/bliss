import React from "react";
import { Link } from "react-router-dom";
const AdvertiseProduct = ({ products }) => {
  const { picture1,  _id } = products;


  return (
    <div className="md:p-8 lg:p-8 p-0">
      <Link to={`/product/${_id}`} className="block overflow-hidden group">
        <img
          src={picture1}
          alt=""
          className="h-[300px] w-full object-cover transition rounded-sm duration-500 group-hover:scale-125 md:h-[300px] lg:h-[440px] xl:h-[560px]"
          loading="lazy"
        />

        <div className="relative pt-3 bg-white">
        </div>
      </Link>
    </div>
  );
};

export default AdvertiseProduct;
