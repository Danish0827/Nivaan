"use client";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
    approach_description?: string;
    approach_image?: {
        url: string;
        alt?: string;
    };
    cta_title: string;
    cta_button_name: string;
    cta_description: string; 
}
interface ApproachProps {
    data: Props;
}

export default function Approach({ data }: ApproachProps) {
    return (
        <section className="w-full bg-white overview-section">
            <div className="container mr-auto">                
                <div className="grid grid-cols-1 xl:grid-cols-[40%_60%] gap-10 items-start py-10 approach-section">
                    <div>

                        {data?.approach_description && (
                            <div className="text-gray-700 text-lg targetDescription lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                                {parse(data?.approach_description)}
                            </div>
                        )}
                    </div>
                    <div className="w-full">
                        <div className="relative rounded-[40px] overflow-hidden mr-6">
                            {data?.approach_image &&
                                <Image
                                    src={
                                        data?.approach_image?.url ||
                                        "https://via.placeholder.com/600x600"
                                    }
                                    alt={data?.approach_image?.alt || ""}
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            }
                        </div>
                    </div>
                </div>
                
            </div>

            {/* CTA Section */}
            <div style={{
                backgroundImage: "url('/images/cta.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} className="w-full bg-blue-50 py-16 overview-section relative rounded-[40px]">
                <div className="absolute inset-0 bg-gradient-to-l from-[#eaf9ff] to-[#eaf9ffb7] rounded-[40px]"></div>
                <div className="relative z-10  px-4 text-center">
                    <h2 className="text-xl lg:text-2xl xl:text-4xl text-[#0852A0] font-bold mt-5 mb-3">
                        {data.cta_title}
                    </h2>
                    <div
                        className="text-gray-900 mb-8 prose prose-sm md:prose-base max-w-none mx-auto space-y-2 px-6"
                        dangerouslySetInnerHTML={{
                            __html: data.cta_description
                        }}
                    />
                    {data.cta_button_name &&
                        <button
                            // onClick={onCTAClick}
                            className="inline-block cursor-pointer rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">
                            {data.cta_button_name}
                        </button>
                    }
                </div>
            </div>
        </section>
    );
}
