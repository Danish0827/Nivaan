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

export default function ConditionTreatment({ data }: Props) {
    return (
        <section className="bg-white w-full overview-section">
            <div className="container mr-auto">
                <div className="">
                    <div
                        className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mt-4"
                        dangerouslySetInnerHTML={{ __html: data.treatments_description }}
                    />
                </div>
                <div className="shadow-xl border p-6 my-10 rounded-[40px]">
                    <div className="text-center cta-treatment-section mt-5">
                        <div
                            className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10"
                            dangerouslySetInnerHTML={{
                                __html: data.treatments_2nd_description,
                            }}
                        />
                    </div>
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
                            1024: { slidesPerView: 1.2 },
                            1280: { slidesPerView: 1.5 },
                            // 1400: { slidesPerView: 2 },
                        }}
                    >
                        {data.treatments_boxs.map((item: any, index: number) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-full bg-white rounded-3xl border p-5 gap-5 flex flex-col lg:flex-row mb-5">
                                        <div className="lg:w-2/5 rounded-2xl overflow-hidden ">
                                            {item.image &&
                                                <Image
                                                    src={item.image.url}
                                                    alt={item.image.alt || item.title}
                                                    width={400}
                                                    height={260}
                                                    className="w-full h-72 lg:h-full object-cover"
                                                    unoptimized
                                                />}
                                        </div>
                                        <div className="lg:w-3/5">
                                            <h3 className="text-lg font-semibold text-[#0F2A44] mb-1">
                                                {item.title}
                                            </h3>
                                            <div>
                                                <div
                                                    className={`text-sm text-gray-600 leading-relaxed `}
                                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                                />


                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                    </Swiper>
                </div>
                <div className=" cta-treatment-section pt-3">
                    <div
                        className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10"
                        dangerouslySetInnerHTML={{
                            __html: data.treatments_3th_description,
                        }}
                    />
                </div>
                {data.treatments_button_name &&
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText={data.treatments_button_name} id={data.treatments_button_name} />
                    </div>
                }
            </div>
        </section>
    );
}
