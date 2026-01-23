import { montserratBold, rubikLight, rubikReg } from '@/app/fonts';
import Form2 from '@/components/Form2';
import FormHeader from '@/components/FormHeader';
import Image from 'next/image';
import React from 'react';
import HeaderWithoutCollapse from '@/components/HeaderWithoutCollapse';
const HeroSectionLucknow = () => {
  return (
     <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-6 lg:px-0 ">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 relative md:px-8">
                <div className="flex-1 relative mt-0 md:mt-10">
                  <h1
                    className={`${montserratBold.className} text-[#2F438F] lg:text-[2.75rem] lg:leading-[3rem] text-xl lg:w-[600px] w-60 `}
                  >
            Best Osteoarthritis <br /> Pain Treatment in <br /> Delhi NCR & Lucknow
          </h1>
          <p
            className={`text-[#DB5115] mt-2 md:mt-4 text-xs lg:text-xl ${rubikReg.className}`}
          >
            100% Insurance Coverage *
          </p>
          <ul
            className={`list-disc mt-4 text-sm md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-4 md:px-8`}
          >
            <li>Non-Surgical Pain Treatment</li>
            <li>30 - 60 Minute Procedures</li>
            <li>Insurance Support</li>
          </ul>
          <Image
            src={require('../../../public/mobile/osteoarthritis/osteomob.webp')}
            alt="img"
            className="absolute bottom-16 right-8 translate-y-10 lg:hidden translate-x-10"
            height={160}
            width={200}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 -md:pt-6">
          <FormHeader />
          <Form2
            formLocation="Osteoarthritis Treatment Hero Section Form"
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={require('../../../public/desktop/osteoarthritisHeroImg.webp')}
          alt="img"
          className="absolute -bottom-14 left-[67%] transform -translate-x-1/2 hidden lg:block"
          height={500}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
      <div className="mt-8 w-[100vw] relative right-8 md:w-[90vw] md:left-12 md:top-4">
        <HeaderWithoutCollapse />
      </div>
    </div>
  );
};

export default HeroSectionLucknow;
