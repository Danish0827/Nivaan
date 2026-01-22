"use client";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
    data?: {
        symptoms_description?: string;
        symptoms_image?: {
            url: string;
            alt?: string;
        };
        symptoms_2nd_description?: string;
        symptoms_3th_description?: string;
    };
}

export default function Symptoms({ data }: Props) {
    return (
        <section className="w-full bg-white overview-section ">
            <div className="container mr-auto">
                {/* Top Heading */}
                {data?.symptoms_description && (
                    <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                        {parse(data?.symptoms_description)}
                    </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-10 items-start py-10">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.symptoms_image &&
                                <Image
                                    src={
                                        data?.symptoms_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.symptoms_image?.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div className="overview-list">

                        {data?.symptoms_2nd_description && (
                            <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-bold font-mono space-y-4">
                                {parse(data?.symptoms_2nd_description)}
                            </div>
                        )}
                    </div>
                </div>
                {/* CTA */}
                {data?.symptoms_3th_description && (
                    <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                        {parse(data?.symptoms_3th_description)}
                    </div>
                )}
            </div>
        </section>
    );
}
 