import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import BannerName from "../BannerName/BannerName";

const Home = () => {
  return (
    <div>
      <BannerName></BannerName>
      <div className="lg:hidden">
        <Banner></Banner>
      </div>
      <div className=" lg:inline hidden md:hidden">
        <Banner2></Banner2>
      </div>
    </div>
  );
};

export default Home;
