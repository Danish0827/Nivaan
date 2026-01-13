"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface Props {
    data: any;
}

export default function SpecialistsSection({ data }: Props) {


    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
                {/* Heading */}
                {data.specialists_description && <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.specialists_description }}
                    />
                </div>}

                {/* Swiper */}
                <div className="py-16">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
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
                        {data.select_specialist.map((item: any, index: number) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link
                                        href={`/doctors/${item.slug}`}
                                        className="group"
                                    >
                                        <div className="rounded-3xl text-left text-[#003B73] overflow-hidden">
                                            <div className="relative pt-5 mb-6 overflow-hidden rounded-[50px]">
                                                <Image
                                                    src={item?.featured_image?.url}
                                                    alt={item?.featured_image?.alt}
                                                    width={1000}
                                                    height={1000}
                                                    className="rounded-xl object-cover w-full transition-transform duration-500 "
                                                    unoptimized
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#003B73] via-[#003B73]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 flex items-end mb-10 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="text-white text-sm xl:text-base font-semibold border border-white px-5 py-2 rounded-full backdrop-blur-sm">
                                                        View Profile
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-[#0852A0] mb-2">
                                                    {item?.title}
                                                </h3>
                                                <p className="text-[11px] md:text-xs xl:text-sm text-[#06A1DC] mt-1 ">
                                                    {item.qualification}
                                                </p>
                                                {/* <p className="text-sm md:text-base font-normal text-black mt-2 mb-1">
                                    <span className="font-bold">{item.experience}+ years</span> Experience
                                </p>
                                <p className="text-sm font-light text-black">
                                    {item.place}
                                </p> */}
                                            </div>

                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>
                </div>

                {data.specialists_2nd_description && <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.specialists_2nd_description }}
                    />
                </div>}
            </div>
        </section>
    );
}
