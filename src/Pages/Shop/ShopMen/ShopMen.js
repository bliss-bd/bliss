import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import NewDrop from "../../Home/NewDrop/NewDrop";
import LoaderCard2 from "../../../Components/LoaderCard/LoaderCard2";
import "../../Shared/Navber/Navber.css"


const ShopMen = () => {
  const { data: productMen, isLoading } = useQuery({
    queryKey: ["productMen"],
    queryFn: async () => {
      const res = await fetch("https://bliss-bd.vercel.app/productMen?category=men&category=both");
      const data = await res.json();
      return data;
    },
  });
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }
  if (isLoading) {
    return <LoaderCard2></LoaderCard2>;
  }

  return (
    <div className="pb-8 bg-[#1b1b1b]" >
      <ScrollToTopOnMount />
      <header className="custom-font text-center  text-white py-8 pt-12 from-[#a6adbb] bg-gradient-to-b bg-opacity-75">
        <h2 className="text-4xl  md:mt-32 mt-20 font-bold my-0 uppercase">
          Shop Men
        </h2>
      </header>

      <div className="grid gap-2 lg:gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 py-6 sm:px-2 sm:py-8 lg:px-2">
        {productMen?.map((productMen,index) => (
          <NewDrop products={productMen} key={index}></NewDrop>
        ))}
      </div>
    </div>
  );
};

export default ShopMen;
