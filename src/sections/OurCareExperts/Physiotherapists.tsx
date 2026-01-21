"use client";
import React,{useState} from "react";
import DoctorCarousel from "@/components/DoctorCarousel";
import { montserratBold } from "@/app/fonts";
import CustomButton from "@/components/CustomButton";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import DoctorCard, { Doctor } from "@/components/DoctorCard";
import DoctorCardWithConsultation from "@/components/DoctorCardWithConsultation";
import Form from "@/components/Form";
import { X } from "lucide-react";
import Form2 from "@/components/Form2";
import { montserratLightBold } from "@/app/fonts";
const OurCareExpertsNcr = ({
  DoctorData,
  Heading,
  isForm2,
  bgColor,
  formLocation 
}: {
  DoctorData: Doctor[];
  Heading: string;
  isForm2?:Boolean;
  bgColor?: Boolean;
  formLocation?:string;
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
      />
    );
  };
return (
  <>
    <section
      className="px-11 py-[25px] md:px-[70px] md:py-[42px] text-black"
      // style={{ backgroundColor:  bgColor ? "#EBF1FF" : "#EBF1FF" }}
    >
      <h2
        className={`mx-auto w-[80%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center ${montserratBold.className}`}
      >
        {Heading}
      </h2>
      <br />
      <div>
        <DoctorCarousel doctorData={DoctorData} />
      </div>
    </section>

    {modal && (
      <div
        className="fixed top-0 h-full w-full flex justify-center items-center z-[99]"
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
            />
          )}
          <X
            className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
      </div>
    )}
  </>
);

};

export default OurCareExpertsNcr;
