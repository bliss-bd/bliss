import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../../Home/NewDrop/NewDrop";

const ShopWomen = () => {
  const { data: productWomen, isLoading } = useQuery({
    queryKey: ["productWomen"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/productWomen?category=women&category=both");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoaderCard></LoaderCard>;
  }

  return (
    <div className="mb-8">
      <header className="text-center">
        <h2 className="text-4xl lg:text-7xl font-bold lg:mb-4 my-0 text-gray-900 py-8 lg:py-16 from-[#98EECC] bg-gradient-to-b bg-opacity-75">
          Shop Women
        </h2>
      </header>

      <div className="grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:mx-14 mx-6 py-6 sm:px-6 sm:py-8 lg:px-8">
        {productWomen?.map((productWomen, index) => (
          <NewDrop products={productWomen} key={index}></NewDrop>
        ))}
      </div>
    </div>
  );
};

export default ShopWomen;
