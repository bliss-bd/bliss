import React from "react";
import "./Men.css"
import { Link } from "react-router-dom";

const Man = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <section className="relative bg-[url(https://i.ibb.co/M5WK999/pc.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-transparent from-black/50 to-transparent bg-gradient-to-t"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 pt-72 sm:px-6 lg:flex lg:flex-col lg:justify-between lg:h-screen lg:items-center lg:px-8">
          <div className="w-full"></div>
          <div className="max-w-xl text-center mx-auto ltr:sm:text-left rtl:sm:text-right lg:my-24 my-0">
            <h1 className="text-xl font-extrabold sm:text-3xl">
              <strong className="block font-extrabold text-heading custom-font3">
                For You
              </strong>
            </h1>
            <p className="uppercase lg:mt-4 md:mt-4 mt-2 max-w-lg sm:text-xl/relaxed md:text-3xl text-xl text-white  text-p">
            Spring-Summer {year} All Collection
            </p>

            <div className="md:mt-8 lg:mt-8 mt-2 flex flex-wrap justify-center text-center">
              <Link to='/shopwomen'
                href="#"
                className="uppercase block lg:w-auto md:w-full w-40 mb-4 rounded-full lg:px-8 md:px-8 px-4 text-center button-discover lg:py-3 md:py-3 py-2 md:text-sm text-xs text-white border font-medium sm:w-auto"
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
