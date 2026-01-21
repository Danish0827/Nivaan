import Image from "next/image";
import React from "react";

const FormHeader = () => {
  return (
    <div className="flex items-center bg-white px-1 md:px-3 py-0.5 md:py-1.5 rounded-[4.8px] md:rounded-lg border-[#DB5115] border-[1px] gap-3  lg:w-[440px] w-[312px] justify-center">
      <Image className="hidden md:block" src={require("../../public/FromTick.webp")} alt="logo" unoptimized/>
      <Image className="block md:hidden" src={require("../../public/formTickMob.webp")} alt="logo" priority={true} loading="eager" unoptimized/>
      <p className="text-[#2F438F] text-[0.6rem] lg:text-base">
        Fully Covered Under All Govt. & Private Insurance<span>*</span>
      </p>
    </div>
  );
};

export default FormHeader;