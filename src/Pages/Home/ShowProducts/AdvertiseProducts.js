import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ShowProducts.css";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import AdvertiseProduct from "../Advertiseproduct/AdvertiseProduct";

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
      <div className=" px-6 mx-0 py-4 lg:px-8 lg:mx-14">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
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
          {advertiseProducts?.map((advertiseItem, index) => (
            <SwiperSlide>
              <AdvertiseProduct
                products={advertiseItem}
                key={index}
                className="my-44"
              ></AdvertiseProduct>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default AdvertiseProducts;
