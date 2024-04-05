import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import ShopPreview from "../ShopPreview/ShopPreview";
import Men from "../Category/Men";
import AllCategory from "../Category/AllCategory";
import AdvertiseProducts from "../ShowProducts/AdvertiseProducts";
import ShowTopSellProducts from "../ShowProducts/ShowTopSellProducts";
import ShowMenProducts from "../ShowProducts/ShowMenProducts";
import Women from "../Category/Women";
import Instagram from "../Instagram/Instagram";
import Discount from "../Discount/Discount";

const Home = () => {
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div>
      <ScrollToTopOnMount />
      <Banner></Banner>
      <AllCategory></AllCategory>
      <ShopPreview></ShopPreview>
      <AdvertiseProducts></AdvertiseProducts>
      <ShowMenProducts></ShowMenProducts>
      <ShowTopSellProducts></ShowTopSellProducts>
      <Women></Women>
      <Instagram></Instagram>
      <Discount></Discount>
      {/* <Men></Men> */}
    </div>
  );
};

export default Home;
