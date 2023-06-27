import React from "react";
import Banner from "../Banner/Banner";
import BlissQuote from "../BlissQuote/BlissQuote";
import Discount from "../Discount/Discount";
import NewDrops from "../NewDrops/NewDrops";
import ShopPreview from "../ShopPreview/ShopPreview";
import ShowMenProducts from "../ShowProducts/ShowMenProducts";
import ShowWomenProducts from "../ShowProducts/ShowWomenProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <NewDrops></NewDrops>
      <ShopPreview></ShopPreview>
      <ShowMenProducts></ShowMenProducts>
      <ShowWomenProducts></ShowWomenProducts>
      <BlissQuote></BlissQuote>
      <Discount></Discount>
    </div>
  );
};

export default Home;
