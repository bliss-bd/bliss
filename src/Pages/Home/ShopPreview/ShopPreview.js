import React from "react";
import "./ShopPreview.css";
import bliss from "../../../assets/Bliss LOGO- Ontor[2].png";
import Bliss from "../../../assets/Bliss.mov";
import Bliss20 from "../../../assets/Bliss20.mp4";
const ShopPreview = () => {
  return (
    <div>
      <section className="relative h-[700px] md:h-[640px] lg:h-[820px] flex flex-col items-center justify-center text-center text-white ">
        <div className="hidden md:inline-block  video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            src={Bliss}
            className="min-w-full min-h-full absolute object-cover"
            type="video/mov"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="lg:hidden md:hdden inline-block video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            src={Bliss20}
            className="min-w-full min-h-full absolute object-cover"
            type="video/mov"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="hidden md:inline-block video-content space-y-2 w-24 lg:w-36 z-10">
          <img src={bliss} loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default ShopPreview;
