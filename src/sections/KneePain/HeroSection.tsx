import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
import heroImg from "../../../public/desktop/kneePainHeroImg.webp";
import heroImgMob from "../../../public/mobile/kneePainHeroImgMob.webp";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF1FB] pt-1 md:pt-8 px-8 md:px-0 relative">
      <div className="max-w-7xl mx-auto md:mx-18 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl w-[140%] hidden md:block`}
          >
            Non Surgical Knee
            <br /> Pain Treatment
          </h1>
          <h1
            className={`${montserratBold.className} text-[#2F438F] text-2xl block md:hidden w-[100%]`}
          >
            Non Surgical <br />
            Knee Pain <br />
            Treatment
          </h1>
          <p className="text-[#DB5115] mt-1 text-sm lg:text-xl">
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc lg:mt-14 mt-3 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-1 md:gap-2 ${rubikLight.className} px-4 md:px-8`}
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
        <div className="hidden md:relative md:flex md:flex-1 md:justify-center md:items-center">
          <Image
            className="absolute top-[8.5rem] right-[-60px]"
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
        <div className="relative flex flex-1 justify-center items-center md:hidden w-28 h-24">
          <Image
            className="absolute bottom-[1.5rem] left-56"
            src={heroImgMob}
            alt="hero Img"
            width={178}
            height={171}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center gap-1 md:gap-3 mt-1 md:mt-16 z-10 relative top-[-4.3rem]">
          <FormHeader />
          <Form
            formLocation="Hero-Section-KneePain-Page"
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
