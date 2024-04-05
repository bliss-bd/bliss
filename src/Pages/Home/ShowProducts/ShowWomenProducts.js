import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ShowProducts.css";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import AdvertiseProduct from "../Advertiseproduct/AdvertiseProduct";

const ShowWomenProducts = () => {
  const { data: productWomen, isLoading } = useQuery({
    queryKey: ["productWomen"],
    queryFn: async () => {
      const res = await fetch(
        "https://bliss-bd.vercel.app/productWomen?category=women&category=both"
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
      <div className=" px-6 mx-0 lg:px-8 lg:mx-14 lg:pb-0">
        {/* <div className="xl:w-1/2 w-11/12 mx-auto">
          <h1 className="text-center font-bold lg:text-4xl text-3xl text-[#98EECC] uppercase">
            Women essentials
          </h1>
          <p className="text-center font-bold my-4 text-sm uppercase">
            Elevate Your Lifestyle with Women's Essentials – Explore Our
            Exclusive Collection for <br /> a Touch of Luxury.
          </p>
        </div> */}
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1350: {
              slidesPerView: 3,
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
          {productWomen?.map((productWomen, i) => (
            <SwiperSlide>
              <AdvertiseProduct products={productWomen} key={i}></AdvertiseProduct>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShowWomenProducts;
