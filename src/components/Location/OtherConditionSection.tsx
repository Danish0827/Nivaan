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

export default function OtherConditionSection({ data }: Props) { 
    const datastatic = {
        "other_boxs": [
      {
        "image": `${process.env.NEXT_PUBLIC_BACKEND}/wp-content/uploads/2025/12/1-7.webp`,
        "title": "Back Pain",
        "description": "Targeted spine care for disc-related pain, nerve irritation, and movement limitations.",
        "link": "/back-pain"
      },
      {
        "image": `${process.env.NEXT_PUBLIC_BACKEND}/wp-content/uploads/2025/12/knee-pain-banner.webp`,
        "title": "Knee Pain",
        "description": "Joint preservation treatments focused on reducing pain and improving mobility.",
        "link": "/knee-pain"
      },
      {
       "image": `${process.env.NEXT_PUBLIC_BACKEND}/wp-content/uploads/2025/12/1-2.webp`,
        "title": "Neck Pain",
        "description": "Specialized cervical spine care for stiffness, nerve compression, and posture-related pain.",
        "link": "/neck-pain"
      },
      {
        "image": `${process.env.NEXT_PUBLIC_BACKEND}/wp-content/uploads/2025/12/1.webp`,
        "title": "Shoulder Pain",
        "description": "Learn why shoulder pain keeps returning, what drives it beneath the surface, and how structured.",
        "link": "/shoulder-pain"
      }
    ],   
    }
    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
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
                    {datastatic.other_boxs.map((item: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full bg-white rounded-4xl border shadow-lg p-4 flex flex-col my-10">
                                    <div className="rounded-3xl overflow-hidden mb-5">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={260}
                                            className="w-full h-[220px] object-cover"
                                        />
                                    </div>
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

                <div
                    style={{
                        backgroundImage: "url('/images/cta.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="container mr-auto bg-blue-50 py-10 overview-section relative rounded-[40px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-[#eaf9ff] to-[#eaf9ffb7] rounded-[40px]"></div>
                    <div className="relative z-10 px-4 text-center">
                        <h2 className="text-xl lg:text-2xl xl:text-4xl text-[#0852A0] font-bold mt-5 mb-3">
                            {data.cta_title}
                        </h2>
                        <div
                            className="text-gray-900 mb-8 prose prose-sm md:prose-base max-w-none mx-auto space-y-2 px-6"
                            dangerouslySetInnerHTML={{ __html: data.cta_description }}
                        />
                        <div className="lg:flex justify-center gap-4 mt-4">
                            {data.cta_button_name && (
                                <div className="flex justify-center mb-4 lg:mb-0">
                                    <RequestCallbackModal
                                        buttonText={data.cta_button_name}
                                        id={data.cta_button_name}
                                    />
                                </div>
                            )}

                            {data?.cta_button.title &&
                                <Link href={data?.cta_button.url} className=" ">
                                    <button id={data?.cta_button.title} className="text-sm lg:text-base border-2 w-full uppercase lg:w-fit border-orange-500 text-orange-600 bg-white px-4 py-1.5 2xl:px-6 2xl:py-2 rounded-full font-normal flex justify-between items-center gap-3 hover:scale-105 duration-500 cursor-pointer">
                                        {data?.cta_button.title}
                                        <Image
                                            className="group-hover:-rotate-45 w-8 h-8 duration-700 bg-orange-600 rounded-full p-2"
                                            src="/images/whitearrow.svg"
                                            width={20}
                                            height={20}
                                            alt="arrow"
                                        />
                                    </button>
                                </Link>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
