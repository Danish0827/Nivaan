import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
const HeroSectionLucknow = () => {
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-6 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative md:px-8">
        <div className="flex-1 relative mt-0 md:mt-10">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[3rem] text-xl lg:w-[600px] w-60 `}
          >
            Best Hip Pain<br/> Treatment in Delhi<br/>  NCR & Lucknow
          </h1>
          <h2 className="hidden">Expert Hip Pain Treatment Solutions in Delhi NCR & Lucknow </h2>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-sm lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p>
          <ul
            className={`list-disc mt-2 md:mt-14 text-sm md:text-[1.66rem] md:leading-[1.98rem] text-[#1E1E1E] flex flex-col gap-1 md:gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <li>Non-Surgical Pain Treatment</li>
            <li>30 - 60 Minute Procedures</li>
            <li>Insurance Support</li>
          </ul>
            <Image
              src={require("../../../public/hipPainMob.webp")}
              alt="img"
              className="absolute bottom-14 -right-6 translate-y-10 lg:hidden translate-x-5"
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
          <Form
            formLocation={"Hero-Section-Next-Hip-Pain"}
            formName="Hero-Section-Form"
          />
        </div>
          <Image
            src={require("../../../public/hipPain.webp")}
            alt="img"
            className="absolute bottom-4.5 left-[62%] transform -translate-x-1/2 hidden lg:block"
            width={315}
            height={440}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
      </div>
      <div className="mt-8 lg:mt-[-18px]">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSectionLucknow;