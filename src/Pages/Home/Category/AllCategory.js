import React from "react";
import "./Men.css"
import { Link } from "react-router-dom";

const Man = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <section class="relative bg-[url(https://i.ibb.co/M5WK999/pc.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent from-black/50 to-transparent bg-gradient-to-t"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 pt-32 sm:px-6 lg:flex lg:flex-col lg:justify-between lg:h-screen lg:items-center lg:px-8">
          <div className="w-full"></div>
          <div class="max-w-xl text-center mx-auto ltr:sm:text-left rtl:sm:text-right my-24">
            <h1 class="text-xl font-extrabold sm:text-3xl">
              <strong class="block font-extrabold text-heading">
                All
              </strong>
            </h1>
            <p class="mt-4 max-w-lg sm:text-xl/relaxed text-3xl text-white font-bold">
            Spring-Summer {year} All-Collection
            </p>

            <div class="mt-8 flex flex-wrap justify-center text-center">
              <Link
                to='/shopnew'
                class="block w-full  rounded-full px-8 text-center button-discover py-3 text-sm text-white border font-medium sm:w-auto"
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
