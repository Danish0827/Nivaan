import React from "react";
import ImportantStudiesCarousel from "@/components/ImportantStudiesCarousel";
import { montserratBold } from "@/app/fonts";
import { ImportantStudiesType } from "@/app/api/allTypes";

const ImportantStudies = ({
  ImportantStudiesCardData,
  ImportantStudiesHeading,
}: {
  ImportantStudiesCardData: ImportantStudiesType[];
  ImportantStudiesHeading: string;
}) => {
  return (
    <section className="bg-white px-11 py-[35px] md:px-[70px] md:py-[42px] text-black">
      <h2
        className={`mx-auto w-full md:w-[55%] font-extrabold text-[20px] md:text-[42px] leading-[22px] md:leading-[51.2px] text-[#2F438F] text-center ${montserratBold.className} pb-10`}
      >
        {ImportantStudiesHeading}
      </h2>
      {/* <p className="mx-auto w-[90%] text-[12px] leading-[14.22px] md:text-[20.55px] md:leading-[32px] mt-6 md:mt-0 mb-8 text-center">
        {ImportantStudiesHeading.para}
      </p> */}
    <ImportantStudiesCarousel StudiesCardData={ImportantStudiesCardData} />
    </section>
  );
};

export default ImportantStudies;