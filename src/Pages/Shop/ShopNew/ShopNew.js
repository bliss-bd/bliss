import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../../Home/NewDrop/NewDrop";

const ShopNew = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
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
          Shop New
        </h2>
      </header>

      <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:mx-14 mx-6 py-6 sm:px-6 sm:py-8 lg:px-8">
        {products?.map((products) => (
          <NewDrop products={products} key={products._id}></NewDrop>
        ))}
      </div>
    </div>
  );
};
export default ShopNew;
