"use client";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
    data?: {
        diagnosis_description?: string;
        diagnosis_image?: {
            url: string;
            alt?: string;
        };
        diagnosis_2nd_description?: string;
    };
}

export default function Diagnosis({ data }: Props) {
    return (
        <section className="w-full bg-white py-2 overview-section">
            <div className="container mr-auto">
                {/* Top Heading */}
                {data?.diagnosis_description && (
                    <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                        {parse(data?.diagnosis_description)}
                    </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-10 items-start py-10">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.diagnosis_image &&
                                <Image
                                    src={
                                        data?.diagnosis_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.diagnosis_image?.alt || ""}
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

                        {data?.diagnosis_2nd_description && (
                            <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.diagnosis_2nd_description)}
                            </div>
                        )}
                    </div>
                </div>
                {/* CTA */}

            </div>
        </section>
    );
}
