import Image from "next/image";

interface RecoveryStep {
    subtitle: string;
    title: string;
    description: string;
}
interface RecoveryImage {
    id?: number;
    url: string;
    alt?: string;
}
interface ReBox {
    icon: {
        url: string;
        alt?: string;
    };
    title: string;
    description: string;
}
interface RecoveryData {
    recovery_2nd_title: string;
    recovery_2nd_description: string; // HTML string
    recovery_lists_step: RecoveryStep[];
    recovery_3th_description: string;
    recovery_image: RecoveryImage;
    recovery_description: string;
    recovery_boxs_lists: ReBox[];
}
interface RecoveryTimelineProps {
    data: RecoveryData;
}

const RecoveryTimeline: React.FC<RecoveryTimelineProps> = ({
    data
}) => {
    return (
        <section className="w-full bg-white overview-section">
            <div className="container mr-auto">
                {/* Title */}
                <div
                    className="text-gray-600 mb-6"
                    dangerouslySetInnerHTML={{
                        __html: data.recovery_description
                    }}
                />
                <div className="space-y-5 pb-10">
                    {data.recovery_boxs_lists && data.recovery_boxs_lists?.map((item, index) => (
                        <div key={index} className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
                            <div className="flex gap-5 items-start">

                                {item.icon &&
                                <div className="w-20 h-20 rounded-full bg-[#284599] flex items-center justify-center shrink-0">
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alt || item.title}
                                        width={50}
                                        height={50}
                                        unoptimized
                                    />
                                </div>}

                                {/* Content */}
                                <div>
                                    <h4 className="text-base lg:text-xl font-bold text-black mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 ">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="text-gray-600 mb-6"
                    dangerouslySetInnerHTML={{
                        __html: data.recovery_2nd_description
                    }}
                />
                <h2 className="text-lg lg:text-[22px] font-mono text-[#284599] font-medium mt-2 mb-4">
                    {data.recovery_2nd_title}
                </h2>

                {/* Card Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 py-4 lg:py-6 lg:pr-6">
                    {/* Timeline Card */}
                    <div className="bg-white/90 flex border rounded-[40px] shadow-xs p-6 md:p-8 w-full items-center h-full">


                        <div className="relative pl-6">
                            {/* Vertical Line */}
                            {/* <div className="absolute left-3 top-6 bottom-0 w-0.5 h-[420px] 2xl:h-[370px] bg-[#284599]" /> */}

                            {/* Steps */}
                            {data.recovery_lists_step && data.recovery_lists_step.map((step, index) => (
                                <div key={index} className="pl-4 relative mb-8 last:mb-0">
                                    {/* Dot */}
                                    <span className="absolute -left-5 top-5 w-4 h-4 rounded-full bg-[#284599]" />

                                    <p className="text-xs uppercase font-semibold text-[#284599]">
                                        {step.subtitle}
                                    </p>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1 pb-5">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="w-full rounded-[40px] shadow-xs">
                        <img
                            src={data.recovery_image.url}
                            alt={data.recovery_image.alt || "Recovery"}
                            className="rounded-[40px] shadow-xs w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom Description */}
                <div
                    className="text-gray-600 my-6"
                    dangerouslySetInnerHTML={{
                        __html: data.recovery_3th_description
                    }}
                />
            </div>
        </section>
    );
};

export default RecoveryTimeline;
