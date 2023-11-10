import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import BlissQuote from "../BlissQuote/BlissQuote";
import Discount from "../Discount/Discount";
import NewDrops from "../NewDrops/NewDrops";
import ShopPreview from "../ShopPreview/ShopPreview";
import AdvertiseProducts from "../ShowProducts/AdvertiseProducts";
import ShowMenProducts from "../ShowProducts/ShowMenProducts";
import ShowWomenProducts from "../ShowProducts/ShowWomenProducts";
import TopsellProducts from "../ShowProducts/TopsellProducts";
import Models from "../Models/Models";
import Category from "../Category/Category";

const Home = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
  return (
    <div>
      <ScrollToTopOnMount/>
      <Banner></Banner>
      <AdvertiseProducts></AdvertiseProducts>
      <TopsellProducts></TopsellProducts>
      <Category></Category>
      <NewDrops></NewDrops>
      <ShopPreview></ShopPreview>
      <Models></Models>
      <ShowMenProducts></ShowMenProducts>
      <ShowWomenProducts></ShowWomenProducts>
      <BlissQuote></BlissQuote>
      <Discount></Discount>
    </div>
  );
};

export default Home;
