import React from "react";
import Banner from "../Banner/Banner";
import BlissQuote from "../BlissQuote/BlissQuote";
import Discount from "../Discount/Discount";
import NewDrops from "../NewDrops/NewDrops";
import ShopPreview from "../ShopPreview/ShopPreview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NewDrops></NewDrops>
      <ShopPreview></ShopPreview>
      <BlissQuote></BlissQuote>
      <Discount></Discount>
    </div>
  );
};

export default Home;
