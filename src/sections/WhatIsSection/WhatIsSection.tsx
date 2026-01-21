import { montserratLightBold } from '@/app/fonts'
import React from 'react'
import { StaticImageData } from 'next/image';
import ImageOverlayTxt from '@/components/ImageOverlayTxt';
import WhatIsCarousel from '@/components/WhatIsCarousel2';
import { WhatIsCarouselCardType } from '@/app/api/allTypes';

interface WhatIsSectionProps {
  isAffected?: boolean;
  heading: string;
  ImgSrc: StaticImageData;
  ImgSrcMob: StaticImageData;
  ImgTxt: string;
  cardData: WhatIsCarouselCardType[];
  separatorColor?: string;
  imageTextColor?: string;
  hideImageOverlayText?: boolean;
  imageAltText?: string;
}

const WhatIsSection: React.FC<WhatIsSectionProps> = ({
  isAffected,
  heading,
  ImgSrc,
  ImgSrcMob,
  ImgTxt,
  cardData,
  // separatorColor = "#EAF1FB", // Default value
  // imageTextColor = "#FFFFFF", // Default value
  separatorColor = "black", // Default value
  imageTextColor = "black", // Default value
  imageAltText,
  hideImageOverlayText,

}) => {
  return (
    <div className="mb-8 md:mb-20">
      <h2
        className={`${montserratLightBold.className} text-lg md:text-[2.625rem] text-[#2F438F] text-center my-8 md:my-12`}
      >
        {heading}
      </h2>
      <ImageOverlayTxt
        isAffected={isAffected}
        imageAltText={imageAltText}
        hideImageOverlayText={hideImageOverlayText}
        ImgSrc={ImgSrc}
        ImgSrcMob={ImgSrcMob}
        ImgTxt={ImgTxt}
        separatorColor={separatorColor}
        imageTextColor={imageTextColor}
      />
      {cardData && cardData.length > 0 ?<WhatIsCarousel cardData={cardData} /> : null}
      
    </div>
  );
};

export default WhatIsSection;