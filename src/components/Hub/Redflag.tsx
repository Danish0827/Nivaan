"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RequestCallbackModal from "../RequestCallbackModal";
import parse from "html-react-parser";

interface Props {
    data: any;
}

export default function Redflag({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;

    return (
        <section className="bg-white w-full">
            <div className="container mr-auto">
                <div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.red_description }}
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
                    {data.red_boxs.map((box: any, i: number) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="w-full h-full bg-white rounded-3xl border p-5 flex flex-col my-10">
                                    <h3 className="text-lg lg:text-xl font-bold text-[#0F2A44] mb-4">
                                        {box.title}
                                    </h3>

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


                <div className="grid grid-cols-1 xl:grid-cols-[44%_54%] gap-10 items-start">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.red_image &&
                                <Image
                                    src={
                                        data?.red_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.red_image?.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div className="text-center lg:text-start">
                        <h3 className="text-lg lg:text-2xl 2xl:text-3xl font-bold text-[#284599] mb-4">
                            {data.red_2nd_title}
                        </h3>
                        {data?.red_2nd_description && (
                            <div className="text-gray-700 hub-symptoms text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.red_2nd_description)}
                            </div>
                        )}
                        {data.red_button_name &&
                            <div className="flex justify-center lg:justify-start mt-6">
                                <RequestCallbackModal buttonText={data.red_button_name} id={data.red_button_name} />
                            </div>
                        }
                    </div>
                </div>

            </div>
        </section>
    );
}
