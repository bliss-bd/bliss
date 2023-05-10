import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Components/Loader/Loader";
import { TbCurrencyTaka } from "react-icons/tb";
import { toast } from "react-hot-toast";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDeleteItem = (id) => {
    const confirm = window.confirm("Are you sure, you want to delete this Item??");
    if (confirm) {
      fetch(`http://localhost:5000/allproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully", {
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            });
            refetch();
          }
        });
    }
  };

  return (
    <div>
      <section className="container mx-auto px-32">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products?.map((product) => (
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={product?.picture}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">{product?.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight justify-center flex items-center text-green-500 bg-green-100 rounded-sm">
                        <TbCurrencyTaka></TbCurrencyTaka> {product?.price}
                      </span>
                    </td>
                    <td className=" py-3 text-sm border">{product?.stock}</td>
                    <td className="px-4 py-3 text-sm border">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDeleteItem(product._id)}
                      >
                        Delete Product
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
