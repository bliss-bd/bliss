import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import NewDrop from "../../Home/NewDrop/NewDrop";
import LoaderCard2 from "../../../Components/LoaderCard/LoaderCard2";
import "../../Shared/Navber/Navber.css"

const ShopNew = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://bliss-bd.vercel.app/products");
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
        <h2 className="text-4xl md:mt-44 mt-20 font-bold my-0 uppercase">
          Shop New
        </h2>
      </header>

      <div className="grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:mx-14 mx-6 py-6 sm:px-6 sm:py-8 lg:px-8">
        {products?.map((products,index) => (
          <NewDrop products={products} key={index}></NewDrop>
        ))}
      </div>
    </div>
  );
};
export default ShopNew;
