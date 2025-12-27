"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

interface Props {
  data: any;
}

export default function TreatmentCarousel({ data }: Props) {
  if (!data?.treatment_boxs?.length) return null;
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
  const isExpanded = expandedId === index; // ya item.id

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
            className={`text-sm text-gray-600 leading-relaxed ${
              !isExpanded ? "line-clamp-4" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />

          <button
            onClick={() =>
              setExpandedId(isExpanded ? null : index)
            }
            className="mt-2 text-sm font-semibold text-[#0852A0] hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
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
            <button className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#F36B2B] px-8 py-3 text-sm font-semibold text-white hover:bg-[#d95f26] transition">
              {data.treatment_button_name}
            </button>
          }
        </div>
      </div>
    </section>
  );
}
