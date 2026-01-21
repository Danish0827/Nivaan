import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import Image from "next/image";
import React from "react";
import Form2 from "@/components/Form2";
import HeaderWithoutCollapse from "@/components/HeaderWithoutCollapse";

interface HeroSectionProps {
  pathName?: string;
  heading: string;
  imgSrc: string;
  imgSrcMob?: string;
  imgStyle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ pathName, heading, imgSrc, imgSrcMob, imgStyle }) => {
  const isNerveBlockNew = pathName === "/next/nerve-block-new";
  const isSciaticaPainNew = pathName === "/next/sciatica-pain-new";
  const isBackPainTreatment = pathName === "/next/back-pain-treatment";
  const defaultImgStyle = "w-[150px] lg:w-[300px] h-[126px] lg:h-[276px] absolute -bottom-14 -right-8 lg:absolute lg:bottom-0 lg:right-0"
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-6 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-10 relative md:px-8">
        <div className="flex-1 relative mt-0 md:mt-10">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[3rem] text-xl lg:w-[600px] w-60 `}
          >
            Effective Back Pain<br /> Treatment in Delhi<br /> NCR
          </h1>
          <h2 className="hidden">EEffective Back Pain Treatment Solutions in Delhi NCR & Lucknow</h2>
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


          {/* <div className="relative flex flex-row justify-between lg:h-[57%]"> */}
          {/* {isNerveBlockNew || isSciaticaPainNew || isBackPainTreatment ? (
              <ul
                className={`list-disc mt-7 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
              >
                <div className="">
                  <li>Non-Surgical Pain Treatment</li>
                  {isBackPainTreatment ? (
                    <li>30 - 60 Minute Procedures </li>
                  ) : (
                    <li>30 Minute Procedures</li>
                  )}
                  <li>Insurance Support</li>
                </div>
              </ul>
            ) : (
              <ul
                className={`list-disc mt-7 lg:mt-14 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8 w-[60%] lg:w-auto`}
              >
                <div className="flex items-center">
                  <li>4.8+ Rating on</li>
                  <Image
                    src={require("../../../../public/google.webp")}
                    alt="logo"
                    height={30}
                    className="hidden md:block"
                  />
                  <Image
                    src={require("../../../../public/google.webp")}
                    alt="logo"
                    height={20}
                    className="absolute bottom-7 right-[-0.50rem] translate-y-10 lg:hidden translate-x-6"
                    priority={true}
                    loading="eager"
                  />
                </div>
                <li>90% Surgeries Avoided</li>
                <li>20K + Happy Patients</li>
              </ul>
            )} */}
          <Image
            src={imgSrc}
            alt="img"
            className="absolute bottom-12 right-[-0.50rem] translate-y-10 lg:hidden translate-x-5"
            height={160}
            width={150}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
          <Image
            src={imgSrc}
            alt="img"
            className="absolute top-[15px] left-[101.7%] transform -translate-x-1/2 hidden lg:block w-[321px] h-[440px]"
            height={0}
            width={300}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
          {/* </div> */}


        </div>
        <div>
          {isNerveBlockNew || isSciaticaPainNew ? (
            <div className="mt-3 flex-1 flex justify-center flex-col items-center lg:items-end gap-1 md:gap-3 z-10 pb-2 lg:pb-14">
              <FormHeader />
              <Form2
                formLocation={pathName}
                formName="Hero-Section-Form"
              />
            </div>
          ) : (
            <div className="mt-14 flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
              <FormHeader />
              <Form
                formLocation={pathName}
                formName="Hero-Section-Form"
              />
            </div>
          )}
        </div>
      </div>
      {isBackPainTreatment ? (
        <div className="mt-8 w-[100vw] relative right-8 md:w-[90vw] md:left-12 lg:mt-0">
          <HeaderWithoutCollapse />
        </div>
      ) : (
        <div className="mt-10 lg:mt-0">
          <HeaderMetric />
          <HeadMetricMob />
        </div>
      )}
    </div>
  );
};

export default HeroSection;




