import { montserratBold, rubikLight, rubikReg } from '@/app/fonts';
import Form from '@/components/Form';
import FormHeader from '@/components/FormHeader';
import HeaderWithoutCollapse from '@/components/HeaderWithoutCollapse';
import Image from 'next/image';
import React from 'react';

const HeroSectionJaipur = () => {
  return (
     <div className="bg-[#EAF1FB] pt-3 md:pt-6 px-8 lg:px-0 ">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 relative md:px-8">
            <div className="flex-1 relative top-0 md:top-6 w-[100%] md:w-[20%]">
              <h1
                className={`${montserratBold.className} text-[#2F438F] lg:text-4xl text-2xl lg:w-[80%] w-[100%] `}
              >
            Best Shoulder Pain <br></br>Treatment in  <br></br>Delhi NCR & Jaipur
          </h1>
          <h1
            className={`${montserratBold.className} text-[#2F438F] text-xl w-[80%] block md:hidden`}
          >
           Best Shoulder Pain <br></br>Treatment in  <br></br>Delhi NCR & Jaipur
          </h1>
          <h2 className="hidden">
            Comprehensive Shoulder Pain Treatment in Delhi NCR & Jaipur
          </h2>
          <p className="text-[#DB5115] text-xs md:text-lg">
            100% Insurance Coverage<span>*</span>
          </p>

          <ul
            className={`list-disc mt-4 md:mt-5 text-[13px] md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-2 md:px-8`}
          >
            <div className="flex items-center">
              <li>Non-Surgical Pain Treatment</li>
            </div>
            <li>30 - 60 Minute Procedures</li>
            <li>Insurance Support</li>
          </ul>

          <Image
            src={require('../../../public/shoulderpain.webp')}
            alt="img"
            className="absolute -bottom-2 right-8 translate-y-4 lg:hidden translate-x-10"
            height={190}
            width={190}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-2 md:gap-3 z-10 lg:pb-14">
          <FormHeader />
          <Form
            formLocation="Hero-Section-Shoulder-Pain"
            formName="Hero-Section-Form"
          />
        </div>
        <Image
          src={require('../../../public/shoulderpain.webp')}
          alt="img"
          className="absolute bottom-0 left-[61.5%] transform -translate-x-1/2 hidden lg:block"
          height={450}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
      <div className="mt-8 w-[100vw] relative right-8 md:w-[90vw] md:left-12 lg:mt-0">
        <HeaderWithoutCollapse />
      </div>
    </div>
  );
};

export default HeroSectionJaipur;
