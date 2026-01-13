import Image from 'next/image'
import React from 'react'
import RequestCallbackModal from '../RequestCallbackModal'

interface Props {
    data: any
}
const RecoveryTimeline = ({ data }: Props) => {
    return (
        <>
            <section className="w-full bg-white overview-section">
                <div className="container mr-auto">
                    {data.recovery_description && <div className="overview-section pb-10">
                        <div
                            className="mt-4 text-gray-600 "
                            dangerouslySetInnerHTML={{ __html: data.recovery_description }}
                        />
                    </div>
                    }
                    <div className="pl-4 relative mb-3 last:mb-0 bg-white border rounded-[40px] shadow-xs px-6 py-10 lg:px-8 space-y-10">
                        {data.recovery_lists && data.recovery_lists.map((item: any, index: any) => (
                            <div key={index} className="flex gap-4 items-start ">
                                {item.icon.url &&
                                    <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#1E3A8A] flex items-center justify-center">
                                        <Image
                                            src={item.icon.url}
                                            alt={item.title.alt || ""}
                                            width={60}
                                            height={60}
                                            style={{ filter: 'brightness(100)' }}
                                            className="p-2"
                                            unoptimized
                                        />
                                    </div>}
                                <div>
                                    <span className='text-xs text-[#06A1DC] font-bold'>STEP {index +1}</span>
                                    <h4 className="text-sm md:text-base lg:text-lg xl:text-xl my-2 font-semibold text-gray-900">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center pt-7">
                        <RequestCallbackModal buttonText="Explore Complete Recovery" id="Explore Complete Recovery" />
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default RecoveryTimeline
