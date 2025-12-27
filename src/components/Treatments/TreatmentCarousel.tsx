"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  data: any;
}

export default function TreatmentCarousel({ data }: Props) {
  if (!data?.treatment_boxs?.length) return null;

  return (
    <section className="bg-white">
      <div className="container mr-auto">
        {/* Heading */}
        <div className="text-center mb-12">        
          <div
            className="mt-4 text-gray-600 "
            dangerouslySetInnerHTML={{ __html: data.treatment_description }}
          />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.treatment_boxs.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full bg-white rounded-3xl shadow-lg p-5 flex flex-col">
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={item.image.url}
                    alt={item.image.alt || item.title}
                    width={400}
                    height={260}
                    className="w-full h-[220px] object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#0F2A44] mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-blue-600 uppercase mb-3">
                  {item.subtitle}
                </p>

                <div
                  className="text-sm text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{
              __html: data.treatment_after_description,
            }}
          />
{data.treatment_button_name &&
          <button className="inline-flex items-center justify-center rounded-full bg-[#F36B2B] px-8 py-3 text-sm font-semibold text-white hover:bg-[#d95f26] transition">
            {data.treatment_button_name}
          </button>
}
        </div>
      </div>
    </section>
  );
}
