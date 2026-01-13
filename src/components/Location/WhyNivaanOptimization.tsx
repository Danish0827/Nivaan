"use client";
import Image from "next/image";
import parse from "html-react-parser";
import RequestCallbackModal from "../RequestCallbackModal";

interface Props {
    data?: any;
}

export default function WhyNivaanOptimization({ data }: Props) {
    return (
        <section className="w-full bg-white overview-section py-2">
            <div className="container mr-auto">
                {/* Top Heading */}
                {data?.why_description && (
                    <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                        {parse(data?.why_description)}
                    </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-[50%_40%] gap-10 items-start py-14">
                    {/* Symptoms */}
                    <div className="overview-list">

                        {data?.why_2nd_description && (
                            <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-bold font-mono space-y-4">
                                {parse(data?.why_2nd_description)}
                            </div>
                        )}
                    </div>
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.why_image &&
                                <Image
                                    src={
                                        data?.why_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.why_image?.alt || ""}
                                    width={700}
                                    height={700}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                    
                </div>
                {/* CTA */}
                {data.why_button_name &&
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText={data.why_button_name} id={data.why_button_name} />
                    </div>
                }
            </div>
        </section>
    );
}
 
