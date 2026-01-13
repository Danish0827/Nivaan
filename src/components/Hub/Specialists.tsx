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

export default function Specialists({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;


    return (
        <section className="bg-white w-full">
            <div className="container mr-auto">
                <div className="">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.specialists_description }}
                    />
                </div>

                <div
                    className="shadow-lg hub-symptoms rounded-4xl border p-6 my-8"
                >
                    <div className="symptoms-content">
                        <div
                            className="mt-4 text-gray-600 space-y-3 hub-specialist-heading"
                            dangerouslySetInnerHTML={{ __html: data.specialists_2nd_description }}
                        />
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        loop
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
                        {data.specialists_boxs?.map((box: any, i: number) => {


                            return (
                                <SwiperSlide key={i}>
                                    <div className="w-full h-full bg-white rounded-3xl border p-5 flex flex-col my-10 overview-section  ">
                                        {/* IMAGE (conditional) */}
                                        {box.image && box.image.url && (
                                            <div className="rounded-2xl overflow-hidden mb-5">
                                                <Image
                                                    src={box.image.url}
                                                    alt={box.image.alt || box.title}
                                                    width={400}
                                                    height={260}
                                                    className="w-full h-[220px] object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                        )}

                                        <h3 className="text-lg font-semibold text-[#0F2A44]">
                                            {box.title}
                                        </h3>

                                        <div className="hub-symptom">
                                            <div
                                                className={`text-xs lg:text-sm text-gray-600 symptoms-content space-y-2`}
                                                dangerouslySetInnerHTML={{ __html: box.description }}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.specialists_3nd_description }}
                    />

                    <div className="text-center cta-treatment-section py-8">
                        {data.specialists_button_name &&
                            <div className="flex justify-center">
                                <RequestCallbackModal buttonText={data.specialists_button_name} id={data.specialists_button_name} />
                            </div>
                        }
                    </div>
                </div>


            </div>
        </section>
    );
}
