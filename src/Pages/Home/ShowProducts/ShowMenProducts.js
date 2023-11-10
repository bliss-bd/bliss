import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ShowProducts.css";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../NewDrop/NewDrop";

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
    <div className="border-none">
      <div className=" px-6 mx-0 py-4 lg:px-8 lg:mx-14 lg:pt-12 lg:pb-0">
        <div className="xl:w-1/2 w-11/12 mx-auto">
          <h1 className="text-center font-bold lg:text-4xl text-3xl text-[#98EECC] uppercase">
            men essentials
          </h1>
          <p className="text-center font-bold my-4 text-sm uppercase">
            Elevate Your Style and Routine with Essential Men's Products.
            Explore Our <br /> Exclusive Collection.
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
          {productMen?.map((productMen, i) => (
            <SwiperSlide>
              <NewDrop products={productMen} key={i}></NewDrop>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShowMenProducts;
