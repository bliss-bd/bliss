import React from "react";
import "../../Shared/Navber/Navber.css";
import bliss from "../../../assets/Bliss LOGO- Ontor[1].png";
import "./BannerName.css";

const BannerName = () => (
  <div>
    <div className=" mb-6 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
        </div>
        <div className="">
          <img src={bliss} alt="Bliss logo" className="max-w-lg w-2/4 mx-auto object-contain"></img>
        </div>
        <p className="txt bliss font-bold md:text-6xl text-3xl mx-0 py-1 cursor-default">
          BE BOLD BE BLISS
        </p>
      </div>
    </div>
  </div>
);

export default BannerName;
