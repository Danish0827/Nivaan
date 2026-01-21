"use client";
import { montserratLightBold, rubikReg } from "@/app/fonts";
import React from "react";
import Image from "next/image";
import OurProcedureImg from "../../../public/desktop/our_procedure_bg_img.webp";
import OurProcedureImgMob from "../../../public/mobile/our_procedure_bg_img_mob.webp";
import ProcedureCarousel from "@/components/ProcedureCarousel";
import { usePathname } from "next/navigation";
import { Treatment, TreatmentData } from "@/app/api/allTypes";

const OurProcedures = ({
  procedureCardData,
  procedureHeading,
}: {
  procedureCardData: TreatmentData[];
  procedureHeading: Treatment;
}) => {
  const pathName = usePathname();
  return (
    <section className="mt-4 md:mt-20 w-full">
      <div className="w-[80%] lg:w-full mx-auto text-center">
        <h2
          className={`mb-2 text-lg lg:text-4xl text-[#2F438F] ${montserratLightBold.className}`}
        >
          {procedureHeading.heading}
        </h2>
        <p className={`text-xs lg:text-xl ${rubikReg.className}`}>
          {procedureHeading.para}
        </p>
      </div>
      <div
        className={`relative w-full mt-6  bg-[#EAF1FB] ${
          pathName === "/next/avn-treatment"
            ? ""
            : "md:mt-8 min-h-[33.125rem] md:min-h-[54rem]"
        }`}
      >
        <div className="hidden lg:block">
          <Image
            src={OurProcedureImg}
            alt="procedure img"
            width={1600}
            height={900}
            loading="lazy"
            unoptimized
          />
        </div>
        <div className="block lg:hidden">
          <Image
            src={OurProcedureImgMob}
            alt="procedure img"
            width={800}
            height={450}
            loading="lazy"
            unoptimized
          />
        </div>
        {pathName !== "/next/avn-treatment" && (
          <div className="absolute top-40 md:top-96 left-full transform -translate-x-1/2 w-3/4 md:w-full">
            <ProcedureCarousel TreatmentCardData={procedureCardData} />
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProcedures;
