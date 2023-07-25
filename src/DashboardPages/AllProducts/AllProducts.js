import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Components/Loader/Loader";
import { TbCurrencyTaka } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { AiOutlineToTop, AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

const AllProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://bliss-server-y2j1.vercel.app/products");
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
      fetch(`https://bliss-server-y2j1.vercel.app/allproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted Successfully", {
              style: {
                border: "1px solid #98EECC",
                padding: "16px",
                color: "#98EECC",
              },
              iconTheme: {
                primary: "#98EECC",
                secondary: "#FFFAEE",
              },
            });
            refetch();
          }
        });
    }
  };

  const handleAdvertiseProduct = (id) => {
    const confirm = window.confirm("Are you sure, you want add this item to Advertise??");
    if (confirm) {
      fetch(`https://bliss-server-y2j1.vercel.app/advertiseProduct/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Successfully added to Advertise product");
            refetch();
          }
        });
    }
  };
  const handleRemoveAdvertiseProduct = (id) => {
    const confirm = window.confirm("Are you sure, you want Remove this item from Advertise??");
    if (confirm) {
      fetch(`https://bliss-server-y2j1.vercel.app/removeAdvertiseProduct/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: false }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Successfully Remove this item from Advertise");
            refetch();
          }
        });
    }
  };


  const handleAddToTopSell = (id) => {
    const confirm = window.confirm("Are you sure, you want add this item to Top sell??");
    if (confirm) {
      fetch(`https://bliss-server-y2j1.vercel.app/topSell/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Successfully added to Top sell");
            refetch();
          }
        });
    }
  };


  return (
    <div>
      <section className="container mx-auto px-4 lg:px-32">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="py-3">Top Sell</th>
                  <th className="py-3">Advertise item</th>
                  <th className="px-1 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {products?.map((product, index) => (
                  <tr className="text-gray-700" key={index}>
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={product?.picture1}
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
                      <span className="px-2 py-1 font-semibold leading-tight justify-center flex items-center text-black bg-[#98EECC] rounded-sm">
                        <TbCurrencyTaka></TbCurrencyTaka> {product?.price}
                      </span>
                    </td>
                    <td className=" py-3 text-sm border">{product?.stock}</td>
                    <td className="px-4 py-3 text-sm border ">
                      <button
                        className="hover:text-green-500 text-gray-700 text-center"
                        onClick={() => handleAddToTopSell(product._id)}
                      >
                        <div className="flex justify-center items-center">
                          {product?.isTopSell ? "Top sell" : <>
                            Add to Top sell
                            <AiOutlineToTop className="text-lg mx-1"></AiOutlineToTop>
                          </>}

                        </div>
                      </button>
                    </td>
                    <td className="px-4 py-3 text-sm border ">
                      {product?.isAdvertised === true ?
                        <button
                          className="hover:text-red-500 text-gray-500 text-center"
                          onClick={() => handleRemoveAdvertiseProduct(product._id)}
                        >
                          <div className="flex justify-center items-center">
                            Remove Advertise
                            <RiAdvertisementFill className="text-2xl mx-1"></RiAdvertisementFill>
                          </div>
                        </button>
                        :
                        <button
                          className="hover:text-green-500 text-gray-500 text-center"
                          onClick={() => handleAdvertiseProduct(product._id)}
                        >
                          <div className="flex justify-center items-center">
                            Add Advertise
                            <RiAdvertisementFill className="text-2xl mx-1"></RiAdvertisementFill>
                          </div>
                        </button>
                      }
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <button
                        className="hover:text-red-500"
                        onClick={() => handleDeleteItem(product._id)}
                      >
                        <AiFillDelete className="text-xl mx-1"></AiFillDelete>
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
