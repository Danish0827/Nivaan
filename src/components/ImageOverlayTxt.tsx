import React from "react";
import Image, { StaticImageData } from "next/image";
import { rubikReg } from "@/app/fonts";

interface WhatIsSectionProps {
  isAffected?: boolean;
  ImgSrc: StaticImageData;
  ImgSrcMob: StaticImageData;
  ImgTxt: string;
  separatorColor?: string;
  imageTextColor?: string;
  hideImageOverlayText?: boolean;
  imageAltText?: string;
}

const ImageOverlayTxt: React.FC<WhatIsSectionProps> = (props) => {
  return (
    <div className="relative w-full">
      <div className="hidden md:block">
        <Image
          src={props.ImgSrc}
          alt={props.imageAltText || "bg-img"}
          className="mx-auto"
          width={1190}
          height={240}
          unoptimized
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={props.ImgSrcMob}
          alt={props.imageAltText || "bg-img"}
          className="w-full transform md:scale-125 scale-100"
          unoptimized
        />
      </div>
      {props.hideImageOverlayText ? null : (
        <div className="absolute inset-y-0 left-[9rem] items-center bg-opacity-50 p-3 w-[60%] md:p-8 md:left-[27rem] md:right-24 md:flex md:w-[60%]">
          <div className="flex flex-row gap-4 w-[99%]">
            <div
              className="bg-[#EAF1FB] w-1 h-[5.5625rem] md:w-3 md:h-32"
            ></div>
            <p
              className={`${rubikReg.className} text-white text-xs md:text-2xl`}
            >
              {props.ImgTxt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOverlayTxt;