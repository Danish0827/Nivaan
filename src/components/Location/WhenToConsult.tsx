import Image from "next/image";
import RequestCallbackModal from "../RequestCallbackModal";

interface OverviewSectionProps {
    mainfeaturesHtml?: string;
    featuresHtml?: string; 
    featuresHtml2?: string; 
    image?: string;
    buttonbottom?: string;
}

export default function WhenToConsult({
    featuresHtml,
    featuresHtml2,
    mainfeaturesHtml,
    image,
    buttonbottom,
}: OverviewSectionProps) {
    return (
        <section className="bg-white ">
            <div className="container mr-auto space-y-7 ">
                {featuresHtml &&<div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: featuresHtml }}
                    />
                </div>}
                <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[36px]">
                    {/* Left – Features */}                    
                    {/* Right – Image */}
                    <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0B4FA3] p-8 lg:p-8 items-center flex text-white">
                        {mainfeaturesHtml && (
                            <div
                                className="overview-list text-base xl:text-lg space-y-6"
                                dangerouslySetInnerHTML={{ __html: mainfeaturesHtml }}
                            />
                        )}
                    </div>
                    <div className="relative w-full min-h-[280px] lg:min-h-full object-cover">
                        <Image
                            src={image || "/images/dummy/knee-ultrasound.webp"}
                            alt="Non-surgical knee treatment"
                            width={800}
                            height={800}
                            className="object-cover h-full w-full"
                            unoptimized
                        />
                    </div>

                </div>
                {featuresHtml2 &&<div className="overview-section">
                    <div
                        className="mt-4 text-gray-600 "
                        dangerouslySetInnerHTML={{ __html: featuresHtml2 }}
                    />
                </div>}
                {buttonbottom &&
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText={buttonbottom} id={buttonbottom} />
                    </div>
                }
            </div>
        </section>
    );
}
