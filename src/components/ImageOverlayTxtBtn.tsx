'use client'
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { montserratSemiBold, rubikSemiBold } from "@/app/fonts";

import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form2 from "./Form2";
import Form from "./Form";

interface ImageOverlayTxtBtnProps {
  backgroundImage: StaticImageData;
  backgroundImageMob: StaticImageData;
  heading: string;
  buttonText: string;
}

const ImageOverlayTxtBtn: React.FC<ImageOverlayTxtBtnProps> = ({
  backgroundImage,
  backgroundImageMob,
  heading,
  buttonText,
}) => {
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
    sendGTMEvent({
      event: "Form Open",
      value: {
        "Form Name": "NavBar-Form",
        "CTA Button text": "Book Consultation",
        "Landing Page URL": landingPageUrl,
      },
    });
  };
  const handleCloseModal = () => {
    setModal(!modal);
    sendGTMEvent({
      event: "Form Close",
      value: {
        "Form Name": "Experience-Section-Form",
        "CTA Button text": null,
        "Landing Page URL": landingPageUrl,
      },
    });
  };
  return (
    <div className="relative w-full lg:[970px] h-[10.5rem] md:h-96 bg-cover bg-center">
      <div className="hidden md:block absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          unoptimized
        />
      </div>
      <div className="md:hidden absolute inset-0">
        <Image
          src={backgroundImageMob}
          alt="Background Mobile"
          layout="fill"
          objectFit="cover"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-[#2F438FCC] flex flex-col items-center justify-center text-white px-12 md:px-60">
        <h1
          className={`text-base md:text-[2.55rem] md:leading-[3.1rem] font-bold mb-4 md:mb-8 text-center ${montserratSemiBold}`}
        >
          {heading}
        </h1>
        <button
          className={`md:text-[1.8rem] text-[0.90rem] bg-[#DB5115] w-[13.25rem] md:w-96 px-3 py-2 md:py-4 rounded-lg font-semibold hover:bg-[#BF3F0E] transition duration-200 ${rubikSemiBold}`}
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
      {modal && (
        <div
          className="fixed top-0 h-full w-full flex justify-center items-center z-[99] "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
            <Form2 formName="NavBar-Form" />
            <X
              className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageOverlayTxtBtn;
