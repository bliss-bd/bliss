import React, { useContext } from 'react';
import { userContext } from '../../Contexts/UserContexts/UserContexts';
import DashboardNav from '../DashBoardNav/DashboardNav';

const DashBoardHome = () => {
  const {user}= useContext(userContext)

  console.log(user)

    return (
          <div className="my-2 lg:max-w-[1440px] relative inset-0 md:max-w-[744px] max-w-[465px] mx-auto  lg:px-20 md:px-6 px-4 lg:py-8 md:py-6 py-4">
            <div className="relative">
            <div className="w-full h-full md:flex flex-auto items-center justify-start p-10 bg-gray-900 text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-gradient-to-b to-black from-lime-300 opacity-75 inset-0 z-0"></div>
            <div className="w-full mx-auto max-w-md z-10">
            <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full my-6 dark:bg-gray-500 aspect-square" />
                <p className="lg:text-4xl md:text-2xl text-lg font-semibold  text-white">
                {user?.displayName}
                </p>
            </div>
            {/* <!---remove custom style--> */}
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
            </div>
          <DashboardNav></DashboardNav>
          </div>
    );
};

export default DashBoardHome;