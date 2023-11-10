import React from "react";

const Category = () => {
  return (
    <div className=" lg:mx-14 mx-6 pb-0 sm:px-6 sm:pb-12 lg:px-8">
      <div className="xl:w-1/2 w-11/12 mx-auto mt-4">
        <h1 className="text-center font-bold lg:text-4xl text-3xl text-[#98EECC] uppercase">
          COLLECTIONS
        </h1>
        <p className="text-center font-bold my-4 text-sm uppercase">
          Celebrate new arrivals with limited-time exclusive discounts, special
          bundles, and <br /> exciting offers!
        </p>
      </div>
      <div className="inline lg:flex md:items-center md:justify-center">
        <div className="mx-auto md:mx-0">
          <img
            tabIndex={0}
            src="https://i.ibb.co/gyJvrPG/young-woman-with-shopping-bags-beautiful-dress.jpg"
            alt="boy with blonde hair"
            className=" lg:ml-6 ml-0 md:mt-5 mt-20 md:w-[42rem] w-[21rem] h-full rounded-sm"
          />
          <div className="flex flex-row lg:ml-6 ml-0 justify-between md:mt-7 mt-2">
            <img
              tabIndex={0}
              src="https://i.ibb.co/mBP1BRm/model1.jpg"
              className=" md:w-[20rem] w-[10rem] md:h-auto h-[12rem] rounded-sm"
              alt="man"
            />
            <img
              tabIndex={0}
              src="https://i.ibb.co/DkMTtW6/model2.jpg"
              className=" md:w-[20rem] w-[10rem] md:h-auto h-[12rem] rounded-sm md:ml-6 ml-0 md:mt-0  mt-0"
              alt="woman"
            />
          </div>
        </div>
        <div className="inline-block md:flex md:items-start md:justify-center md:mt-6 mt-2 mx-auto md:mx-0 lg:pl-6 pl-0">
          <div className="flex md:inline-block">
            <img
              tabIndex={0}
              src="https://i.ibb.co/rH6PdV6/model4.jpg"
              alt="guy with glasses"
              className="md:w-[24rem] md:h-[25rem]  w-[10rem] h-[12rem] rounded-sm  flex-shrink-0 object-cover object-fit"
            />
            <img
              tabIndex={0}
              src="https://i.ibb.co/ctyTWJM/model12.jpg"
              alt="guy with glasses"
              className="md:w-[24rem] md:h-[28rem]  w-[10rem] h-[12rem] mt-0 md:mt-7 ml-2 rounded-sm  flex-shrink-0 object-cover object-fit"
            />
          </div>
          <div>
            <img
              tabIndex={0}
              src="https://i.ibb.co/Wg0RD6P/model5.jpg"
              alt="girl  laughing"
              className="md:w-[35rem] md:h-[54.8rem] w-[21rem] h-[22rem] rounded-sm md:ml-6 ml-0 mt-2 md:mt-0 object-cover object-fit"
            />
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 grid-rows-5 gap-4">
        <div className="col-span-2 p-12 bg-slate-700 row-span-3">
          <img src="" alt="" />
        </div>
        <div className="row-span-2 p-12 bg-slate-700 col-start-3">2</div>
        <div className="row-span-5 p-12 bg-slate-700 col-start-4">6</div>
        <div className="row-span-3 p-12 bg-slate-700 col-start-3 row-start-3">
          9
        </div>
        <div className="row-span-2 p-12 bg-slate-700 row-start-4">13</div>
        <div className="row-span-2 p-12 bg-slate-700 row-start-4">16</div>
      </div> */}
    </div>
  );
};

export default Category;
