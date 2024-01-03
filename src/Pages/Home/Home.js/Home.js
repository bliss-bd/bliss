import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import ShopPreview from "../ShopPreview/ShopPreview";
import ShowMenProducts from "../ShowProducts/ShowMenProducts";
import ShowWomenProducts from "../ShowProducts/ShowWomenProducts";
import Men from "../Category/Men";
import Women from "../Category/Women";
import AllCategory from "../Category/AllCategory";

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
      <Men></Men>
      <ShopPreview></ShopPreview>
      <Women></Women>
      <ShowMenProducts></ShowMenProducts>

      <span class="relative flex justify-center">
        <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span class="relative z-10 bg-white px-6">BE BOLD BE BLISS</span>
      </span>
      <ShowWomenProducts></ShowWomenProducts>
      <AllCategory></AllCategory>
    </div>
  );
};

export default Home;
