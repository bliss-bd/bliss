import React from "react";
import Banner from "../Banner/Banner";
import BlissQuote from "../BlissQuote/BlissQuote";
import Discount from "../Discount/Discount";
import NewDrops from "../NewDrops/NewDrops";
import ShopPreview from "../ShopPreview/ShopPreview";
import AdvertiseProducts from "../ShowProducts/AdvertiseProducts";
import ShowMenProducts from "../ShowProducts/ShowMenProducts";
import ShowWomenProducts from "../ShowProducts/ShowWomenProducts";
import TopsellProducts from "../ShowProducts/TopsellProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertiseProducts></AdvertiseProducts>
      <TopsellProducts></TopsellProducts>
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
