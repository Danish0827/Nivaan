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

export default function TreatmentCarousel({ data }: Props) {
    if (!data?.treatment_boxs?.length) return null;


    return (
        <section className="bg-white w-full">
            <div className="container mr-auto">
                <div className="">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: data.treatment_subdescription }}
                    />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] overview-section gap-10 pt-10 items-start">
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.treatment_image &&
                                <Image
                                    src={
                                        data?.treatment_image?.url}
                                    alt={data?.treatment_image?.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                    <div>
                        {data?.treatment_description && (
                            <div className="text-gray-700 hub-symptoms symptoms-content text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-1">
                                {parse(data?.treatment_description)}
                            </div>
                        )}
                    </div>
                </div>

                <div
                    className="shadow-lg hub-symptoms rounded-4xl border p-6 my-10"
                >
                    <div>
                        <div
                            className="text-gray-600 overview-section"
                            dangerouslySetInnerHTML={{ __html: data.treatment_2nd_description }}
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
                        {data.treatment_boxs_lists.map((box: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="w-full h-full bg-white rounded-3xl border p-5 flex flex-col my-6 overview-section">
                                        {/* {box.image && box.image.url && (
                                            <div className="rounded-2xl overflow-hidden mb-5">
                                                <Image
                                                    src={box.image.url}
                                                    alt={box.image.alt || box.title}
                                                    width={400}
                                                    height={260}
                                                    className="w-full h-[220px] object-cover"
                                                />
                                            </div>
                                        )} */}

                                        <h3 className="text-lg font-semibold text-[#0F2A44]">
                                            {box.title}
                                        </h3>

                                        {/* <p className="text-xs font-semibold text-[#06A1DC] uppercase mb-3">
                                                    {box.subtitle}
                                                </p> */}

                                        <div className="hub-symptom">
                                            <div
                                                className={`text-xs lg:text-sm text-gray-600 symptoms-content`}
                                                dangerouslySetInnerHTML={{ __html: box.description }}
                                            />


                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>


                <div
                    className="shadow-lg hub-symptoms rounded-4xl border p-6 my-10"
                >
                    <div>
                        <div
                            className="text-gray-600 overview-section"
                            dangerouslySetInnerHTML={{ __html: data.treatment_3nd_description }}
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
                        {data.treatment_boxs.map((box: any, i: number) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="w-full h-full bg-white rounded-3xl border p-5 flex flex-col my-10 overview-section">
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

                                        {/* <p className="text-xs font-semibold text-[#06A1DC] uppercase mb-3">
                                                    {box.subtitle}
                                                </p> */}

                                        <div className="hub-symptom">
                                            <div
                                                className={`text-xs lg:text-sm text-gray-600 leading-relaxed `}
                                                dangerouslySetInnerHTML={{ __html: box.description }}
                                            />


                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    {data.treatment_3nd_description_after &&
                        <div
                            className="text-gray-600 overview-section"
                            dangerouslySetInnerHTML={{ __html: data.treatment_3nd_description_after }}
                        />}
                </div>

                {data?.treatment_sections?.map((section: any, index: number) => {
                    const isReverse = index % 2 !== 0;
                    return (
                        <div
                            key={index}
                            className={`grid grid-cols-1 gap-10 pt-14 items-start
                                ${isReverse
                                    ? "xl:grid-cols-[58%_40%]"
                                    : "xl:grid-cols-[40%_58%]"
                                }`}
                        >
                            {/* CONTENT */}
                            <div className={isReverse ? "xl:order-1" : "xl:order-2"}>
                                <h3 className="font-bold text-[#284599] text-2xl mb-4">
                                    {section.title}
                                </h3>

                                {section?.description && (
                                    <div className="text-gray-700 hub-symptom symptoms-content text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed space-y-2">
                                        {parse(section.description)}
                                    </div>
                                )}
                            </div>
                            <div className={isReverse ? "xl:order-2" : "xl:order-1"}>
                                <div className="relative rounded-[40px] overflow-hidden">
                                    {section?.image?.url && (
                                        <Image
                                            src={section.image.url}
                                            alt={section.image.alt || section.title}
                                            width={600}
                                            height={600}
                                            className="w-full h-auto object-cover"
                                            unoptimized
                                        />
                                    )}
                                </div>
                            </div>


                        </div>
                    );
                })}




                <div className="text-center cta-treatment-section mt-14">
                    {data.treatment_button_name &&
                        <div className="flex justify-center">
                            <RequestCallbackModal buttonText={data.treatment_button_name} id={data.treatment_button_name} />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
