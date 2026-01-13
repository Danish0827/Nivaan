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

export default function ConditionCarousel({ data }: Props) {
    // if (!data?.recovery_boxs?.length) return null;
    // const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
                {/* Heading */}
                <div className="overview-section">
                    <div
                        className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mt-4"
                        dangerouslySetInnerHTML={{ __html: data.recovery_description }}
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
                    {data.recovery_boxs.map((item: any, index: number) => {
                        // const isExpanded = expandedId === index;

                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full bg-white rounded-3xl border shadow-lg p-5 flex flex-col my-10">

                                    {item.image &&
                                        <div className="rounded-2xl overflow-hidden mb-5">
                                            <Image
                                                src={item.image.url}
                                                alt={item.image.alt || item.title}
                                                width={400}
                                                height={260}
                                                className="w-full h-[220px] object-cover"
                                                unoptimized
                                            />
                                        </div>}

                                    {/* Content */}
                                    <h3 className="text-lg xl:text-xl font-bold mb-3 text-[#0F2A44] ">
                                        {item.title}
                                    </h3>

                                    <p className="font-semibold text-blue-600 uppercase mb-3">
                                        {item.subtitle}
                                    </p>

                                    {/* Description */}
                                    <div>
                                        <div
                                            className={`text-sm text-gray-600 leading-relaxed `}
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />
                                        {/* ${!isExpanded ? "line-clamp-4" : "" */}

                                        {/* <button
                                            onClick={() =>
                                                setExpandedId(isExpanded ? null : index)
                                            }
                                            className="mt-2 text-sm font-semibold text-[#0852A0] hover:underline"
                                        >
                                            {isExpanded ? "Read less" : "Read more"}
                                        </button> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>

                {/* Bottom CTA */}
                <div className="overview-section cta-treatment-section mt-5">
                    <div
                        className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10"
                        dangerouslySetInnerHTML={{
                            __html: data.recovery_2nd_description,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
