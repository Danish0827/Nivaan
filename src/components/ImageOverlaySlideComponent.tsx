import Image from 'next/image';
import React from 'react';
import { montserratSemiBold, montserratSemiSemiBold } from '@/app/fonts';
import { overlaySlideDataType } from '@/app/api/allTypes';

const ImageOverlaySlideComponent = ({overlaySlideData}: {overlaySlideData: overlaySlideDataType}) => {
  return (
    <div className="relative overflow-hidden w-[21rem]">
      {/* Image */}
      <div className="relative group">
        <Image
          src={overlaySlideData.img}
          alt="Sample Image"
          layout="responsive"
          width={500}
          height={300}
          className="w-full h-auto hidden md:block"
          unoptimized
        />
          <Image
            src={overlaySlideData.img}
            alt="Sample Image"
            layout="responsive"
            width={500} 
            height={300}
            className="w-full h-auto block md:hidden"
            unoptimized
          />
        {/* Overlay */}
        <div className="rounded-xl absolute inset-0 bg-[#2985BBE5] text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col items-start">
          <h3 className={`${montserratSemiBold.className} text-xs md:text-lg py-2 md:py-6 px-6 md:px-10`}>{overlaySlideData.title}</h3>
          <div className='bg-white h-0.5 w-full'></div>
          <p className={`${montserratSemiSemiBold.className} text-white text-[10.19px] leading-[16.98px] px-6 pt-2 md:text-xs md:pb-12 md:pt-6 md:px-10 text-left`}>{overlaySlideData.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlaySlideComponent;
