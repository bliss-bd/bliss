import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../../Home/NewDrop/NewDrop";

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
    return <LoaderCard></LoaderCard>;
  }
  return (
    <div className="mb-8">
      <ScrollToTopOnMount />
      <header className="text-center">
        <h2 className="text-4xl font-bold my-0 text-gray-900 py-8 pt-12 from-[honeydew] bg-gradient-to-b bg-opacity-75 uppercase">
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
