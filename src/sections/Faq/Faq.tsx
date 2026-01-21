"use client";
import { montserratLightBold } from "@/app/fonts";
import FaqCard from "@/components/FaqCard";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { faqData } from "@/app/api/allTypes";

const Faq = ({
  askedCardData,
  bgWhite,
}: {
  askedCardData: faqData[];
  bgWhite?: boolean;
}) => {
  const pathName = usePathname();
  const isDrVideo =
    pathName === "/v1/dr-video-women-new" ||
    pathName === "/v1/dr-video-men-new";
  const isArthroplasty = pathName === "/next/chronic-pain-arthroplasty";
  const isMigraine = pathName === "/next/migraine";
  const isShoulderPain = pathName === "/next/shoulder-pain";
  const isOsteoNew = pathName === "/next/osteoarthritis-treatment";

  const [openCardIndex, setOpenCardIndex] = useState(0);

  const handleCardToggle = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? -1 : index === 0 ? 0 : index);
  };
  const cardMap = askedCardData?.map((data, i) => {
    return (
      <div key={i}>
        <FaqCard
          data={data}
          isOpen={openCardIndex === i}
          onToggle={() => handleCardToggle(i)}
        />
      </div>
    );
  });
  return (
    <div
      className={`${
        isDrVideo ||
        isArthroplasty ||
        isMigraine ||
        isShoulderPain ||
        isOsteoNew ||
        bgWhite
          ? "bg-white"
          : "bg-[#EAF1FB]"
      }`}
    >
      <div className="max-w-7xl mx-auto p-6 md:py-6 md:px-60 flex flex-col ">
        <div className=" flex justify-center"></div>

        <h1
          className={`${montserratLightBold.className}  text-center text-lg text-[#2F438F] lg:w-full lg:mb-6 mb-2 lg:text-[2.625rem] lg:leading-[51.2px]`}
        >
          FAQ&apos;s
        </h1>
        {cardMap}
      </div>
    </div>
  );
};

export default Faq;
