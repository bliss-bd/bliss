import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../../Home/NewDrop/NewDrop";

const ShopWomen = () => {
  const { data: productWomen, isLoading } = useQuery({
    queryKey: ["productWomen"],
    queryFn: async () => {
      const res = await fetch("https://bliss-server-9w8y.vercel.app/productWomen?category=women");
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
        <h2 className="text-4xl lg:text-7xl my-8 lg:my-12 font-bold text-gray-900 py-20 from-lime-300 bg-gradient-to-t bg-opacity-75">
          Shop Women
        </h2>
      </header>

      <div className="grid gap-4 lg:gap-14 grid-cols-2 lg:grid-cols-4 lg:mx-14 mx-6 py-6 sm:px-6 sm:py-8 lg:px-8">
        {productWomen?.map((productWomen) => (
          <NewDrop products={productWomen} key={productWomen._id}></NewDrop>
        ))}
      </div>
    </div>
  );
};

export default ShopWomen;
