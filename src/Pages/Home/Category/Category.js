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
            className=" lg:ml-6 ml-0 md:mt-5 mt-20 md:w-[42rem] w-full h-full rounded-sm"
          />
          <div className="flex flex-row lg:ml-6 ml-0 justify-between gap-2 md:mt-7 mt-2">
            <div>
              <img
                tabIndex={0}
                src="https://i.ibb.co/mBP1BRm/model1.jpg"
                className=" md:w-[20rem] w-auto md:h-[25rem] h-[12rem] rounded-sm"
                alt="man"
              />
            </div>
            <div>
              <img
                tabIndex={0}
                src="https://i.ibb.co/DkMTtW6/model2.jpg"
                className=" md:w-[20rem] w-auto md:h-[25rem] h-[12rem] rounded-sm md:ml-6 ml-0 md:mt-0  mt-0"
                alt="woman"
              />
            </div>
          </div>
        </div>
        <div className="inline-block md:flex md:items-start md:justify-center md:mt-6 mt-2 mx-auto md:mx-0 lg:pl-6 pl-0">
          <div className="flex justify-between gap-2 md:inline-block">
            <div className="w-[50%] md:w-full">
              <img
                tabIndex={0}
                src="https://i.ibb.co/rH6PdV6/model4.jpg"
                alt="guy with glasses"
                className="md:w-[24rem] md:h-[25rem] md:pr-0 pr-3  w-auto h-auto rounded-sm  flex-shrink-0 object-cover object-fit"
              />
            </div>

            <div className="w-[50%] md:w-full">
              <img
                tabIndex={0}
                src="https://i.ibb.co/ctyTWJM/model12.jpg"
                alt="guy with glasses"
                className="md:w-[24rem] md:h-[28rem]  w-auto h-full mt-0 md:mt-7 rounded-sm  flex-shrink-0 object-cover object-fit"
              />
            </div>
          </div>
          <div>
            <img
              tabIndex={0}
              src="https://i.ibb.co/Wg0RD6P/model5.jpg"
              alt="girl  laughing"
              className="md:w-[35rem] md:h-[54.8rem] w-[24rem] h-[21rem] rounded-sm md:ml-6 ml-0 mt-2 md:mt-0 object-cover object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
