import { montserratBold, rubikLight } from "@/app/fonts";
import Form2 from "@/components/Form2";
import FormHeader from "@/components/FormHeader";
import HeaderWithoutCollapse from "@/components/HeaderWithoutCollapse";
import Image from "next/image";
import React from "react";

const HeroSectionJaipur = () => {
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto my-0 flex flex-col lg:flex-row gap-10 relative md:px-8">
        <div className="flex-1 relative top-0 md:top-6 w-[100%] md:w-[20%]">
          <h1 className={`${montserratBold.className} text-[#2F438F] lg:text-4xl text-2xl lg:w-[85%] w-[100%] `}>
            Nerve Block<br/>Procedure in Delhi<br/> NCR & Jaipur
          </h1>
          <p className="text-[#DB5115] text-xs md:text-lg">
            100% Insurance Coverage<span>*</span>
          </p>
            <ul
            className={`list-disc mt-5 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
            >
              <li>Non-Surgical Pain Treatment</li>
              <li>30 Minute Procedures</li>
              <li>Insurance Support</li>
            </ul>
            <Image
               src={require("../../../public/anthroplasty_doctor.webp")}
              alt="img"
              className="absolute bottom-12 right-6 translate-y-10 lg:hidden translate-x-6"
              height={130}
              width={130}
              loading="eager"
              priority={true}
              quality={30}
              unoptimized
            />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center mt-[-12px] lg:items-end gap-1 md:gap-3 z-10 lg:pb-14">
          <FormHeader/>
          <Form2
            formLocation={"Hero-Section-Next-Nerve-Block"}
            formName="Hero-Section-Form"
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

export default HeroSectionJaipur;
