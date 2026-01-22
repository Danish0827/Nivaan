"use client";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
    data?: {
        title?: string;
        overview_description?: string;
        overview_image?: {
            url: string;
            alt?: string;
        };
        overview_2nd_description?: string;
        target_button_name?: string;
    };
}

export default function OverviewSection({ data }: Props) {
    return (
        <section className="w-full bg-white overview-section">
            <div className="container mr-auto">
                {/* Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-[40%_58%] gap-10 items-start py-10">
                    {/* Image */}
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden">
                            {data?.overview_image &&
                                <Image
                                    src={
                                        data?.overview_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.overview_image?.alt || ""}
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

                        {data?.overview_description && (
                            <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.overview_description)}
                            </div>
                        )}
                    </div>
                </div>
                {/* CTA */}
                {/* {data?.target_button_name &&
                    <button className="block mx-auto cursor-pointer rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">
                        {data?.target_button_name}
                    </button>
                } */}
            </div>
        </section>
    );
}
