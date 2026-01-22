"use client";
import Image from "next/image";
import parse from "html-react-parser";
import RequestCallbackModal from "../RequestCallbackModal";

export default function Risks({ data }: any) {
    return (
        <section className="w-full py-3 bg-white overview-section">
            <div className="container mr-auto">
                {/* Top Heading */}
                {data?.risks_description && (
                    <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-2">
                        {parse(data?.risks_description)}
                    </div>
                )}

                {/* Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-10 items-start py-10">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.risks_boxs[0].image.url &&
                                <Image
                                    src={
                                        data?.risks_boxs[0].image.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.risks_boxs[0].image.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <h3 className="">{data?.risks_boxs[0].title}</h3>
                        {data?.risks_boxs[0].description && (
                            <div className="text-gray-700 text-lg symptoms-content lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.risks_boxs[0].description)}
                            </div>
                        )}
                    </div>
                </div>
                {/* CTA */}
                {data?.risks_button_name &&
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText={data.risks_button_name} id={data.risks_button_name} />
                    </div>
                }
            </div>
        </section>
    );
}
