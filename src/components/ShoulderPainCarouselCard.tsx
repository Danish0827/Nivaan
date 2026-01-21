import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { rubikBold, rubikReg, montserratLightBold } from '@/app/fonts';
import { WhatIsCarouselCardType } from '@/app/api/allTypes';

interface WhatIsCarouselCardProps {
    data: WhatIsCarouselCardType;
    expanded: boolean;
    toggleExpanded: () => void
}

const WhatIsCarouselCard: React.FC<WhatIsCarouselCardProps> = ({ data, expanded, toggleExpanded }) => {
    
    const [shouldShowKnowMore, setShouldShowKnowMore] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            // Check if content overflows
            setShouldShowKnowMore(contentRef.current.scrollHeight > contentRef.current.clientHeight);
        }
    }, []);

    return (
        <div id='div1' className={`p-6 border-[0.5px] border-[#2F438F] md:border md:border-[#E5E7EB] rounded-md shadow-lg w-full md:w-[377px] md:bg-[#EAF1FB] relative ${ expanded ? `min-h-[367px] md:h-[50rem]` : 'h-[310px] md:h-[466.5px]'}`}>
            <div id='div2' ref={contentRef} className={`overflow-hidden transition-all ${expanded ? `md:min-h-[707px] md:h-auto` : `h-[258px] md:h-[23rem]`}`}>
                <div className="flex items-center mb-4">
                    <h2 className={`${montserratLightBold.className} text-sm md:text-xl w-[90%]`}>{data.heading}</h2>
                    <Image src={data.icon} alt='icon' className='hidden md:block' unoptimized />
                    <Image src={data.icon} alt='icon' className='absolute top-6 right-6 md:hidden' width={30} height={30} unoptimized/>
                </div>

                <div>
                    <p className={`${rubikReg.className} mb-4 text-xs md:text-lg`}>
                        {data.para}
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                        {data.listArr.map((item, index) => (
                            <li key={index} className='text-xs md:text-lg mb-2'>
                                <span className={`${rubikBold.className}`}>{item.title} </span>
                                {item.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            { shouldShowKnowMore && (
                <div className={`w-full text-right relative bottom-1 md:bottom-0 md:px-2 md:py-2 cursor-pointer`} onClick={toggleExpanded}>
                        <span className={`${rubikReg.className} text-[#2F438F] text-xs md:text-base`}>
                            {expanded ? 'Know Less' : 'Know More'}
                        </span>
                </div>
            )}
        </div>
    );
}

export default WhatIsCarouselCard;