import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import RequestCallbackModal from "../RequestCallbackModal";

interface HowItWorksProps {
    data: {
        how_subtitle: string;
        how_title: string;
        how_description: string;
        how_image: {
            url: string;
            alt: string;
        };
        how_button_name: string;
        how_list_steps: {
            how_icons: {
                url: string;
                alt: string;
            };
            title: string;
            description: string;
        }[];
    };
}

export default function HowItWorks({ data }: HowItWorksProps) {
    return (
        <section className="relative py-0 overview-section">
            <div className="container mr-auto">
                <div className="prose max-w-none text-gray-600 mb-10">
                    {parse(data.how_description)}
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-8 2xl:gap-16 items-start">
                    <div className="space-y-8 relative">
                        
                        {data.how_list_steps &&
                            data.how_list_steps?.map((step, index) => (
                                <div key={index} className="flex gap-5 items-start">
                                    {/* Icon + Line */}
                                    <div className="relative flex flex-col items-center">
                                        {step.how_icons &&
                                        <div className="w-20 h-20 rounded-full bg-[#284599] flex items-center justify-center">
                                            {/* <div className="absolute h-[550px] lg:h-[400px] md:top-10 xl:h-[550px] 2xl:h-[400px] top-6 bg-[#284599] w-0.5 left-10"></div> */}
                                            <Image
                                                src={step.how_icons.url}
                                                alt={step.how_icons.alt}
                                                width={50}
                                                height={50}
                                                unoptimized
                                            />
                                        </div>}
                                        {index !== data.how_list_steps.length - 1 && (
                                            <div className="w-0.5 h-full bg-blue-200 mt-2" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#06A1DC] mb-1">
                                            STEP {index + 1}
                                        </p>
                                        <h3 className="text-lg font-semibold text-black mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* RIGHT IMAGE (STICKY) */}
                    <div className="relative lg:sticky lg:top-24">
                        <div className="rounded-3xl overflow-hidden shadow-lg">
                            {data.how_image &&
                                <Image
                                    src={data.how_image.url}
                                    alt={data.how_image.alt}
                                    width={600}
                                    height={700}
                                    className="w-full h-auto 2xl:h-[600px] object-cover"
                                    priority
                                    unoptimized
                                />
                            }
                        </div>
                    </div>

                </div>
                <div className="mt-10 text-center">
                    {data.how_button_name &&
                        <div className="flex justify-center">
                            <RequestCallbackModal buttonText={data?.how_button_name} id={data?.how_button_name} />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
