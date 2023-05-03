import React, { useState } from "react";
import { Link } from "react-router-dom";


const DashboardNav = () => {

    const menu= (
        <>
        <li>
            <Link  to='/dashboard' className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2   hover:underline">
                Users
            </Link>
        </li>
        <li>
            <Link  to='/dashboard/dashboardwallat' className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2   hover:underline">
                Wallat
            </Link>
        </li>
        <li>
            <Link href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2   hover:underline">
                Account
            </Link>
        </li>
        <li>
            <Link href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2   hover:underline">
                Wishlists
            </Link>
        </li>

        </>
)


    return (

        <div className="">
            <div>
                <div className="relative">

                    {/* For large screens */}
                    <div className="bg-black px-6 py-4">
                        <div className="container mx-auto flex items-center justify-between">
                            <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white">
                            </h1>
                            <ul className="w-8/12 flex items-center justify-center space-x-8">
                                    {menu}
                            </ul>
                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default DashboardNav;