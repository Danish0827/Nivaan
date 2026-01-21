import { ConditionsTreatedCardDataType } from "@/app/api/allTypes";
import { montserratLightBold } from "@/app/fonts";
import ConditionsTreatedCarousel from "@/components/ConditionsTreatedCarousel";
import React from "react";

const ConditionsTreatedSection = ({
  ConditionsTreatedCardData,
}: {
  ConditionsTreatedCardData: ConditionsTreatedCardDataType[];
}) => {
  return (
    <div className="mt-12">
      <h2
        className={`${montserratLightBold.className} text-lg md:text-[2.625rem] text-center mb-10 mx-10 md:mx-0 text-[#2F438F]`}
      >
        Conditions Treated By Radiofrequency Ablation
      </h2>
      <ConditionsTreatedCarousel cardData={ConditionsTreatedCardData} />
    </div>
  );
};

export default ConditionsTreatedSection;
