import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import FormHeader from "@/components/FormHeader";
import HeadMetricMob from "@/components/HeadMetricMob";
import HeaderMetric from "@/components/HeaderMetric";
import dynamic from "next/dynamic";
import Image from "next/image";
import mobImage from "../../../public/wKp.webp";
//import { usePathname } from "next/navigation";
import React from "react";
const HeroSectionKPW = ({pathName, imgStyle}: {pathName: string, imgStyle?: string}) => {
  //const pathName = usePathname();
  const Form = dynamic(() => import("@/components/Form"));
  const defaultImgStyle = "absolute bottom-0 right-0 translate-y-14 lg:hidden translate-x-6 h-40 w-36"

  return (
    <div className="bg-[#EAF1FB] pt-1 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-5xl text-2xl lg:w-[600px] w-60 `}
          >
            {pathName === "/v1/herniated-new"
              ? "Non-Surgical Herniated Disc Treatment" 
              : pathName === "/v1/knee-pain-women-new"||pathName==="/v1/jaipur/knee-pain-women-new"||pathName==="/v1/lucknow/knee-pain-women-new"||pathName==="/v1/mumbai/knee-pain-women-new" ? "Non Surgical Knee Pain Treatment" : "Non Surgical Back Pain Treatment"}
          </h1>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-sm lg:text-xl ${rubikReg.className}`}
          >
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
                className="lg:h-8 h-4 w-4 lg:w-8"
                unoptimized
              />
            </div>
            <li>90% Surgeries Avoided</li>
            <li>20K + Happy Patients</li>
          </ul>

          <Image
            src={mobImage}
            alt="img"
            className={imgStyle ? imgStyle : defaultImgStyle}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col lg:items-end gap-1 md:gap-3 z-10 lg:pb-14 mt-[1rem]  items-center">
          <FormHeader />
          <Form formLocation={""} formName="Hero-Section-Form" />
        </div>

        <Image
          src={require("../../../public/desktop/knee-pain-desk.webp")}
          alt="img"
          className="absolute -bottom-8 left-[52%] transform -translate-x-1/2 hidden lg:block"
          height={300}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>

      <div className="mt-8 lg:mt-0 lg:-translate-y-10">
        <HeaderMetric />
        <HeadMetricMob />
      </div>
    </div>
  );
};

export default HeroSectionKPW;
