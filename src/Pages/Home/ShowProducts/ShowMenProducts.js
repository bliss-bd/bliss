import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ShowProducts.css";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import AdvertiseProduct from "../Advertiseproduct/AdvertiseProduct";

const ShowMenProducts = () => {
  const { data: productMen, isLoading } = useQuery({
    queryKey: ["productMen"],
    queryFn: async () => {
      const res = await fetch(
        "https://bliss-bd.vercel.app/productMen?category=men&category=both"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoaderCard></LoaderCard>;
  }
  return (
    <div className="border-none bg-[#1b1b1b]">
      <div className="px-2 mx-0 pt-2 lg:px-8">
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
          {productMen?.map((productMen, index) => (
            <SwiperSlide>
              <AdvertiseProduct
                products={productMen}
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

export default ShowMenProducts;
