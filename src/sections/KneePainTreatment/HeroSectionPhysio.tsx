import { montserratBold, rubikLight, rubikReg } from '@/app/fonts';
import Form2Physio from '@/components/Form2Physio';
import FormHeader from '@/components/FormHeader';
import HeaderWithoutCollapse from '@/components/HeaderWithoutCollapse';
import Image from 'next/image';
import React from 'react';
const HeroSectionPhysio = () => {
  return (
    <div className="bg-[#EAF1FB] pt-0 md:pt-3 px-8 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[53.64px] text-3xl lg:w-[600px] mt-2 lg:mt-20`}
          >
            Superspecialist-
            <br /> Guided Advanced Physiotherapy

          </h1>
          {/* <h2 className="hidden">Advanced Knee Pain Treatment in Delhi NCR</h2> */}
          {/* <p
            className={`text-[#DB5115] mt-1 md:mt-4 text-sm lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p> */}
           <p
            className={`text-[#000000] mt-1 md:mt-4 text-sm lg:text-xl lg:w-[400px]`}
          >
            Orthopaedic Surgeon-  <br/> designed & guided advanced  <br/> physiotherapy plans with <br/>  regular progress reviews for safe,<br/>  lasting relief.
          </p>
          
          <Image
            src={require('../../../public/physio/homemobile1.png')}
            alt="img"
            className="absolute bottom-28 right-6 translate-y-24 md:hidden translate-x-6"
            height={140}
            width={130}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-1 md:gap-3 z-10 -md:pb-6 mt-16">
          {/* <FormHeader /> */}
          <Form2Physio
            formLocation="Physiotherapy Hero Section Form"
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={require('../../../public/physio/homemobile1.png')}
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

export default HeroSectionPhysio;
