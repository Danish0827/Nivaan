import React from "react";
import Image from "next/image";
import tickIcon from "../../../public/tick-icon.webp";
import tickIconMob from "../../../public/tick-icon-mobile.webp";
import ImageOverlayTxtBtn from "@/components/ImageOverlayTxtBtn";
import ExperienceImg from "../../../public/desktop/indiaGate.webp";
import ExperienceImgMob from "../../../public/mobile/IndiaGateMob.webp";
import { montserratLightBold, montserratSemiBold } from "@/app/fonts";
import { chronicPainExperienceField } from "@/app/api/chronicPainData";

const ExperienceSection = () => {
  return (
    <section className="pt-4 lg:pt-8 w-full md:w-[80%] md:mx-auto">
      <h1
        className={`text-[#2F438F] text-lg lg:text-[2.125rem] lg:leading-[2.75rem] w-3/4 lg:w-1/2 mx-auto text-center mt-4 lg:mt-16 ${montserratLightBold.className}`}
      >
        30+ years of experience in treating chronic pain
      </h1>
      <div className="h-[1px] lg:h-[3px] bg-[#D95326] w-40 my-4 lg:mt-6 lg:mb-12 mx-auto"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 px-2 w-full lg:w-3/4 mx-auto gap-3 lg:gap-6 mb-6 md:mb-16">
        {chronicPainExperienceField.map((field) => (
          <div key={field.id} className="flex flex-row gap-4 items-center pl-6">
            <Image src={tickIcon} alt="tick mark" className="hidden lg:block" unoptimized/>
            <Image
              src={tickIconMob}
              alt="tick mark"
              className="block lg:hidden"
              unoptimized
            />
            <span
              className={`text-[#00B4E5] font-semibold text-base md:text-2xl ${montserratSemiBold.className}`}
            >
              {field.title}
            </span>
          </div>
        ))}
      </div>
      <ImageOverlayTxtBtn
        backgroundImage={ExperienceImg}
        backgroundImageMob={ExperienceImgMob}
        heading="With over 13 clinics in Delhi NCR, we are always near you"
        buttonText="Book Consultation"
      />
    </section>
  );
};

export default ExperienceSection;
