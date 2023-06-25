import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';

const Orders = () => {

    const {
        data: orders,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/orders");
            const data = await res.json();
            return data;
        },
    });

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
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Total Price</th>
                                    <th className="px-4 py-3">Contact Number</th>
                                    <th className="px-4 py-3">Address</th>
                                    <th className="px-4 py-3">order</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {orders?.map((order) => (
                                    <tr className="text-gray-700">
                                        <td className="px-4 py-3 border">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src={order?.picture1}
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black">{order?.name.length < 10 ? order.name : order.name.slice(0, 15) + "...."}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-xs border">
                                            <span className="px-2 py-1 font-semibold leading-tight justify-center flex items-center text-green-500 bg-green-100 rounded-sm">
                                                <TbCurrencyTaka></TbCurrencyTaka> {order?.totalPrice}
                                            </span>
                                        </td>
                                        <td className=" py-3 text-sm border">{order?.phone}</td>
                                        <td className=" py-3 text-sm border">{order?.address.length < 25 ? order.address : order.address.slice(0, 25) + "...."}</td>
                                        <td className="px-4 py-3 text-sm border">
                                            <Link
                                                className="hover:text-green-500"
                                                to={`/dashboard/orders/${order._id}`}
                                            >
                                                Review Order
                                            </Link>
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