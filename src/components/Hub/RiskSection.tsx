"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
    data: any;
}

export default function RiskSection({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;

    return (
        <section className="bg-white w-full">
            <div className="container mr-auto">
                <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.risk_description }}
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
                    {data.risk_boxs.map((box: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="w-full h-full bg-white rounded-3xl border p-5 flex flex-col my-6">
                                        {/* {box.image && box.image.url && (
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
                                        )} */}

                                        <h3 className="text-lg lg:text-xl font-bold text-[#0F2A44] mb-4">
                                            {box.title}
                                        </h3>

                                        {/* <p className="text-xs font-semibold text-[#06A1DC] uppercase mb-3">
                                                    {box.subtitle}
                                                </p> */}

                                        <div className="hub-symptom overview-section">
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
                    className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10 overview-section"
                    dangerouslySetInnerHTML={{
                        __html: data.risk_description_after,
                    }}
                />

            </div>
        </section>
    );
}
