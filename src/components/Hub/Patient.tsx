
import Image from 'next/image';
import React from 'react'

interface Props {
    data: any;
}
const Patient = ({ data }: Props) => {
    return (
        <div className='overview-section py-6 space-y-6'>
            <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
                <div
                    className="text-gray-600 mb-10"
                    dangerouslySetInnerHTML={{
                        __html: data.patient_description_video
                    }}
                />
              
            </div>
            <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
                <div
                    className="text-gray-600 mb-10"
                    dangerouslySetInnerHTML={{
                        __html: data.patient_description_google
                    }}
                />
            </div>
            <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
                <div
                    className="text-gray-600 mb-10"
                    dangerouslySetInnerHTML={{
                        __html: data.patient_description_list_icons
                    }}
                />
                <div className="space-y-5 pb-10">
                    {data.patient_stories_lists && data.patient_stories_lists?.map((item: any, index: any) => (
                        <div key={index} className="flex gap-5 items-start">

                            {/* Icon */}
                            <div className="w-20 h-20 rounded-full bg-[#284599] flex items-center justify-center shrink-0">
                                <Image
                                    src={item.icon.url}
                                    alt={item.icon.alt || item.title}
                                    width={50}
                                    height={50}
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <h4 className="text-base lg:text-xl font-bold text-black mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Patient