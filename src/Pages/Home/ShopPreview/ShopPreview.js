import React from "react";
import "./ShopPreview.css";
import bliss from "../../../assets/Bliss LOGO- Ontor[2].png";
import Bliss from "../../../assets/Bliss.mov";
const ShopPreview = () => {
  return (
    <div>
      <section className="relative h-[380px] md:h-[640px] lg:h-[820px] flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            src={Bliss}
            className="min-w-full min-h-full absolute object-cover"
            type="video/mov"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-content space-y-2 w-24 lg:w-36 z-10">
          <img src={bliss} />
        </div>
      </section>
    </div>
  );
};

export default ShopPreview;
