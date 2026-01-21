import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import heroImg from "../../../public/desktop/hero-img.webp";
import heroImgMob from "../../../public/mobile/hero-img-mob.webp";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
import FormHeader from "@/components/FormHeader";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF1FB] pt-1 md:pt-4 px-8 md:px-0 relative">
      <div className="max-w-7xl mx-auto md:mx-18 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1
            className={`${montserratBold.className} text-[#2F438F] md:text-[50px] md:leading-[61px] text-2xl w-3/4 md:w-full`}
          >
            Non Surgical Osteoarthritis Treatment
          </h1>
          <p className={`text-[#DB5115] mt-1 text-sm md:text-xl ${rubikReg.className}`}>
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc md:mt-14 mt-3 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-1 md:gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <div className="flex items-center">
              <li>4.8+ Rating on</li>
              <Image
                src={require("../../../public/googleImage.webp")}
                alt="logo"
                height={20}
                unoptimized
              />
            </div>
            <li>90% Surgeries Avoided</li>
            <li>20K+ Happy Patients</li>
          </ul>
        </div>
        <div className="hidden md:relative md:flex-1 md:flex md:justify-center md:items-center">
          <Image
            className="absolute top-[9.55rem] right-[-60px]"
            src={heroImg}
            alt="hero Img"
            width={452}
            height={422}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="relative flex-1 flex justify-center items-center md:hidden w-40 h-36">
          <Image
            className="absolute bottom-8 left-[11.5rem]"
            //fetchPriority="high"
            src={heroImgMob}
            alt="hero Img"
            width={210}
            height={193}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-1 md:gap-3 mt-1 md:mt-16 z-10 relative top-[-4.7rem]">
          <FormHeader />
          <Form
            formLocation="Hero-Section-Osteoarthritis-Page"
            formName="Hero-Section-Form"
          />
        </div>
      </div>
      <div className="mt-[-3.5rem] md:mt-12">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
