"use client";
import Image from "next/image";
import parse from "html-react-parser";
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

export default function Symptoms({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;

    return (
        <section className="bg-white w-full overview-section">
            <div className="container mr-auto">
                <div className="">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.symptoms_description }}
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
                    {data.symptoms_boxs.map((item: any, index: number) => {

                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full bg-white rounded-3xl border  p-5 flex flex-col my-10">

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
                                    <h3 className="text-lg font-semibold text-[#0F2A44]">
                                        {item.title}
                                    </h3>
                                    <div className="hub-symptom">
                                        <div
                                            className={`text-xs lg:text-sm text-gray-600 leading-relaxed `}
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />


                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-10 items-start">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.symptoms_image &&
                                <Image
                                    src={
                                        data?.symptoms_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.symptoms_image?.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div>

                        {data?.symptoms_2nd_description && (
                            <div className="text-gray-700 hub-symptoms text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.symptoms_2nd_description)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center cta-treatment-section mt-14">
                    <div
                        className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10"
                        dangerouslySetInnerHTML={{
                            __html: data.treatment_after_description,
                        }}
                    />
                    {data.symptoms_button_name &&
                        <div className="flex justify-center">
                            <RequestCallbackModal buttonText={data.symptoms_button_name} id={data.symptoms_button_name} />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
