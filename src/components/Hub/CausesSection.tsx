"use client";
import Image from "next/image";
import parse from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RequestCallbackModal from "../RequestCallbackModal";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

interface Props {
    data: any;
}

export default function CausesSection({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;


    return (
        <section className="bg-white w-full">
            <div className="container mr-auto">
                <div className="">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.causes_description }}
                    />
                </div>

                {data.causes_boxs.map((item: any, index: number) => {
                    return (
                        <div
                            key={index}
                            className="shadow-lg hub-symptoms rounded-4xl border p-6 my-8"
                        >
                            <h3 className="font-bold text-[#284599] text-2xl mb-4">{item.title}</h3>
                            <h4 className="text-sm text-gray-600 mb-4">{item.subtitle}</h4>
                            <p className="text-sm text-gray-600 mb-6">
                                {item.before_description}
                            </p>

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
                                {item.list_boxs.map((box: any, i: number) => {


                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="w-full h-full bg-white rounded-3xl border p-5 flex flex-col my-10 overview-section">

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
                                                {box.link == "" ? (
                                                    <h3 className="text-lg font-semibold text-[#0F2A44] ">
                                                        {box.title}
                                                    </h3>
                                                ) : (
                                                    <Link className="flex justify-between items-center " href={box.link || ""}>
                                                        <h3 className="text-lg font-semibold text-[#0F2A44]">
                                                            {box.title}
                                                        </h3>
                                                        <IoArrowForward className="text-black text-2xl -rotate-45" />

                                                    </Link>
                                                )}
                                                <p className="text-xs font-semibold text-[#06A1DC] uppercase my-3">
                                                    {box.subtitle}
                                                </p>

                                                <div className="hub-symptom">
                                                    <div
                                                        className={`text-xs lg:text-sm text-gray-600 leading-relaxed `}
                                                        dangerouslySetInnerHTML={{ __html: box.info }}
                                                    />


                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    );
                })}

                <div className="grid grid-cols-1 xl:grid-cols-[50%_40%] justify-center overview-section gap-10 pt-10 items-start">


                    <div>
                        {data?.causes_2nd_description && (
                            <div className="text-gray-700 hub-symptoms text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-1">
                                {parse(data?.causes_2nd_description)}
                            </div>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.causes_image &&
                                <Image
                                    src={
                                        data?.causes_image?.url}
                                    alt={data?.causes_image?.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>
                </div>

                <div className="text-center cta-treatment-section mt-14">
                    <div
                        className="text-gray-700 text-base xl:text-lg font-mono space-y-4 mb-10"
                        dangerouslySetInnerHTML={{
                            __html: data.treatment_after_description,
                        }}
                    />
                    {data.causes_button_name &&
                        <div className="flex justify-center">
                            <RequestCallbackModal buttonText={data.causes_button_name} id={data.causes_button_name} />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
