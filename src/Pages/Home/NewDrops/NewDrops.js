import { Button } from "../../../Button/Button";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../NewDrop/NewDrop";
import { Link } from "react-router-dom";

const NewDrops = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://bliss-server-y2j1.vercel.app/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoaderCard></LoaderCard>;
  }
  return (
    <div className="mb-8 bg-[url('/src/assets/Bliss LOGO- Ontor[1].png')]">
      <section>
        <div className=" lg:mx-14 mx-6 pb-8 sm:px-6 sm:pb-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl lg:my-20 my-8  font-bold text-gray-900 sm:text-4xl">

            </h2>
          </header>

          <div className="grid gap-4 lg:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {products?.slice(0, 10).map((products) => (
              <NewDrop products={products} key={products._id}></NewDrop>
            ))}
          </div>
        </div>
      </section>
      <Link to="/shopnew">
        <Button>{"Shop More"}</Button>
      </Link>
    </div>
  );
};

export default NewDrops;
