import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2";
import BannerName from "../BannerName/BannerName";
import BlissQuote from "../BlissQuote/BlissQuote";
import Discount from "../Discount/Discount";
import NewDrops from "../NewDrops/NewDrops";
import ShopPreview from "../ShopPreview/ShopPreview";

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
      <NewDrops></NewDrops>
      <ShopPreview></ShopPreview>
      <BlissQuote></BlissQuote>
      <Discount></Discount>
    </div>
  );
};

export default Home;
