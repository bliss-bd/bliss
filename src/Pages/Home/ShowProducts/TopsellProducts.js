import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./ShowProducts.css";
import { useQuery } from "@tanstack/react-query";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import { Link } from "react-router-dom";
import { Button } from "../../../Button/Button";
import AdvertiseProduct from "../Advertiseproduct/AdvertiseProduct";
// import NewDrop from "../NewDrop/NewDrop";

const TopsellProducts = () => {
  const { data: topSell, isLoading } = useQuery({
    queryKey: ["topSell"],
    queryFn: async () => {
      const res = await fetch("https://bliss-bd.vercel.app/topSell?isTopSell=1");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoaderCard></LoaderCard>;
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="border-none">
      <div className="px-6 mx-0 lg:px-8 lg:mx-14 lg:pb-0">
        {/* <div className="xl:w-1/2 w-11/12 mx-auto">
          <h1 className="text-center font-bold lg:text-4xl text-3xl text-[#98EECC] uppercase">
            Top Sells
          </h1>
          <p className="text-center font-bold my-4 text-sm uppercase">
            Empower our mission with eco-friendly, T-SHIRTS, HOODIES,
            ACCESSORIES AND MORE <br />
            apparel made from organic cotton.
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
          {topSell?.map((topsell, index) => (
            <SwiperSlide>
              <AdvertiseProduct
                products={topsell}
                key={index}
                className=" my-44"
              ></AdvertiseProduct>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link onClick={scrollToTop} to="/shopnew">
          <div className="mb-6">
            <Button>{"Shop More"}</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopsellProducts;
