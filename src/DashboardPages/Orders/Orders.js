import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Orders = () => {

    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await fetch("https://bliss-server-y2j1.vercel.app/orders");
            const data = await res.json();
            return data;
        },
    });
    console.log(orders)

    const handleDeleteItem = (id) => {
        const confirm = window.confirm("Are you sure, you want to delete this Order??");
        if (confirm) {
            fetch(`https://bliss-server-y2j1.vercel.app/allorders/${id}`, {
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


    if (isLoading) {
        return <Loader></Loader>;
    }

    return (
        <div>
            <section className="container mx-auto px-4 lg:px-32">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-3 py-3">Name</th>
                                    <th className="px-3 py-3">Total Price</th>
                                    <th className="px-3 py-3">Contact Number</th>
                                    <th className="px-3 py-3">Address</th>
                                    <th className="px-3 py-3">Order</th>
                                    <th className="px-2 py-3">Delete order</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {orders?.map((order, index) => (
                                    <tr className="text-gray-700" key={index}>
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                <div>
                                                    <p className="font-semibold text-black">{order?.name.length < 10 ? order.name : order.name.slice(0, 15) + "...."}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight justify-center flex items-center text-black bg-[#98EECC] rounded-sm">
                                                <TbCurrencyTaka></TbCurrencyTaka> {order?.totalPrice}
                                            </span>
                                        </td>
                                        <td className=" py-3 text-sm border">{order?.phone}</td>
                                        <td className=" py-3 text-sm border">{order?.address.length < 25 ? order.address : order.address.slice(0, 25) + "...."}</td>
                                        <td className="px-4 py-3 text-sm border">
                                            <Link
                                                className="hover:text-green-500 flex items-center gap-2"
                                                to={`/dashboard/orders/${order._id}`}
                                            >
                                                {order?.tnxId ? <>Review Order <AiOutlineCheckCircle className='text-green-500'></AiOutlineCheckCircle> </> : 'Review Order'}
                                            </Link>
                                        </td>
                                        <td className="px-2 py-3 text-sm border">
                                            <button
                                                className="hover:text-red-500"
                                                onClick={() => handleDeleteItem(order._id)}
                                            >
                                                Delete order
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

export default Orders;