"use client";
import { montserratLightBold } from "@/app/fonts";
import ComparisonTablePhysio from "@/components/ComparisonTablePhysio";
import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form2 from "@/components/Form2";
import { PhysioTableDataType } from "@/app/api/allTypes";
import Form2Physio from "@/components/Form2Physio";

interface WhyChooseNivaanProps {
  data?: PhysioTableDataType[];
  isForm2?: boolean;
  formLocation?: string;
}

const BenefitsPhysio: React.FC<WhyChooseNivaanProps> = ({ data, isForm2, formLocation }) => {
  const pathName = usePathname();
  const isNextPath = pathName.includes("/next/");
  const isSciaticaPain = pathName == "/next/sciatica-pain-new";
  const isEndoscopicDiscectomy = pathName === "/next/endoscopic-discectomy";
  const isChronicPainVertobroplasty = pathName === "/next/chronic-pain-vertobroplasty";
  const isNeckPain = pathName === "/next/neck-pain";
  const isNerveBlockNew = pathName == "/next/nerve-block-new";
  const isHipPain = pathName === "/next/hip-pain"
  const isKyphoplastyNew = pathName === "/next/Kyphoplasty-new"
  const isOsteoarthritisTreatment = pathName.includes(
    "/next/osteoarthritis-treatment"
  );
  const isKPMumbai=pathName==="/next/mumbai/knee-pain-treatment"
  const isInfilmmatory=pathName==="/next/Inflammatory-pain"
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
        "Form Name": "Benefits-Physiotherapy-Nivaan-Form",
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
        "Form Name": "Benefits-Physiotherapy-Nivaan-Form",
        "CTA Button text": null,
        "Landing Page URL": landingPageUrl,
      },
    });
  };

  const form2LocationMapping: {
    [key: string]: string;
  } = {
    "/v1/herniated-new": "Herniated-Why-Choose-Nivaan",
    isOsteoarthritisTreatment: "Osteoarthritis-Why-Choose-Nivaan",
    isRadioFrequencyTreatment: "Radio-Frequency-Why-Choose-Nivaan",
  };
  
  const getForm2Location = () => {
    if (pathName in form2LocationMapping) {
      return form2LocationMapping[pathName];
    }
    return "Why-Nivaan-Form";
  };

  const formLocationMapping: {
    [key: string]: string;
  } = {
    "/next/physiotherapy": "physiotherapy-Benefits"
  };
  
  const getFormLocation = () => {
    if (pathName in formLocationMapping) {
      return formLocationMapping[pathName];
    }
    return "Why-Nivaan-Form";
  };

  const renderForm = () => {
    if(isOsteoarthritisTreatment || isForm2) {
      return (
        <Form2
          formLocation={formLocation || getForm2Location()}
          formName="Why-Nivaan-Form"
        />
      )
    }
    return (
      <Form
        formLocation={formLocation || getFormLocation()}
        formName="Why-Nivaan-Form"
      />
    )
  }
  return (
    <div className="mx-0 md:mx-64">
      <h2
        className={`${montserratLightBold.className} w-3/4 mx-auto md:w-full text-lg md:text-[2.625rem] text-[#2F438F] mt-6 md:my-12 mb-2 text-center`}
      >
        Benefits With Nivaan’s Physiotherapy
      </h2>
      <ComparisonTablePhysio data={data} />
      <div className="mt-6 md:mt-8 mb-8 flex justify-center">
        {
          isInfilmmatory? <></> :<CustomButton
          className={`mx-auto ${isNextPath ? "bg-[#DB5115]" : "bg-[#DB5115]"}`}
          title="Book Consultation"
          onBtnClick={handleClick}
        />
        }
        
      </div>
      {modal && (
        <div
          //className="fixed top-0 h-full w-full flex justify-center items-center z-[99]"
          className="fixed inset-0 flex justify-center items-center z-[99]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
              <Form2Physio
                formLocation={"Physiotherapy-Benefits-Section-Form"}
                formName="Why-Nivaan-Form"
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

export default BenefitsPhysio;