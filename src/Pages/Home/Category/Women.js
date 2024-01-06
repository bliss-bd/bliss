import React from "react";
import "./Men.css"
import { Link } from "react-router-dom";

const Man = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <section class="relative bg-[url(https://i.ibb.co/8xW76Qq/pc-2.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent from-black/50 to-transparent bg-gradient-to-t"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 pt-72 sm:px-6 lg:flex lg:flex-col lg:justify-between lg:h-screen lg:items-center lg:px-8">
          <div className="w-full"></div>
          <div class="max-w-xl text-center mx-auto ltr:sm:text-left rtl:sm:text-right lg:my-24 my-0">
            <h1 class="text-xl font-extrabold sm:text-3xl">
              <strong class="block font-extrabold text-heading">
                Women
              </strong>
            </h1>
            <p class="lg:mt-4 md:mt-4 mt-2 max-w-lg sm:text-xl/relaxed md:text-3xl text-xl text-white font-bold">
            Spring-Summer {year} Women-Collection
            </p>

            <div class="md:mt-8 lg:mt-8 mt-2 flex flex-wrap justify-center text-center">
              <Link to='/shopwomen'
                href="#"
                class="block lg:w-auto md:w-full w-40 mb-4 rounded-full lg:px-8 md:px-8 px-4 text-center button-discover lg:py-3 md:py-3 py-2 md:text-sm text-xs text-white border font-medium sm:w-auto"
              >
              Discover the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Man;
