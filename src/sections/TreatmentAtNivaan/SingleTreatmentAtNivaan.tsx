import React from "react";
import TreatmentCard from "@/components/TreatmentCard";
import { montserratBold } from "@/app/fonts";
import { Treatment, TreatmentData } from "@/app/api/allTypes";
import { goutTreatmentAtNivan } from "@/app/api/goutData";

const SingleTreatmentAtNivaan = ({
  TreatmentCardData,
  TreatmentHeading,
}: {
  TreatmentCardData: TreatmentData[];
  TreatmentHeading: Treatment;
}) => {
  return (
    <section className="bg-[#EAF1FB] px-11 py-[25px] md:px-[70px] md:py-[42px] text-black">
      <h2
        className={`mx-auto w-[80%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center ${montserratBold.className}`}
      >
        {TreatmentHeading.heading}
      </h2>
      <p className="mx-auto w-[90%] text-[12px] leading-[14.22px] md:text-[20.55px] md:leading-[32px] mt-6 md:mt-0 mb-8 text-center">
        {TreatmentHeading.para}
      </p>
      <div className="flex justify-center">
        <TreatmentCard treatment={goutTreatmentAtNivan[0]} />
      </div>
    </section>
  );
};

export default SingleTreatmentAtNivaan;