import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { rubikBold, rubikReg, montserratLightBold } from '@/app/fonts';
import { WhatIsCarouselCardType } from '@/app/api/allTypes';

interface WhatIsCarouselCardProps {
    data: WhatIsCarouselCardType;
    index: number;
    expanded: boolean;
    toggleExpanded: (index: number) => void;
}

const WhatIsCarouselCard: React.FC<WhatIsCarouselCardProps> = ({ data, index, expanded, toggleExpanded }) => {
    
    const [shouldShowKnowMore, setShouldShowKnowMore] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            // Check if content overflows
            setShouldShowKnowMore(contentRef.current.scrollHeight > contentRef.current.clientHeight);
        }
    }, []);

    return (
        <div className={`
            p-6 border-[0.5px] border-[#2F438F] md:border md:border-[#E5E7EB] 
            rounded-md shadow-lg w-full md:w-[377px] 
            md:bg-[#EAF1FB] relative 
            ${expanded ? 'h-[342px] md:h-[42rem]' : 'h-[328px] md:h-[466.5px]'}
        `}>
            <div className="flex items-start mb-4">
                <h2 className={`${montserratLightBold.className} text-sm md:text-xl w-[90%]`}>{data.heading}</h2>
                <Image src={data.icon} alt='icon' className='hidden md:block md:-mt-4' unoptimized/>
                <Image src={data.icon} alt='icon' className='absolute top-4 right-3 md:hidden' width={30} height={30} unoptimized/>
            </div>

            <div ref={contentRef} className={`
                overflow-hidden transition-all 
                ${expanded ? 'md:h-auto' : 'h-[202px] md:h-[18rem]'}
            `}>
                <p className={`${rubikReg.className} mb-4 text-xs md:text-lg`}>
                    {data.para}
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    {data.listArr.map((item, listIndex) => (
                        <li key={listIndex} className={`${rubikReg.className} text-xs md:text-lg mb-2`}>
                            <span className={`${rubikBold.className}`}>{item.title} </span>
                            {item.desc}
                        </li>
                    ))}
                </ul>
            </div>
            {shouldShowKnowMore && (
                <div className={`
                    w-full text-right md:px-2 md:py-2 cursor-pointer
                `} onClick={() => toggleExpanded(index)}>
                    <span className={`${rubikReg.className} text-[#2F438F] text-xs md:text-base`}>
                        {expanded ? 'Know Less' : 'Know More'}
                    </span>
                </div>
            )}
        </div>
    );
}

export default WhatIsCarouselCard;
