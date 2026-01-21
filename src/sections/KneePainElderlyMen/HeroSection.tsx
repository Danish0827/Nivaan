import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
const HeroSection = ({pathName}: {pathName: string}) => {
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl text-2xl lg:w-[600px] w-60 `}
          >
            Non Surgical Knee Pain Treatment
          </h1>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-base lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc mt-14 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <div className="flex items-center">
              <li>4.8+ Rating on</li>
              <Image
                src={require("../../../public/google.webp")}
                alt="logo"
                height={30}
                className="hidden md:block"
                unoptimized
              />
              <Image
                src={require("../../../public/google.webp")}
                alt="logo"
                height={20}
                className="block md:hidden"
                unoptimized
              />
            </div>
            <li>90% Surgeries Avoided</li>
            <li>20K + Happy Patients</li>
          </ul>
          {pathName === "/v1/knee-pain-elderly-men-new" ? (
            <Image
              src={require("../../../public/mobile/knee-pain-elderly-men-mob.webp")}
              alt="img"
              className="absolute bottom-0 right-[-0.30rem] translate-y-10 lg:hidden translate-x-6"
              height={160}
              width={150}
              loading="eager"
              priority={true}
              quality={30}
              unoptimized
            />
          ) : (
            <Image
              src={require("../../../public/mobile/kneepainelderlywomen_mob.webp")}
              alt="img"
              className="absolute bottom-0 right-[-0.50rem] translate-y-10 lg:hidden translate-x-6"
              height={160}
              width={150}
              loading="eager"
              priority={true}
              quality={30}
              unoptimized
            />
          )}
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
          <FormHeader />
          <Form
            formLocation={
              pathName === "/v1/knee-pain-elderly-men"
                ? "Hero-Section-Knee-Pain-Elderly-Men"
                : "Hero-Section-Knee-Pain-Elderly-Women"
            }
            formName="Hero-Section-Form"
          />
        </div>
        {pathName === "/v1/knee-pain-elderly-men-new" ? (
          <Image
            src={require("../../../public/desktop/knee-pain-elderly-men.webp")}
            alt="img"
            className="absolute bottom-0 left-[53%] transform -translate-x-1/2 hidden lg:block"
            height={300}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        ) : (
          <Image
            src={require("../../../public/desktop/kneepainelderlywomen.webp")}
            alt="img"
            className="absolute bottom-0 left-[53%] transform -translate-x-1/2 hidden lg:block"
            height={300}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        )}
      </div>
      <div className="mt-8 lg:mt-0">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSection;
