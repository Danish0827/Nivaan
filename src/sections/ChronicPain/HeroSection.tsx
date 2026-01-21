import {
  montserratLightBold,
  rubikLight,
  rubikReg,
  montserratSemiBold,
} from "@/app/fonts";
import FormHeader from "@/components/FormHeader";
import Image from "next/image";
import React from "react";
import Form2 from "@/components/Form2";
//import { usePathname } from "next/navigation";

interface HeroSectionProps {
  pathName: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ pathName }) => {
  //onst pathName = usePathname();
  
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-8 px-8 lg:px-0 pb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 lg:gap-10 relative md:px-8">
        <div className="flex-1 relative">
          {pathName === "/v1/dr-video-women-new" ? (
            <>
              <h1
                className={`${montserratLightBold.className} text-[#2F438F] text-[1.063rem] w-[80%] block md:hidden ${montserratSemiBold.className}`}
              >
                Scientifically Proven
                <br /> Non-Surgical Treatment for
                <br /> Knee Pain
              </h1>
              <h1
                className={`${montserratSemiBold.className} text-[#2F438F] md:text-5xl md:w-[120%] hidden md:block`}
              >
                Scientifically Proven
                <br /> Non-Surgical Treatment
                <br /> for Knee Pain
              </h1>
            </>
          ) : (
            <>
              <h1
                className={`${montserratLightBold.className} text-[#2F438F] text-[1.063rem] w-[80%] block md:hidden ${montserratSemiBold.className}`}
              >
                Scientifically Proven
                <br /> Non-Surgical Treatment for
                <br /> Back Pain
              </h1>
              <h1
                className={`${montserratSemiBold.className} text-[#2F438F] md:text-5xl md:w-[120%] hidden md:block`}
              >
                Scientifically Proven
                <br /> Non-Surgical Treatment
                <br /> for Back Pain
              </h1>
            </>
          )}
          <p
            className={`text-[#DB5115] mt-2 md:mt-6 text-sm md:text-2xl ${rubikReg.className}`}
          >
            100% Insurance Coverage
          </p>
          <ul
            className={`list-disc lg:mt-14 mt-6 text-xs md:text-xl text-[#1E1E1E] flex flex-col gap-2 md:gap-4 ${rubikLight.className} px-4 lg:px-8 w-[60%] lg:w-1/2`}
          >
            <li>20K+ Happy Patients</li>
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
            <li>9.3X more effective than other treatments</li>
          </ul>
          <Image
            src={require("../../../public/mobile/Chronic_Hero_Img_Mob.webp")}
            alt="img"
            className="absolute bottom-8 right-[-0.30rem] translate-y-10 lg:hidden translate-x-6"
            height={160}
            width={150}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="mt-3 flex-1 flex justify-center flex-col items-center lg:items-end gap-1 md:gap-3 z-10 pb-2 lg:pb-14">
          <FormHeader />
          <Form2
            formLocation={
              pathName === "/v1/dr-video-women-new"
                ? "Hero-Section-Dr-Video-Women-New"
                : "Hero-Section-Dr-Video-Men-New"
            }
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={require("../../../public/desktop/Chronic_Hero_Img.webp")}
          alt="img"
          className="absolute bottom-[-4.8em] left-[50%] transform -translate-x-1/2 hidden lg:block"
          height={495}
          width={454}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
      {/* <div className="mt-8 md:mx-auto">
        <HeaderMetric2 />
        <HeadMetricMob />
      </div> */}
    </div>
  );
};

export default HeroSection;
