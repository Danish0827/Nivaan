"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RequestCallbackModal from "../RequestCallbackModal";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

interface Props {
    data: any;
}

export default function ConditionSection({ data }: Props) {
    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
                {/* Heading */}
                {data.conditions_description && <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.conditions_description }}
                    />
                </div>}

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
                    {data.conditions_boxs.map((item: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full bg-white rounded-4xl border shadow-lg p-4 flex flex-col my-10">

                                    {/* Image */}
                                    <div className="rounded-3xl overflow-hidden mb-5">
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

                                    {item.link === "" ? (
                                        <h3 className="text-lg xl:text-xl font-bold text-[#0F2A44] mb-3">
                                            {item.title}
                                        </h3>
                                    ) : (
                                        <Link className="flex justify-between items-center group" href={item.link || ""}>
                                            <h3 className="text-lg xl:text-xl font-bold text-[#0F2A44] group-hover:text-orange-600 mb-3">
                                                {item.title}
                                            </h3>
                                            <IoArrowForward className="text-black w-10 text-2xl -mt-3 group-hover:text-orange-600 -rotate-45" />

                                        </Link>
                                    )}

                                    <p className="font-normal text-black mb-3">
                                        {item.description}
                                    </p>


                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
                <div className="flex justify-center mt-4">
                    {data?.conditions_button.title &&
                        <Link href={data?.conditions_button.url} className=" ">
                            <button id={data?.conditions_button.title} className="border-2 w-full uppercase lg:w-fit border-orange-500 text-orange-600 bg-white px-4 py-1.5 2xl:px-6 2xl:py-2 rounded-full font-normal flex justify-between items-center gap-3 hover:scale-105 duration-500 cursor-pointer">
                                {data?.conditions_button.title}
                                <Image
                                    className="group-hover:-rotate-45 w-8 h-8 duration-700 bg-orange-600 rounded-full p-2"
                                    src="/images/whitearrow.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow"
                                    unoptimized
                                />
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </section>
    );
}
