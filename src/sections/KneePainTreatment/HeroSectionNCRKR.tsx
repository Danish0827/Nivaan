import { montserratBold,montserratSemiSemiBold, rubikLight, rubikReg } from '@/app/fonts';
import Form from '@/components/Form';
import FormHeader from '@/components/FormHeader';
import HeaderWithoutCollapse from '@/components/HeaderWithoutCollapse';
import Image from 'next/image';
import React from 'react';
const HeroSectionNCR = () => {
  return (
    <div className="bg-[#EAF1FB] pt-0 md:pt-6 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#0F99D6] lg:text-[2.5rem] lg:leading-[53.64px] md:text-3xl text-2xl lg:w-[600px] mt-2 lg:mt-20`}
          >
            Resurface! Don’t Replace

          </h1>
          <p className={`${montserratSemiSemiBold.className} text-[#2F438F] lg:text-[1.7rem] text-2xl lg:w-[600px] `} >
            with Nivaan’s Next Gen <br/>Knee Resurfacing Procedures
            </p>
          <h2 className="hidden">Advanced Knee Pain Treatment in Delhi NCR</h2>
          {/* <p
            className={`text-[#DB5115] mt-1 md:mt-4 text-sm lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p> */}
          <ul
            className={`list-disc mt-2 md:mt-6 text-[12.23px] leading-[14.5px] md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-6`}
          >
            <li>Preserves Your Natural Knee</li>
            <li>Minimally Invasive <br/>Procedure</li>
            <li>70% Faster Recovery <br/> vs Open Surgery</li>
          </ul>
          <Image
            src={require('../../../public/knee_ref_new.png')}
            alt="img"
            className="absolute bottom-28 right-6 translate-y-24 md:hidden translate-x-6"
            height={200}
            width={190}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-1 md:gap-3 z-10 -md:pb-6 mt-16">
          <FormHeader />
          <Form
            formLocation="knee-pain-resurface"
            formName="Hero-Section-Form-Resurface"
          />
        </div>
        <Image
          src={require('../../../public/knee_ref_new.png')}
          alt="img"
          className="absolute -bottom-20 left-[60%] transform -translate-x-1/2 hidden md:block"
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

export default HeroSectionNCR;
