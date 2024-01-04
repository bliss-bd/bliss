import { Button } from "../../../Button/Button";
import { useQuery } from "@tanstack/react-query";
import NewDrop from "../NewDrop/NewDrop";
import { Link } from "react-router-dom";
import LoaderCard2 from "../../../Components/LoaderCard/LoaderCard2";

const NewDrops = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoaderCard2></LoaderCard2>;
  }
  return (
    <div className="mb-8">
      <section>
        <div className=" lg:mx-14 mx-6 pb-8 sm:px-6 sm:pb-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl lg:my-20 my-8  font-bold text-gray-900 sm:text-4xl"></h2>
          </header>
          <div className="grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {products?.slice(0, 10).map((products, index) => (
              <NewDrop products={products} key={index}></NewDrop>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewDrops;
