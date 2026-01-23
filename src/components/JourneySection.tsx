"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface JourneyItem {
    title: string;
    info: string;
    icon: { url: string };
    image: { url: string };
}

interface JourneyData {
    title: string;
    info: string;
    list: JourneyItem[];
    button: { url: string; title: string };
    behind: string
}

export default function JourneySection({ journey }: { journey: JourneyData }) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy(); // re-init navigation
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="pt-10 pb-20 bg-white">
            <div className="max-w-[1500px] mx-auto px-6 xl:px-10 2xl:px-0 relative text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#004A86]">
                    {journey.title}
                </h2>
                {journey.info &&
                    <p className="text-black mt-4 max-w-6xl mx-auto leading-relaxed text-lg font-light">
                        {journey.info}
                    </p>
                }
                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 lg:mt-14">
                    {journey.list.map((item, index) => (
                        <JourneyCard
                            key={index}
                            item={item}
                            step={index + 1}
                            isLast={index === journey.list.length - 1}
                            index={index}
                        />
                    ))}
                </div>


                {/* Mobile Swiper */}
                <div className="block md:hidden mt-7 lg:mt-14 relative">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}

                        onBeforeInit={(swiper) => {
                            const navigation = swiper.params.navigation
                            if (typeof navigation !== 'boolean' && navigation) {
                                navigation.prevEl = prevRef.current
                                navigation.nextEl = nextRef.current
                            }
                        }}
                    >
                        {journey.list.map((item, index) => (
                            <SwiperSlide key={index}>
                                <JourneyCard
                                    item={item}
                                    step={index + 1}
                                    isLast={false}
                                    index={index}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 ">
                        <button
                            ref={prevRef}
                            className="w-10 h-10 rounded-full border bg-[#0852A0] border-white text-white flex items-center justify-center"
                        >
                            ←
                        </button>
                        <button
                            ref={nextRef}
                            className="w-10 h-10 rounded-full border bg-[#0852A0] border-white text-white flex items-center justify-center"
                        >
                            →
                        </button>
                    </div>
                </div>
                {/* Button Link */}
                {journey.button.title &&
                    <div className="flex justify-center mt-6 lg:mt-10 fade-in-up">
                        <Link href={journey.button.url}>
                            <button className="uppercase text-sm lg:text-lg gap-3 flex justify-between items-center w-full lg:w-fit bg-gradient-to-r from-[#EC6724] to-[#F05432] hover:from-[#EC6724]/80 hover:to-[#F05432]/80 text-white px-5 py-2 xl:px-7 2xl:py-2 rounded-full font-normal shadow-md hover:scale-105 duration-500 cursor-pointer">
                                {journey.button.title}
                                <Image
                                    className="group-hover:-rotate-45 w-10 h-10 duration-700 bg-white rounded-full p-3"
                                    src="/images/orangearrow.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow"
                                    unoptimized
                                />
                            </button>
                        </Link>
                    </div>
                }
                {journey.behind &&
                    <p
                        // style={{ animationDelay: `${index * 0.2}s` }}
                        className="text-gray-600 text-sm lg:text-xs xl:text-base mt-2 leading-relaxed font-light py-5 fade-in-up"
                    >
                        {journey.behind}
                    </p>
                }
            </div>
        </section>
    );
}

// ---------------- JourneyCard Component ----------------

function JourneyCard({
    item,
    step,
    isLast,
    index,
}: {
    item: JourneyItem;
    step: number;
    isLast: boolean;
    index: number;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = step;
        const duration = 600;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [step]);

    return (
        <div className="w-full p-3 transition bg-white relative flex flex-col items-center text-center rounded-t-full rounded-b-2xl">
            <div className="relative lg:rounded-[40px] rounded-2xl overflow-hidden w-full mb-5">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 w-20 h-20 mb-5 z-10">
                    <Image
                        src={item.icon.url}
                        alt={item.title}
                        width={65}
                        height={65}
                        className="w-16 h-16 -mt-3 flex justify-center items-center"
                        unoptimized
                    />
                </div>
                <Image
                    src={item.image.url}
                    alt={item.title}
                    width={3000}
                    height={3000}
                    className="w-full h-48 lg:h-full shadow-2xl object-cover fade-in-up rounded-[40px]"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    unoptimized
                />
            </div>

            <span
                style={{ animationDelay: `${index * 0.2}s` }}
                className="text-[#06A1DC] flex justify-center items-center text-3xl lg:text-4xl font-bold relative -top-14 lg:-top-16 rounded-full bg-white w-16 h-16 lg:w-20 lg:h-20 fade-in-up"
            >
                {index + 1}
            </span>

            <h3
                style={{ animationDelay: `${index * 0.2}s` }}
                className="font-semibold -mt-14 xl:-mt-12 2xl:-mt-10 text-2xl text-gray-800  fade-in-up"
            >
                {item.title}
            </h3>

            <p
                style={{ animationDelay: `${index * 0.2}s` }}
                className="text-gray-600 text-sm lg:text-xs xl:text-base mt-2 leading-relaxed font-light pb-5 fade-in-up"
            >
                {item.info}
            </p>
        </div>
    );
}
