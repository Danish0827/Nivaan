"use client";
import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form2 from "@/components/Form2";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import heroImg from "../../../public/desktop/radiofrequencyablation/radioFrequencyAblationHero.webp";
import heroImgMob from "../../../public/mobile/radiofrequencyablation/radioFrequencyAblationHeroMob.webp";
const HeroSection = () => {
  const pathName = usePathname();
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl text-2xl lg:w-[600px] w-60 `}
          >
            Chronic Pain Treatment with Radiofrequency Ablation in Delhi NCR
          </h1>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-base lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc mt-14 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <li>30 - 60 Minutes Procedure</li>
            <li>96% Success Rate</li>
            <li>Insurance Support</li>
          </ul>
          <Image
            src={heroImgMob}
            alt="img"
            className="absolute bottom-0 right-[-0.30rem] translate-y-10 lg:hidden translate-x-6"
            height={160}
            width={150}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
          <FormHeader />
          <Form2
            formLocation={"/next/radio-frequency-ablation"}
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={heroImg}
          alt="img"
          className="absolute bottom-0 left-[53%] transform -translate-x-1/2 hidden lg:block"
          height={300}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
      <div className="mt-8 lg:mt-0">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
