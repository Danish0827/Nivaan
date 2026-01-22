"use client"
import Image from "next/image";
import parse from "html-react-parser";
import RequestCallbackModal from "../RequestCallbackModal";
import { useState } from "react";


interface RecoveryTimelineProps {
    data: any;
}
const RecoveryTimeline = ({ data }: RecoveryTimelineProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="w-full bg-white overview-section">
            <div className="container mr-auto">
                {/* Title */}
                <div
                    className="text-gray-600 mb-3"
                    dangerouslySetInnerHTML={{
                        __html: data.recovery_description
                    }}
                />

                <div
                    className="text-gray-600 py-4 hub-symptoms text-center"
                    dangerouslySetInnerHTML={{
                        __html: data.recovery_2nd_description
                    }}
                />
                {/* <h2 className="text-lg lg:text-[22px] font-mono text-[#284599] font-medium mt-2 mb-4">
                    {data.recovery_2nd_title}
                </h2> */}

                {/* Card Layout */}
                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-8 py-4 lg:py-6 lg:pr-6">
                    {/* Image */}
                    <div className="w-full rounded-[40px] shadow-xs">
                        <img
                            src={data.recovery_image.url}
                            alt={data.recovery_image.alt || "Recovery"}
                            className="rounded-[40px] shadow-xs w-full h-full object-cover"
                        />
                    </div>
                    {/* Timeline Card */}
                    <div className="bg-white/90 flex border rounded-[40px] shadow-xs p-5 md:p-8 w-full items-center h-full">
                        <div className="relative lg:pl-6">
                            {/* Vertical Line */}
                            {/* <div className="absolute left-6 top-6 bottom-0 w-0.5 h-[420px] 2xl:h-[400px] bg-[#284599]" /> */}

                            {/* Steps */}
                            {data.recovery_phase_lists &&
                                data.recovery_phase_lists?.map((step: any, index: any) => (
                                    <div key={index} className="flex gap-5 items-start ">
                                        {/* Icon + Line */}
                                        {step.icon &&
                                            <div className="relative flex flex-col items-center">
                                                <div className="w-20 h-20 rounded-full bg-[#284599] flex items-center justify-center">
                                                    <Image
                                                        src={step.icon.url || ""}
                                                        alt={step.icon.alt || ""}
                                                        width={50}
                                                        height={50}
                                                        unoptimized
                                                    />
                                                </div>
                                                {index !== data.recovery_phase_lists.length - 1 && (
                                                    <div className="w-0.5 h-full bg-blue-200 mt-2" />
                                                )}
                                            </div>
                                        }
                                        <div className="pb-10">
                                            <p className="text-sm font-semibold text-[#06A1DC] mb-1">
                                                PHASE {index + 1}
                                            </p>
                                            <h3 className="text-lg font-semibold text-black mb-2">
                                                {step.title}
                                            </h3>
                                            <div className="text-black symptoms-content">
                                                {parse(step.description)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className=" py-10">
                    {/* HEADER */}
                    <div className="text-center mb-10 text-gray-700">
                        {parse(data.recovery_3th_description)}
                    </div>

                    <div className="rounded-[40px] border border-[#D6E4F0] overflow-hidden bg-white shadow-sm">

                        {/* ===== MOBILE TABS ===== */}
                        <div className="md:hidden bg-[#F3FAFF]">
                            <div className="flex">
                                {data.recovery_table.map((col: any, index: number) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`flex-1 py-4 text-xs font-semibold uppercase tracking-wide
                                            ${activeTab === index
                                                ? "text-[#00A3E0] border-b-2 border-[#00A3E0]"
                                                : "text-gray-400"
                                            }`}
                                    >
                                        {col.table_title}
                                    </button>
                                ))}
                            </div>

                            <div className="divide-y divide-[#D6E4F0]">
                                {data.recovery_table[activeTab].table_body.map(
                                    (row: any, index: number) => (
                                        <div
                                            key={index}
                                            className="px-6 py-5 text-sm text-gray-800"
                                        >
                                            {row.title}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* ===== DESKTOP TABLE ===== */}
                        <div className="hidden md:block">
                            {/* TABLE HEAD */}
                            <div className="grid grid-cols-2 text-center border-[#00A3E0] bg-[#F3FAFF] border-b">
                                {data.recovery_table.map((col: any, index: number) => (
                                    <div
                                        key={index}
                                        className="py-5 font-semibold tracking-wide text-sm text-[#00A3E0] uppercase border-r last:border-r-0"
                                    >
                                        {col.table_title}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2">
                                {data.recovery_table.map((col: any, colIndex: number) => (
                                    <div
                                        key={colIndex}
                                        className="divide-y divide-[#D6E4F0] border-[#00A3E0] border-r last:border-r-0 bg-[#F3FAFF]"
                                    >
                                        {col.table_body.map((row: any, rowIndex: number) => (
                                            <div
                                                key={rowIndex}
                                                className="px-6 py-5 text-sm lg:text-base text-gray-800 lg:text-center"
                                            >
                                                {row.title}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>


                {/* Bottom Description */}
                <div className="grid grid-cols-1 xl:grid-cols-[44%_54%] gap-10 items-start pt-10">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.recovery_last_image &&
                                <Image
                                    src={
                                        data?.recovery_last_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.recovery_last_image?.alt || ""}
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
                        {data?.recovery_4th_description && (
                            <div className="text-gray-700 hub-symptoms text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.recovery_4th_description)}
                            </div>
                        )}
                        {data.recovery_button_name &&
                            <div className="flex justify-center lg:justify-start mt-6">
                                <RequestCallbackModal buttonText={data.recovery_button_name} id={data.recovery_button_name} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecoveryTimeline;
