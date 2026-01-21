import { montserratBold, rubikLight, rubikReg } from '@/app/fonts';
import Form from '@/components/Form';
import FormHeader from '@/components/FormHeader';
import FormMumbai from '@/components/FormMumbai';
import HeaderWithoutCollapse from '@/components/HeaderWithoutCollapse';
import Image from 'next/image';
import React from 'react';
const HeroSectionMumbia = () => {
  return (
    <div className="bg-[#EAF1FB] pt-0 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[53.64px] text-3xl lg:w-[600px] mt-2 lg:mt-20`}
          >
            Best Knee Pain
            <br /> Treatment in Delhi
            <br /> NCR & Mumbai<br />
            
          </h1>
          <h2 className="hidden">Advanced Knee Pain Treatment in Delhi NCR & Mumbai</h2>
          <p
            className={`text-[#DB5115] mt-1 md:mt-4 text-sm lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p>
          <ul
            className={`list-disc mt-2 md:mt-6 text-[12.23px] leading-[14.5px] md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-6`}
          >
            <li>Non-Surgical Pain Treatment</li>
            <li>30 - 60 Minute Procedures</li>
            <li>Insurance Support</li>
          </ul>
          <Image
            src={require('../../../public/Deepa-Knee-Pain 1.webp')}
            alt="img"
            className="absolute bottom-4 right-0 translate-y-24 md:hidden translate-x-6"
            height={140}
            width={130}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-1 md:gap-3 z-10 -md:pb-6 mt-16">
          <FormHeader />
          <FormMumbai
            formLocation="Knee Treatment Hero Section Form"
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={require('../../../public/kneePainWoman.webp')}
          alt="img"
          className="absolute -bottom-36 left-[48%] transform -translate-x-1/2 hidden md:block"
          width={391}
          height={472}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
      <div className="mt-4 w-[100vw] relative right-8 md:w-[90vw] md:left-12 md:top-16 mb:mt-4">
        <HeaderWithoutCollapse />
      </div>
    </div>
  );
};

export default HeroSectionMumbia;
