import { montserratBold, rubikLight, rubikReg } from "@/app/fonts";
import Form from "@/components/Form";
import FormHeader from "@/components/FormHeader";
import Image from "next/image";
import React from "react";
import Form2 from "@/components/Form2";
import HeaderMetric_2 from "@/components/HeaderMetric_2";
import HeadMetricMob2 from "@/components/HeadMetricMob2";

interface HeroSectionProps {
  pathName?: string;
  heading: string;
  imgSrc: string;
  imgSrcMob?: string;
  imgStyle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ pathName, heading, imgSrc, imgSrcMob, imgStyle }) => {
  const defaultImgStyle = "w-[150px] lg:w-[300px] h-[126px] lg:h-[276px] absolute -bottom-14 -right-8 lg:absolute lg:bottom-0 lg:right-0"
  return (
    <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-6 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:gap-10 relative md:px-8">
        <div className="flex-1 relative mt-0 md:mt-10">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[3rem] text-xl lg:w-[600px] w-60 `}
          >
            Knee Pain While<br /> Walking? It might<br /> be an ACL Injury
          </h1>
          <h2 className="hidden">Knee Pain While Walking? It might be an ACL Injury</h2>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-sm lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p>
          <ul
            className={`list-disc mt-2 md:mt-8 text-sm md:text-[1.66rem] md:leading-[1.80rem] text-[#1E1E1E] flex flex-col gap-1 md:gap-2 ${rubikLight.className} px-4 md:px-2`}
          >
            <p className="font-medium">Get checked by Delhi</p>
            <p className="font-medium">NCR’s top knee specialists</p>
            <p className="font-medium">Recover early, without</p>
            <p className="font-medium">complex surgery.</p>
          </ul>
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
        </div>
        <div>
          <div className="mt-14 flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
            <FormHeader />
            <Form
              formLocation={pathName}
              formName="Hero-Section-Form"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <HeaderMetric_2 />
        <HeadMetricMob2 />
      </div>
    </div>
  );
};

export default HeroSection;




