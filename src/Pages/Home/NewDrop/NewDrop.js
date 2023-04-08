import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const NewDrop = ({ products }) => {
  const { name, picture, price } = products;

  return (
    <div>
      <a href="#" className="block overflow-hidden group">
        <img
          src={picture}
          alt=""
          className="h-[350px] w-full object-cover transition duration-300 group-hover:scale-125 sm:h-[450px]"
        />

        <div className="relative pt-3 bg-white">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900 justify-center flex items-center">
              <TbCurrencyTaka></TbCurrencyTaka> {price} TAKA
            </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default NewDrop;
