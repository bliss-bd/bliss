import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../../Shared/Navber/Navber.css"
const NewDrop = ({ products }) => {
  const { name, picture1, price, _id } = products;


  return (
    <div className="custom-font2 font-bold py-2" >
      <Link to={`/product/${_id}`} className="block overflow-hidden group">
        <img
          src={picture1}
          alt=""
          className="h-[300px] w-full object-cover transition duration-300 group-hover:scale-125 md:h-[300px] lg:h-[340px] xl:h-[550px]"
          loading="lazy"
        />

        <div className="relative pt-3 bg-[#1b1b1b]">
          <h3 className="text-xs text-white group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-white justify-center flex items-center">
              <TbCurrencyTaka></TbCurrencyTaka> {price}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewDrop;
