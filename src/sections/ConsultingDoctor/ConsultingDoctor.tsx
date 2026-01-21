"use client";
import React, { useState } from "react";
import DoctorCard, { Doctor } from "@/components/DoctorCard";
import DoctorCardWithConsultation from "@/components/DoctorCardWithConsultation";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form2 from "@/components/Form2";
import { montserratLightBold } from "@/app/fonts";

const Consultingdoctor = ({
  isBg,
  doctorData,
  doctorDataMob,
  isForm2,
  formLocation,
  location="",
}: {
  isBg?: boolean;
  doctorData: Doctor[];
  doctorDataMob: Doctor[];
  isForm2?: boolean;
  formLocation?: string;
  location?: string;
}) => {
  const pathName = usePathname();
  const isOsteoarthritisTreatment = pathName.includes(
    "/next/osteoarthritis-treatment"
  );
  const isNextPath =
    pathName.includes("/next/") && pathName !== "/next/pain-medication";
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const isNerveBlock = pathName === "/next/nerve-block-new";
  const isSciatica = pathName === "/next/sciatica-pain-new";
  const isHipPain = pathName === "/next/hip-pain";
  const isKyphoplastyNew = pathName === "/next/Kyphoplasty-new";

  const handleClick = (docName: string = "") => {
    sendGTMEvent({
      event: "Form Open",
      value: {
        "Form Name": "Doctor-Form",
        "CTA Button text": "Book Consultation",
        "Landing Page URL": landingPageUrl,
      },
    });
    setDoctorName(docName);
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
  const renderForm = () => {
    if (isForm2 || isOsteoarthritisTreatment) {
      return (
        <Form2
          formLocation={
            isOsteoarthritisTreatment
              ? `Osteoarthritis-New-Care-Experts-${doctorName}`
              : isForm2
              ? `${formLocation}-${doctorName}`
              : "Our Care Experts Form"
          }
          formName="Doctor-Form"
        />
      );
    }
    return (
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
            : pathName === "/next/pain-medication"
            ? "PainMedication-Our-Care-Experts"
            : pathName === "/next/chronic-pain-arthroplasty"
            ? "Chronic-Pain-Arthroplasty" + "-" + doctorName
            : pathName === "/next/migraine"
            ? "Migraine-Our-Care-Experts" + "-" + doctorName
            : pathName === "/next/shoulder-pain"
            ? "Shoulder-Pain-Our-Care-Experts" + "-" + doctorName
            : isHipPain
            ? "Hip-Pain-Our-Care-Experts" + "-" + doctorName
            : isKyphoplastyNew
            ? "Kyphoplasty-Our-Care-Experts" + "-" + doctorName
            : formLocation + "-" + doctorName
        }
        formName="Doctor-Form"
        location={location}
      />
    );
  };

  return (
    <div className={`py-5 ${isBg }  `}>
      <section className={`max-w-7xl mx-auto`}>
        <h2
          className={`${montserratLightBold.className} mb-6 mt-0 text-center font-extrabold text-2xl text-[#2F438F] md:text-[2.625rem] md:leading-[3.2rem] md:mt-6`}
        >
          Consulting Doctor
        </h2>
        {isNextPath ? (
          <>
            {/* <div
              className={`hidden md:flex md:flex-row  px-60 ${
                pathName === "/next/avn-treatment"
                  ? "md:justify-center"
                  : "md:justify-between"
              } `}
            >
              {doctorData.map((doc) => (
                <DoctorCardWithConsultation
                  key={doc.id}
                  doc={doc}
                  handleClick={handleClick}
                />
              ))}
            </div>
            <div className="flex flex-col md:hidden items-center">
              {doctorDataMob.map((doc) => (
                <DoctorCardWithConsultation
                  key={doc.id}
                  doc={doc}
                  handleClick={handleClick}
                />
              ))}
            </div> */}

<div
  className={`hidden md:flex md:flex-row flex-wrap justify-center gap-4`}
>
  {doctorData.map((doc) => (
    <DoctorCardWithConsultation
      key={doc.id}
      doc={doc}
      handleClick={handleClick}
    />
  ))}
</div>

<div className="flex flex-col md:hidden items-center justify-center gap-4">
  {doctorDataMob.map((doc) => (
    <DoctorCardWithConsultation
      key={doc.id}
      doc={doc}
      handleClick={handleClick}
    />
  ))}
</div>

            <div className="mt-6 mb-8 hidden md:flex md:justify-center">
              <CustomButton
                className="bg-[#DB5115] mx-auto"
                title="Book Consultation"
                onBtnClick={() => handleClick("Dr. Naveen Talwar")}
              />
            </div>
          </>
        ) : (
          <>
            <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center px-10 gap-4">
              {doctorData.map((doc) => (
                <DoctorCard key={doc.id} doc={doc} />
              ))}
            </div>
            <div className="flex flex-col gap-2 md:hidden items-center">
              {doctorDataMob.map((doc) => (
                <DoctorCard key={doc.id} doc={doc} />
              ))}
            </div>
            <div className="mt-6 mb-8 hidden md:flex md:justify-center">
              <CustomButton
                className="bg-[#DB5115] mx-auto"
                title="Book Consultation"
                onBtnClick={handleClick}
              />
            </div>
          </>
        )}
        {/* <div className=" flex justify-center">
          <button
            className={`bg-[#DB5115] rounded-lg p-2 ${rubikBold.className} text-white`}
            onClick={handleClick}
          >
            Book Consultation
          </button>
        </div> */}
      </section>
      {modal && (
        <div
          className="fixed top-0 h-full w-full flex justify-center items-center z-[99] "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
            {isNerveBlock ||
            isSciatica ||
            isForm2 ||
            isOsteoarthritisTreatment ? (
              <Form2
                formLocation={
                  isNerveBlock
                    ? `Nerve-Block-New-OurExperts-${doctorName}`
                    : isSciatica
                    ? `Sciatica-Pain-New-OurExperts-${doctorName}`
                    : isOsteoarthritisTreatment
                    ? `Osteoarthritis-New-Care-Experts-${doctorName}`
                    : isForm2
                    ? `${formLocation}-${doctorName}`
                    : ""
                }
                formName="Doctor-Form"
                location={location}
              />
            ) : (
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
                    : pathName === "/next/pain-medication"
                    ? "PainMedication-Our-Care-Experts"
                    : pathName === "/next/chronic-pain-arthroplasty"
                    ? "Chronic-Pain-Arthroplasty" + "-" + doctorName
                    : pathName === "/next/migraine"
                    ? "Migraine-Our-Care-Experts" + "-" + doctorName
                    : pathName === "/next/shoulder-pain"
                    ? "Shoulder-Pain-Our-Care-Experts" + "-" + doctorName
                    : isHipPain
                    ? "Hip-Pain-Our-Care-Experts" + "-" + doctorName
                    : isKyphoplastyNew
                    ? "Kyphoplasty-Our-Care-Experts" + "-" + doctorName
                    : formLocation + "-" + doctorName
                }
                formName="Doctor-Form"
                location={location}
              />
            )}
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

export default Consultingdoctor;