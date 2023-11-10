import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ShowProducts.css";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../NewDrop/NewDrop";

const AdvertiseProducts = () => {
  const { data: advertiseProducts, isLoading } = useQuery({
    queryKey: ["advertiseProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://bliss-bd.vercel.app/advertiseProducts?isAdvertised=1"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoaderCard></LoaderCard>;
  }
  return (
    <div className="border-none">
      <div className=" px-6 mx-0 py-4 lg:px-8 lg:mx-14 lg:pt-12 lg:pb-0">
        <div className="xl:w-1/2 w-11/12 mx-auto mt-4">
          <h1 className="text-center font-bold lg:text-4xl text-3xl text-[#98EECC] uppercase">
              JUST DROPPED
          </h1>
          <p className="text-center font-bold my-4 text-sm uppercase">
          Celebrate new  arrivals with limited-time exclusive discounts, special bundles, and <br /> exciting offers!
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={1500}
          breakpoints={{
            440: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            668: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1350: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {/* <div
                        slot="container-start"
                        className="parallax-bg "
                        data-swiper-parallax="-15%"
                    ></div> */}
          {advertiseProducts?.map((advertiseItem, index) => (
            <SwiperSlide>
              <NewDrop
                products={advertiseItem}
                key={index}
                className=" my-44"
              ></NewDrop>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default AdvertiseProducts;
