import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
import heroImg from "../../../public/desktop/painkillers_pc.webp";
import heroImgMob from "../../../public/mobile/painkillers_mob.webp";
import Form_Consultation from "@/components/Form_Consultation";

const HeroSectionMumbai = () => {
  return (
    <div className="bg-[#EAF1FB] pt-1 md:pt-8 px-8 md:px-0 relative">
      <div className="max-w-7xl mx-auto md:mx-18 flex flex-col lg:flex-row gap-10">
        <div className="flex-1 mt-4 md:mt-0 mb-10 md:mb-0">
          <h1
            className={`${montserratBold.className} text-[#2F438F] text-2xl md:text-5xl w-[100%] md:w-[140%] pb-0 md:pb-3`}
          >
            Tired Of Taking Painkillers?
          </h1>
          <p className="text-[#2F438F] text-sm pb-3 md:text-2xl w-[90%] md:w-[120%]">
            Choose Nivaan&apos;s One-Time Non-Surgical Pain Treatment
          </p>
          
          <p className="text-[#DB5115] text-xs lg:text-xl">
            100% Insurance Coverage<span>*</span>
          </p>
          <ul
            className={`list-disc lg:mt-8 mt-3 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-1 md:gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <div className="flex items-center">
              <li>4.8+ Rating on</li>
              <Image
                src={require("../../../public/googleImage.webp")}
                alt="logo"
                height={40}
                className="hidden md:block"
                unoptimized
              />
              <Image
                src={require("../../../public/googleImage.webp")}
                alt="logo"
                height={30}
                className="block md:hidden"
                unoptimized
              />
            </div>
            <li>90% Surgeries Avoided</li>
            <li>20K+ Happy Patients</li>
          </ul>
        </div>
        <div className="hidden md:relative md:flex md:flex-1 md:justify-center md:items-center">
          <Image
            className="absolute top-[3.7rem] right-[-60px]"
            src={heroImg}
            alt="hero Img"
            width={400} // Add width
            height={400} // Add height
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="relative flex flex-1 justify-center items-center md:hidden w-36 h-24">
          <Image
            className="absolute bottom-[1.5rem] left-[200px]"
            src={heroImgMob}
            alt="hero Img"
            width={300}
            height={300}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-1 md:gap-3 mt-1 md:mt-16 z-10 relative top-[-4.3rem]">
          <FormHeader />
          <Form_Consultation
            formLocation="Hero-Section-PainMedication"
            formName="Hero-Section-Form"
            location="mumbai"
          />
        </div>
      </div>
      <div className="mt-[-3.5rem] md:mt-0">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSectionMumbai;
