import Image from "next/image";
import parse from "html-react-parser";
import he from "he";
import RequestCallbackModal from "../RequestCallbackModal";

interface Props {
    data: any;
}

export default function Diagnosis({ data }: Props) {
    return (
        <section className="bg-white container mr-auto  py-6">
            <div className="text-gray-700 text-lg  lg:text-sm xl:text-base 2xl:text-lg overview-section leading-relaxed font-mono mb-10">
                {parse(he.decode(data.diagnosis_description))}
            </div>
            {/* Image */}


            {/* Bottom Content Box */}
            {data.diagnosis_boxs &&
                <div className="space-y-10">
                    {data.diagnosis_boxs?.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="border border-[#E2E8F0] rounded-[40px] p-6 md:p-10 bg-white"
                        >
                            <h3 className="text-lg lg:text-2xl 2xl:text-3xl font-bold text-[#284599] mb-4">
                                {item.title}
                            </h3>
                            <div className="symptoms-content hub-symptom text-gray-800 space-y-3">
                                {parse(he.decode(item.description))}
                            </div>
                        </div>
                    ))}
                </div>
            }

            <div className="grid grid-cols-1 xl:grid-cols-[44%_54%] gap-10 py-10 items-start">
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
                <div className="text-center lg:text-start">
                    <h3 className="text-lg lg:text-2xl 2xl:text-3xl font-bold text-[#284599] mb-4">
                        {data.diagnosis_2nd_title}
                    </h3>
                    {data?.diagnosis_2nd_description && (
                        <div className="text-gray-700 hub-symptoms text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4">
                            {parse(data?.diagnosis_2nd_description)}
                        </div>
                    )}
                </div>
            </div>
            {data.diagnosis_button_name &&
                <div className="flex justify-center">
                    <RequestCallbackModal buttonText={data.diagnosis_button_name} id={data.diagnosis_button_name} />
                </div>
            }
        </section>
    );
}
