import Image from "next/image";

interface OverviewSectionProps {
    featureTitle?: string;
    featuresHtml?: string; // UL from ACF
    image?: string;
    buttonbottom?: string;
}

export default function WhenToConsult({
    featuresHtml,
    image,
    buttonbottom,
}: OverviewSectionProps) {
    return (
        <section className="bg-white overview-section">
            <div className="container mr-auto space-y-10 py-7">
                {/* Gradient Box */}
                <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[36px]">
                    {/* Left – Features */}

                    <div className="relative w-full min-h-[280px] lg:min-h-full object-cover">
                        <Image
                            src={image || "/images/dummy/knee-ultrasound.webp"}
                            alt="Non-surgical knee treatment"
                            width={800}
                            height={800}
                            className="object-cover h-full w-full"
                        />
                    </div>
                    {/* Right – Image */}
                    <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0B4FA3] p-8 lg:p-8 items-center flex text-white">
                        {featuresHtml && (
                            <div
                                className="overview-list text-base xl:text-lg space-y-6"
                                dangerouslySetInnerHTML={{ __html: featuresHtml }}
                            />
                        )}
                    </div>

                </div>
                {/* Bottom Text */}
                {buttonbottom &&
                    <button className="block mx-auto uppercase cursor-pointer rounded-full bg-orange-500 px-8 py-3 text-white font-medium hover:bg-orange-600 transition">
                        {buttonbottom}
                    </button>
                }
            </div>
        </section>
    );
}
