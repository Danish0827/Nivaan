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

  const toggle = (i:any) => {
    setOpenIndex(openIndex === i ? null : i);
  };
    return (
        <div className=" pt-10 pb-[400px] px-4 md:px-20 bg-[#EEF8FD]">

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
                            <>
                            <div key={index} className="group">  
                            <Link href={role?.button}>
                            <div
                                className={` p-5 px-10 py-8 hover:rounded-[40px]
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
                            </Link>

                            {/* BOTTOM HR (not for last item) */}
                            {/* {!isLast && (
                            <hr
                                className="
                                text-[#CEE0EB] m-0 
                                transition-all duration-300 
                                group-hover:opacity-0
                                "
                            />
                            )} */}

                        </div>




</>
                        
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
                            className="w-full p-6 flex justify-between items-center text-left"
                        >
                            <h3 className="font-semibold text-xl text-black">{role.title}</h3>

                            <Image
                            src="/images/leftarrow.svg"
                            width={20}
                            height={20}
                            alt="arrow"
                            className={`transition-transform duration-300 ${
                                openIndex === index ? "-rotate-45" : "rotate-0"
                            }`}
                            />
                        </button>

                        {/* CONTENT */}
                        <div
                            className={`
                            px-6 transition-all overflow-hidden
                            ${openIndex === index ? "max-h-40 py-2" : "max-h-0"}
                            `}
                        >
                            <p className="text-gray-600 text-[15px] leading-relaxed">
                            {parse(role.info || "")}
                            </p>

                            <Link
                            href={role.button}
                            className="text-[#F05A28] font-semibold mt-3 inline-block"
                            >
                            LEARN MORE →
                            </Link>
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
                            className="inline-flex items-center gap-2 bg-[#FF7A45] text-white px-7 py-3 rounded-full
                            font-medium hover:bg-[#ff5e1e] transition"
                        >
                            {button?.title} <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>
                <div className="relative flex items-center justify-center lg:order-2 order-1">
                    <Image
                        src={image}
                        alt="Recovery Team Graphic"
                        width={700}
                        height={700}
                        className="object-contain drop-shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
