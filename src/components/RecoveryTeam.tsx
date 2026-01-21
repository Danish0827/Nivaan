"use client";

import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { useState } from "react";

interface RoleItem {
    title: string;
    info: string;
    button: string;
}

interface RecoveryTeamProps {
    sectionTitle: string;
    mainTitle: string;
    subtitle: string; // HTML
    roles: RoleItem[];
    image: string;
    afterInfo?: string; // HTML
    button: { title: string; url: string; target?: string };
}

export default function RecoveryTeam({
    sectionTitle,
    mainTitle,
    subtitle,
    roles,
    image,
    afterInfo,
    button,
}: RecoveryTeamProps) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i: any) => {
        setOpenIndex(openIndex === i ? null : i);
    };
    return (
        <div className=" pt-10 pb-[400px] px-4 lg:px-10 xl:px-14 2xl:px-20 bg-[#EEF8FD]">

            {/* HEADER */}
            <div className="text-center mb-12">
                <p className="text-[#06A1DC] text-xl lg:text-2xl font-semibold mb-2">{sectionTitle}</p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#004A86] mt-1">{mainTitle}</h2>
                <div className="text-black mt-2 xl:mt-4 max-w-6xl mx-auto leading-relaxed text-base lg:text-lg font-light">
                    {parse(subtitle || "")}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5 lg:py-10">
                <div className="order-2 lg:order-1">
                    <div className="hidden lg:block bg-[#06A1DC0A] rounded-[50px] shadow-lg p-6">
                        {roles.map((role, index) => {
                            // const isFirst = index === 0;
                            // const isLast = index === roles.length - 1;

                            return (
                                <div key={index} className="group">
                                    {/* <Link href={role?.button}> */}
                                    <div
                                        className={` p-5 px-10 lg:py-4 xl:py-8 hover:rounded-[40px]
                                                transition-all duration-300 cursor-pointer
                                                hover:shadow-lg hover:-translate-y-1 hover:bg-[#06A1DC29] hover:border-0   `}
                                    >
                                        <div className="flex justify-between">
                                            <h3 className="font-semibold text-xl text-black">
                                                {role.title}
                                            </h3>

                                            <Image
                                                className="group-hover:-rotate-45 duration-700"
                                                src="/images/leftarrow.svg"
                                                width={23}
                                                height={23}
                                                alt="arrow"
                                                unoptimized
                                            />
                                        </div>

                                        <div
                                            className="
                                                        text-gray-600 text-lg mt-2 leading-relaxed 
                                                        opacity-0 max-h-0 overflow-hidden 
                                                        transition-all duration-300
                                                        group-hover:opacity-100 group-hover:max-h-40
                                                    "
                                        >
                                            {parse(role.info || "")}
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                </div>
                            );
                        })}
                    </div>
                    <div className="lg:hidden space-y-2">
                        {roles.map((role, index) => (
                            <div
                                key={index}
                                className="border border-[#CEE0EB] rounded-2xl bg-[#E7F7FF]"
                            >
                                {/* HEADER */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full p-5 flex justify-between items-center text-left gap-2"
                                >
                                    <h3 className="font-semibold text-lg lg:text-xl text-black">{role.title}</h3>

                                    <Image
                                        src="/images/leftarrow.svg"
                                        width={20}
                                        height={20}
                                        alt="arrow"
                                        unoptimized
                                        className={`transition-transform duration-300 ${openIndex === index ? "-rotate-45" : "rotate-0"
                                            }`}
                                    />
                                </button>

                                {/* CONTENT */}
                                <div
                                    className={`px-5 transition-all overflow-hidden  ${openIndex === index ? "max-h-40 py-2" : "max-h-0"}`}
                                >
                                    <div className="text-gray-600 relative z-10 -top-3 text-[15px] leading-relaxed">
                                        {parse(role.info || "")}
                                    </div>

                                    {/* <Link
                                        href={role.button}
                                        className="text-[#F05A28] font-normal my-3 inline-block"
                                    >
                                        LEARN MORE →
                                    </Link> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {afterInfo && (
                        <div className="hidden lg:block  text-left mt-10 text-gray-700 leading-relaxed ">
                            <div className=" space-y-3">{parse(afterInfo)}</div>
                        </div>
                    )}
                    <div className="hidden lg:block text- mt-6">
                        <Link
                            href={button?.url}
                            target={button?.target || "_self"}
                            className="w-fit block"
                        >
                            <button className="uppercase bg-gradient-to-r gap-3 flex justify-between items-center w-full lg:w-fit from-orange-600 to-orange-600 text-white px-5 py-2 xl:px-7 2xl:py-2 rounded-full font-normal shadow-md hover:scale-105 duration-500 cursor-pointer">
                                {button?.title}
                                <Image
                                    className="group-hover:-rotate-45 w-8 h-8 duration-700 bg-white rounded-full p-2"
                                    src="/images/orangearrow.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow"
                                    unoptimized
                                />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative flex items-center justify-center lg:order-2 order-1">
                    <video
                        src={image}
                        className="w-full h-full block "
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>
        </div>
    );
}
