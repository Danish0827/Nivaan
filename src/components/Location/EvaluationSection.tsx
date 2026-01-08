"use client";
import RequestCallbackModal from "../RequestCallbackModal";

interface Props {
    data: any;
}

export default function EvaluationSection({ data }: Props) {

    return (
        <section className="bg-white w-full ">
            <div className="container mr-auto">
                {data.evaluation_description &&
                <div className="mt-4">
                    <div
                        className="space-y-5 text-gray-600 overview-list"
                        dangerouslySetInnerHTML={{ __html: data.evaluation_description }}
                    />
                </div>}

                
                {/* Bottom CTA */}
                <div className="text-center cta-treatment-section mt-14">                   
                    {data.evaluation_button_name &&
                        <div className="flex justify-center">
                            <RequestCallbackModal buttonText={data.evaluation_button_name} id={data.evaluation_button_name} />
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}
