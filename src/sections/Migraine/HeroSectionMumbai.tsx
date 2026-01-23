import { montserratBold, rubikLight} from "@/app/fonts";
import Form_Consultation from "@/components/Form_Consultation";
import FormHeader from "@/components/FormHeader";
import HeaderWithoutCollapse from "@/components/HeaderWithoutCollapse";
import Image from "next/image";
import React from "react";


const HeroSectionMumbai = () => {
  return (
     <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-6 lg:px-0 ">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative md:px-8">
            <div className="flex-1 relative mt-0 md:mt-10">
              <h1
                className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[3rem] text-xl lg:w-[600px] w-60 `}
              >
              Best Migraine <br></br>Treatment in Delhi <br></br>NCR & Mumbai
            </h1>
            <h2 className="hidden">Why Choose Our Clinic for Migraine Relief?</h2>
            <p className="text-[#DB5115] text-xs md:text-lg">
                100% Insurance Coverage<span>*</span>
            </p>

            <ul
            className={`list-disc mt-5 text-xs md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-3 md:px-8`}
            >
                <div className="flex items-center">
                    <li>Non-Surgical Pain Treatment</li>
                </div>
                <li>30 - 60 Minute Procedures</li>
                <li>Insurance Support</li>
            </ul>

            <Image
              src={require("../../../public/migraine1.webp")}
              alt="img"
              className="absolute bottom-0 right-6 translate-y-4 lg:hidden translate-x-6"
              height={190}
              width={190}
              loading="eager"
              priority={true}
              quality={30}
              unoptimized
            />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
          <FormHeader/>
          <Form_Consultation
            formLocation="Hero-Section-Migraine"
            formName="Hero-Section-Form"
            location="mumbai"
          />
        </div>
        <Image
            src={require("../../../public/migraine1.webp")}
            alt="img"
            className="absolute bottom-0 left-[62%] transform -translate-x-1/2 hidden lg:block"
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
