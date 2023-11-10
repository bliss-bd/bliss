import React from "react";
import "../../Shared/Navber/Navber.css";
import bliss from "../../../assets/Bliss LOGO- Ontor[1].png";

const BlissQuote = () => {
  return (
    <div className="px-4 mx-auto  md:px-24 lg:px-8 bg-[honeydew]">
      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl ">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
        </div>
        <div className="">
          <img src={bliss} alt="Bliss logo" className="max-w-lg w-2/4 mx-auto object-contain" loading="lazy"></img>
        </div>
        <p className="text-3xl md:text-5xl font-extrabold lg:mx-32 mx-0 py-1">
          COMFORT & <br /> SECURE <br /> ALL TIMES
        </p>
      </div>
    </div>
  );
};

export default BlissQuote;
