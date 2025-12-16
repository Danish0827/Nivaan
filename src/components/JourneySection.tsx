"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
}

export default function JourneySection({ journey }: { journey: JourneyData }) {
    return (
        <section className="pt-10 pb-20 bg-white ">
            <div className="max-w-[1500px] mx-auto px-6 xl:px-10 2xl:px-0 relative text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#004A86] ">
                    {journey.title}
                </h2>

                <p className="text-black mt-4 max-w-6xl mx-auto leading-relaxed text-lg font-light">
                    {journey.info}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
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

                <div className="flex justify-center mt-10 fade-in-up">
                    <Link
                        href={journey.button.url}
                        className="block w-fit"
                    >
                        <button className="uppercase bg-gradient-to-r gap-3 flex justify-between items-center w-full lg:w-fit from-orange-600 to-orange-600 text-white px-5 py-2 xl:px-7 2xl:py-2 rounded-full font-medium shadow-md hover:scale-105 duration-500 cursor-pointer">
                            {journey.button.title}
                            <Image
                                className="group-hover:-rotate-45 w-10 h-10 duration-700 bg-white rounded-full p-3"
                                src="/images/orangearrow.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>

                    </Link>
                </div>
            </div>
        </section>
    );
}

function JourneyCard({
    item,
    step,
    isLast,
    index
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
        <div
            className={`p-6 border-t-2 shadow transition bg-white relative flex flex-col items-center text-center rounded-t-full rounded-b-2xl `}
        // 👈 stagger animation
        >
            <div className="relative rounded-2xl overflow-hidden w-full mb-5">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 w-20 h-20 mb-5 shadow  z-10">
                    <Image
                        src={item.icon.url}
                        alt={item.title}
                        width={65}
                        height={65}
                    />
                </div>
                <Image
                    src={item.image.url}
                    alt={item.title}
                    width={3000}
                    height={3000}
                    className="w-full h-full shadow-xl object-cover fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                />
            </div>

            {/* <span
                className={`hidden lg:block absolute left-[370px] z-20 top-[287px] h-[48%] border-blue-400 rotate-90 dot-move ${isLast ? "border-l-0" : "border-l-4"
                    }`}
                style={{
                    animationDelay: `${index * 0.8}s`,
                    "--move-distance": "-360px"
                } as React.CSSProperties}
            />

            <span
                className="hidden lg:block absolute left-44 top-[465px] h-4 w-4 rounded-full bg-blue-400 border-blue-400 rotate-90 dot-move"
                style={{
                    animationDelay: `${index * 0.8}s`,
                    "--move-distance": "-360px"
                } as React.CSSProperties}
            /> */}

            <span style={{ animationDelay: `${index * 0.2}s` }} className="text-[#004A86] flex justify-center items-center text-4xl font-bold relative -top-16 rounded-full bg-white w-20 h-20 fade-in-up">
                {index + 1}
            </span>

            <h3 style={{ animationDelay: `${index * 0.2}s` }} className="font-semibold -mt-14 xl:-mt-12 2xl:-mt-10 text-2xl text-gray-800 line-clamp-2 fade-in-up">
                {item.title}
            </h3>

            <p style={{ animationDelay: `${index * 0.2}s` }} className="text-gray-600 text-xs xl:text-base mt-2 leading-relaxed font-light pb-5 fade-in-up">
                {item.info}
            </p>
        </div>
    );
}
