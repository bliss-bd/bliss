import React from "react";

const BannerName = () => (
  <div>
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl leading-none tracking-tight text-lime-400 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative text-7xl font-extrabold text-black">BLISS</span>
          </span>{" "}
        </h2>
        <p className="text-base md:text-lg bg-lime-500 lg:mx-32 py-1">bliss bliss bliss</p>
      </div>
    </div>
  </div>
);

export default BannerName;
