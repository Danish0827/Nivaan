"use client";
import RequestCallbackModal from "../RequestCallbackModal";

interface Props {
    data: any;
}

export default function CTA({ data }: Props) { 
    return (
        <section className="bg-white w-full py-6">
            <div className="container mr-auto">               

                <div
                    style={{
                        backgroundImage: "url('/images/cta2.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="container mr-auto bg-blue-50 py-16 overview-section relative rounded-[40px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-l from-[#eaf9ff] to-[#eaf9ffb7] rounded-[40px]"></div>
                    <div className="relative z-10 px-4 text-center">
                        <h2 className="text-xl lg:text-2xl xl:text-4xl text-[#0852A0] font-bold mt-5 mb-3">
                            {data.cta_title}
                        </h2>
                        <div
                            className="text-gray-900 mb-8 prose prose-sm md:prose-base max-w-none mx-auto space-y-2 px-6"
                            dangerouslySetInnerHTML={{ __html: data.cta_description }}
                        />
                        <div className="flex justify-center gap-4 mt-4">
                            {data.cta_button_name && (
                                <div className="flex justify-center">
                                    <RequestCallbackModal
                                        buttonText={data.cta_button_name}
                                        id={data.cta_button_name}
                                    />
                                </div>
                            )}

                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
