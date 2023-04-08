import { Button } from "../../../Button/Button";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../NewDrop/NewDrop";

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
    return <LoaderCard></LoaderCard>;
  }
  return (
    <div className="mb-8">
      <section>
        <div className=" lg:mx-14 mx-6 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl my-12 font-bold text-gray-900 sm:text-4xl">New Drops</h2>
          </header>

          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {products?.map((products) => (
              <NewDrop products={products} key={products._id}></NewDrop>
            ))}
          </div>
        </div>
      </section>
      <Button>{"Shop More"}</Button>
    </div>
  );
};

export default NewDrops;
