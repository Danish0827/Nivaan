import { montserratBold,montserratSemiSemiBold,rubikBold, rubikLight, rubikReg } from '@/app/fonts';
import Form from '@/components/Form';
import FormHeader from '@/components/FormHeaderSpine';
import HeaderSpine from '@/components/HeaderSpine';
import Image from 'next/image';
import React from 'react';
const HeroSectionSpine = () => {
  return (
    <div className="bg-[#EAF1FB] pt-0 md:pt-6 px-6 lg:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 py-2 relative md:px-8">
        <div className="flex-1 relative">
          <h1
            className={`${montserratBold.className} text-[#0F99D6] lg:text-[2.125rem] lg:leading-[45px] md:text-3xl text-l lg:w-[600px] mt-2 lg:mt-2`}
          >
            Back Pain? It’s Time <br/>to Restore Motion —

          </h1>
          <p className={`${montserratSemiSemiBold.className} text-[#F36C31] lg:text-[1.7rem] text-l lg:w-[600px] `} >
            Without Open Surgery
          </p>
          <h2 className="hidden">Advanced Knee Pain Treatment in Delhi NCR</h2>
         

          {/* <p
            className={`md:inline-block text-white bg-[#2F438F] mt-2 md:mt-4 text-sm lg:text-[1.10rem] px-4 py-2  hidden ${rubikReg.className}`}
          >
            Trusted Care, Right Here in Mumbai
          </p> */}
          <div
            className="bg-[#2F438F] md:py-1 mt-3 md:mt-5 text-white text-left px-8 hidden md:inline-block"
            style={{ marginLeft: "0px", width: "calc(100% - 85px)" }}
          >
            <p
              className={`text-[8px] md:text-[1.15rem] leading-[1.6rem] tracking-wide ${rubikReg.className}`}
            >
              Trusted Care, Right Here in <span className="font-semibold">Mumbai</span>
            </p>
          </div>
          <div
            className="bg-[#2F438F] md:py-1 mt-3 md:mt-5 text-white text-left px-8 md:hidden"
            style={{ marginLeft: "-32px", width: "calc(100% + 64px)" }}
          >
            <p
              className={`text-[8px] md:text-[1.15rem] leading-[1.6rem] tracking-wide ${rubikReg.className}`}
            >
              Trusted Care, Right Here in <span className="font-semibold">Mumbai</span>
            </p>
          </div>
          <Image
            src={require('../../../public/spine_mob.png')}
            alt="img"
            className="absolute bottom-28 right-6 translate-y-24 md:hidden translate-x-6"
            height={260}
            width={230}
            loading="eager"
            priority={true}
            quality={30}
            unoptimized
          />
          <ul
            className={`list-disc mt-6 md:mt-3 text-[9px] leading-[14.5px] md:text-2xl text-[#1E1E1E] flex flex-col gap-2 ${rubikLight.className} px-2 md:px-6`}
          >
            <li>Preserves Your Natural <br/> Spine Structure</li>
            <li>Minimally Invasive</li>
            <li>~75% shorter hospital  stay vs Open Surgery <sup>a</sup></li>
          </ul>
          
        </div>
        <div className="flex-1 flex justify-center flex-col items-center lg:items-end gap-1 md:gap-3 z-10 -md:pb-6 mt-4">
          <FormHeader />
          <Form
            formLocation="knee-pain-resurface"
            formName="Hero-Section-Form-Resurface"
          />
        </div>
        <Image
          src={require('../../../public/spine-new.png')}
          alt="img"
          className="absolute bottom- left-[65%] transform -translate-x-1/2 hidden md:block"
          width={420}
          height={472}
          loading="eager"
          priority={true}
          quality={30}
          unoptimized
        />
      </div>
       
      {/* <div className="mt-4 w-[100vw] relative right-8 md:w-[90vw] md:left-12 md:top-20">
        <div className="bg-[#F36C31]  md:rounded-2xl lg:block z-50 w-[100%] hidden md:block">
              <div className="flex text-white items-start w-[100%] mx-auto">
                <div className="flex flex-col pt-1 md:pt-0 flex-1 text-center w-[20%] px-2 min-h-16 md:min-h-24 border-r-[1px] md:md:border-r-0">
                 dsfjhdskjghdjghdglkdhghdfglhd
                </div>
              </div>
          </div>
      </div> */}
      
      <div className="mt-4  relative  md:mt-0 mb:mt-4">
        <div className="bg-[#F36C31]   lg:block z-50 w-[100%]  md:block hidden">
          <div className="flex text-white items-start  w-[100%] mx-auto">
              <div className="flex flex-col flex-1  w-[20%] px-2 py-2">
                  <center>Led by Dr. Sidharth Verma - India’s leading specialist in Minimally Invasive Pain and Spine Interventions (MIPSIs)</center>
                </div>
          </div>
        </div>
        <HeaderSpine />
      </div>
    </div>
  );
};

export default HeroSectionSpine;
