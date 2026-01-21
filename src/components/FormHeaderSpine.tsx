import Image from "next/image";
import React from "react";

const FormHeader = () => {
  return (
    <div className="lg:w-[440px] w-[312px]">
  {/* Blue Section */}
  <div className="bg-[#2F438F] text-white text-center px-3 py-2 rounded-t-lg md:hidden">
    <p className="text-[0.65rem] md:text-sm leading-snug">
      <span className="font-semibold">Led by Dr. Sidharth Verma</span> – India’s leading specialist in
       Minimally Invasive Pain and Spine Interventions (MIPSIs)
    </p>
  </div>

  {/* White Section */}
  <div className="flex items-center bg-white px-1 md:px-3 py-1 md:py-2 rounded-b-lg border-[#DB5115] border-[1px] gap-3 justify-center">
    <Image
      className="hidden md:block"
      src={require("../../public/FromTick.webp")}
      alt="logo"
      unoptimized
    />
    <Image
      className="block md:hidden"
      src={require("../../public/formTickMob.webp")}
      alt="logo"
      priority={true}
      loading="eager"
      unoptimized
    />
    <p className="text-[#2F438F] text-[0.6rem] lg:text-base">
      Fully Covered Under All Govt. & Private Insurance<span>*</span>
    </p>
  </div>
</div>

    // <div className="flex items-center bg-white px-1 md:px-3 py-0.5 md:py-1.5 rounded-[4.8px] md:rounded-lg border-[#DB5115] border-[1px] gap-3  lg:w-[440px] w-[312px] justify-center">
    //   <Image className="hidden md:block" src={require("../../public/FromTick.webp")} alt="logo"/>
    //   <Image className="block md:hidden" src={require("../../public/formTickMob.webp")} alt="logo" priority={true} loading="eager"/>
      
    //   <p className="text-[#2F438F] text-[0.6rem] lg:text-base">
    //     Fully Covered Under All Govt. & Private Insurance<span>*</span>
    //   </p>
    // </div>
  );
};

export default FormHeader;