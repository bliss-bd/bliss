import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from "swiper";
import './ShowProducts.css'
import { useQuery } from '@tanstack/react-query';
import LoaderCard from '../../../Components/LoaderCard/LoaderCard';
import NewDrop from '../NewDrop/NewDrop';

const AdvertiseProducts = () => {

    const { data: advertiseProducts, isLoading } = useQuery({
        queryKey: ["advertiseProducts"],
        queryFn: async () => {
            const res = await fetch("https://bliss-bd.vercel.app/advertiseProducts?isAdvertised=1");
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <LoaderCard></LoaderCard>;
    }
    return (
        <div className='border-none' >
            <div className=' px-6 mx-0 py-4 lg:px-8 lg:mx-14 lg:pt-12 lg:pb-0' >
                <h1 className='text-start font-bold text-xl uppercase' >Just<br /> <span className='lg:text-6xl text-5xl text-[#98EECC] uppercase'>  For You</span> </h1>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
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
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* <div
                        slot="container-start"
                        className="parallax-bg "
                        data-swiper-parallax="-15%"
                    ></div> */}
                    {advertiseProducts?.map((advertiseItem, index) => (
                        <SwiperSlide>
                            <NewDrop products={advertiseItem} key={index} className=' my-44'></NewDrop>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AdvertiseProducts;