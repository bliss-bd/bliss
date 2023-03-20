import React from "react";
import "../../Shared/Navber/Navber.css";
import bliss from "../../../assets/Bliss LOGO- Ontor[1].png";

const BannerName = () => (
  <div>
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
        </div>
        <img src={bliss} alt="Bliss logo" className="max-w-lg mx-auto"></img>
        <p className="bliss text-base md:text-lg bg-lime-500  lg:mx-32 mx-0 py-1">
          Bliss bliss bliss
        </p>
      </div>
    </div>
  </div>
);

export default BannerName;
