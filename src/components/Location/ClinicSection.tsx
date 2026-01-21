"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RequestCallbackModal from "../RequestCallbackModal";

interface Props {
    data: any;
}

export default function ClinicSection({ data }: Props) {
    if (!data?.clinic_boxs?.length) return null;


    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
                {/* Heading */}
                {data.clinic_description && <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.clinic_description }}
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
                    {data.clinic_boxs.map((item: any, index: number) => {
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
                                    <h3 className="text-lg font-semibold text-[#0F2A44] mb-5">
                                        {item.title}
                                    </h3>

                                    <span className="text-sm font-normal text-black flex items-start gap-1.5 mb-3">
                                        <Image
                                            className="group-hover:-rotate-45 w-6 h-6 duration-700 p-1"
                                            src="/images/location.svg"
                                            width={20}
                                            height={20}
                                            alt="arrow"
                                            unoptimized
                                        /> {item.location_address}
                                    </span>

                                    {/* Description */}
                                    <span className="text-sm font-normal text-black flex items-center gap-1.5 mb-3">
                                        <Image
                                            className="group-hover:-rotate-45 w-6 h-6 duration-700 p-1"
                                            src="/images/doctor.svg"
                                            width={20}
                                            height={20}
                                            alt="arrow"
                                            unoptimized
                                        /> {item.dr_name}
                                    </span>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

                {data.clinic_2nd_description && <div className="overview-section text-center pb-6">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.clinic_2nd_description }}
                    />
                </div>}


                {data.clinic_button_name &&
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText={data.clinic_button_name} id={data.clinic_button_name} />
                    </div>
                }
            </div>
        </section>
    );
}
