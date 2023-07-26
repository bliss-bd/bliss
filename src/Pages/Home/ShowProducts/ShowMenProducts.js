import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from "swiper";
import './ShowProducts.css'
import { useQuery } from '@tanstack/react-query';
import LoaderCard from '../../../Components/LoaderCard/LoaderCard';
import NewDrop from '../NewDrop/NewDrop';

const ShowMenProducts = () => {

    const { data: productMen, isLoading } = useQuery({
        queryKey: ["productMen"],
        queryFn: async () => {
            const res = await fetch("https://bliss-server-y2j1.vercel.app/productMen?category=men&category=both");
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
                <h1 className='text-start font-bold text-xl uppercase' >Discover <br /> <span className='lg:text-6xl text-5xl text-[#98EECC] uppercase'> men essentials</span> </h1>
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
                    {productMen?.map((productMen, index) => (
                        <SwiperSlide>
                            <NewDrop products={productMen} key={index} className=' my-44'></NewDrop>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ShowMenProducts;