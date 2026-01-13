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

export default function TreatmentSection({ data }: Props) {


    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
                {/* Heading */}
                {data.treatments_description && <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.treatments_description }}
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
                    {data.treatments_boxs.map((item: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full bg-white rounded-4xl border shadow-lg p-4 flex flex-col my-10">

                                    {/* Image */}
                                    <div className="rounded-3xl overflow-hidden ">
                                        <Image
                                            src={item.image.url}
                                            alt={item.image.alt}
                                            width={400}
                                            height={260}
                                            className="w-full h-[220px] object-cover"
                                            unoptimized
                                        />
                                    </div>

                                    {/* Content */}
                                    {item.title &&
                                        <h3 className="text-lg xl:text-xl font-bold text-[#0F2A44] mt-5 mb-3">
                                            {item.title}
                                        </h3>}

                                    {item.description && <p className="font-normal text-black mb-3">
                                        {item.description}
                                    </p>}
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

                {data.treatments_2nd_description && <div className="overview-section text-center pb-6">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.treatments_2nd_description }}
                    />
                </div>}

                {data.conditions_button_name &&
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText={data.conditions_button_name} id={data.conditions_button_name} />
                    </div>
                }
            </div>
        </section>
    );
}
