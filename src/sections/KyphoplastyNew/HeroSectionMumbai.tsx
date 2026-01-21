import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import Form_Consultation from "@/components/Form_Consultation";
import FormHeader from "@/components/FormHeader";
import HeaderWithoutCollapse from "@/components/HeaderWithoutCollapse";
import Image from "next/image";
import React from "react";
const HeroSectionMumbai = () => {
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-4xl text-2xl md:w-[30rem] w-80 md:mt-8`}
          >
            Chronic Pain Treatment with Kyphoplasty in Delhi NCR & Mumbai
          </h1>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-base lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p>
          <ul
            className={`list-disc mt-10 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <li>40 - 60 Minutes Procedure</li>
            <li>96% Success Rate</li>
            <li>Insurance Support</li>
          </ul>
            <Image
              src={require("../../../public/anthroplasty_doctorMob.webp")}
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
          <Form_Consultation
            formLocation="Hero-Section-Next-Kyphoplasty"
            formName="Hero-Section-Form"
            location="mumbai"
          />
        </div>
          <Image
            src={require("../../../public/anthroplasty_doctor.webp")}
            alt="img"
            className="absolute bottom-0 left-[53%] transform -translate-x-1/2 hidden lg:block"
            height={300}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
      </div>
      <div className="mt-8 w-[100vw] relative right-8 md:w-[90vw] md:left-12 lg:mt-0">
        <HeaderWithoutCollapse/>
      </div>
    </div>
  );
};

export default HeroSectionMumbai;
