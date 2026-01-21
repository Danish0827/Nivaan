"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  data: any;
}
const Patient = ({ data }: Props) => {
  return (
    <div className='overview-section py-2'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2.5 },
          1400: { slidesPerView: 3 },
        }}
      >
        {data.patient_stories.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[50px] p-5 xl:p-6 2xl:p-8 shadow-[0_3px_20px_rgba(0,0,0,0.1)] my-6 mx-2 lg:mx-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.name?.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 xl:text-lg line-clamp-1">{item.name}</h4>
                    <p className="text-gray-500 text-sm xl:text-base">{item.time}</p>
                  </div>
                  <Image
                    src="/images/google.svg"
                    alt="Google Icon"
                    width={35}
                    height={35}
                    className="ml-auto"
                    unoptimized
                  />
                </div>
                <Image src="/images/starts.svg" alt="Stars" width={100} height={20} className="mb-3" unoptimized />
                <p className="text-gray-700 text-sm xl:text-base leading-relaxed">{item.comment}</p>
              </div>
            </SwiperSlide>
          );
        })}

      </Swiper>
    </div>
  )
}

export default Patient