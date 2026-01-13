"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import RequestCallbackModal from "../RequestCallbackModal";

interface Props {
  data: any;
}

export default function TreatmentCarousel({ data }: Props) {
  if (!data?.treatment_boxs?.length) return null;
 

  return (
    <section className="bg-white w-full overview-section">
      <div className="container mr-auto">
        {/* Heading */}
        <div className="">
          <div
            className="mt-4 text-gray-600 "
            dangerouslySetInnerHTML={{ __html: data.treatment_description }}
          />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            1280: { slidesPerView: 2.5 },
            1400: { slidesPerView: 3 },
          }}
        >
          {data.treatment_boxs.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-full bg-white rounded-3xl border shadow-lg p-5 flex flex-col my-10">

                  {/* Image */}
                  <div className="rounded-2xl overflow-hidden mb-5">
                    <Image
                      src={item.image.url}
                      alt={item.image.alt || item.title}
                      width={400}
                      height={260}
                      className="w-full h-[220px] object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#0F2A44] mb-1">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 uppercase mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <div>
                    <div
                      className={`text-sm text-gray-600 leading-relaxed`}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />

                    
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        </Swiper>

        {/* Bottom CTA */}
        <div className="text-center cta-treatment-section mt-14">
          <div
            className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10"
            dangerouslySetInnerHTML={{
              __html: data.treatment_after_description,
            }}
          />
          {data.treatment_button_name &&
            <div className="flex justify-center">
              <RequestCallbackModal buttonText={data.treatment_button_name} id={data.treatment_button_name} />
            </div>
          }
        </div>
      </div>
    </section>
  );
}
