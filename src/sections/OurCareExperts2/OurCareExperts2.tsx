"use client";
import React, { useState } from "react";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import DoctorCard2, { Doctor } from "@/components/DoctorCard2";
import { montserratLightBold } from "@/app/fonts";

const OurCareExperts = ({
  doctorData,
  doctorDataMob,
}: {
  doctorData: Doctor[];
  doctorDataMob: Doctor[];
}) => {
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    sendGTMEvent({
      event: "Form Open",
      value: {
        "Form Name": "Doctor-Form",
        "CTA Button text": "Book Consultation",
        "Landing Page URL": landingPageUrl,
      },
    });
    setModal(!modal);
  };
  const handleCloseModal = () => {
    setModal(!modal);
    sendGTMEvent({
      event: "Form Close",
      value: {
        "Form Name": "Doctor-Form",
        "CTA Button text": null,
        "Landing Page URL": landingPageUrl,
      },
    });
  };
  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <h2 className={`mt-8 md:mt-12 mb-16 md:mb-24 text-center font-extrabold text-lg md:text-[2.625rem] md:leading-[3.2rem] text-[#2F438F] ${montserratLightBold.className}`}>
          Our Care Experts
        </h2>
        <div className="hidden md:flex md:flex-row md:justify-between">
          {doctorData.map((doc) => (
              <DoctorCard2 key={doc.id} doc={doc} />
          ))}
        </div>
        <div className="flex flex-col md:hidden items-center gap-5">
          {doctorDataMob.map((doc) => (
              <DoctorCard2 key={doc.id} doc={doc} />
          ))}
        </div>
        {/* <div className="mt-6 mb-8 hidden md:flex md:justify-center">
          <CustomButton
            className="bg-[#DB5115] mx-auto"
            title="Book Consultation"
            onBtnClick={handleClick}
          />
        </div> */}
      </section>
      {modal && (
        <div
          className="fixed top-0 h-full w-full flex justify-center items-center z-[99] "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
            <Form
              formLocation={
                pathName === "/v1/herniated-new"
                  ? "Herniated-Our-Care-Experts"
                  : pathName === "/v1/Osteoarthritis-new"
                  ? "Osteoarthritis-Our-Care-Experts"
                  : pathName === "v1/knee-pain-new"
                  ? "Knee-Pain-Our-Care-Experts"
                  : pathName === "/v1/back-pain-men-new"
                  ? "BackPain-Men-Our-Care-Experts"
                  : pathName === "/v1/back-pain-elderly-women-new"
                  ? "Back-Pain-Elderly-Women-Lp-OurExperts"
                  : pathName === "/v1/knee-pain-elderly-men"
                  ? "Knee-Pain-Elderly-Men-Lp"
                  : pathName === "v1/knee-pain-elderly-women"
                  ? "Knee-Pain-Elderly-Women-Lp"
                  : ""
              }
              formName="Doctor-Form"
            />
            <X
              className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCareExperts;
