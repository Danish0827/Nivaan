import { montserratBold, rubikLight } from "@/app/fonts";
import Form from "@/components/Form";
import Form_2 from "@/components/Form_2";
import FormHeader from "@/components/FormHeader";
import HeaderWithoutCollapse from "@/components/HeaderWithoutCollapse";
import Image from "next/image";
import React from "react";
import FormAd__1 from "../FormAd/FormAd__1";
import FormAd__2 from "../FormAd/FormAd_2";
import FormAd2_new from "../FormAd/FormAd2_new";
import FormAd_new from "../FormAd/FormAd_new";
import Form_Consultation from "@/components/Form_Consultation";


const HeroSectionMumbai = () => {
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-8">
        <div className="flex-1 relative top-6 w-[100%] md:w-[20%]">
          <h1 className={`${montserratBold.className} text-[#2F438F] lg:text-4xl text-2xl lg:w-[80%] w-[100%] `}>
            Chronic Pain Treatment with Arthroplasty in Delhi NCR & Mumbai
          </h1>
          <p className="text-[#DB5115] text-xs md:text-lg">
            100% Insurance Coverage<span>*</span>
          </p>
            <ul
            className={`list-disc mt-5 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
            >
              <div className="flex items-center">
                <li>60 - 90 Minutes Procedure</li>
              </div>
              <li>96% Success Rate</li>
              <li>Insurance Support</li>
            </ul>
            <Image
              src={require("../../../public/anthroplasty_doctor.webp")}
              alt="img"
              className="absolute bottom-12 right-6 translate-y-10 lg:hidden translate-x-6"
              height={130}
              width={120}
              loading="eager"
              priority={true}
              quality={30}
              unoptimized
            />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
          <FormHeader/>
          <Form_Consultation
            formLocation="Hero-Section-Chronic-Pain-Arthroplasty"
            formName="Hero-Section-Form"
            location="mumbai"
          />
        </div>
            <Image
              src={require("../../../public/anthroplasty_doctor.webp")}
              alt="img"
              className="absolute bottom-0 left-[60%] transform -translate-x-1/2 hidden lg:block"
              height={400}
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
