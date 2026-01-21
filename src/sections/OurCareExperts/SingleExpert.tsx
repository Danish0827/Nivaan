"use client";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form2 from "@/components/Form2";
import { montserratLightBold } from "@/app/fonts";
import DoctorCardDesktop, { Doctor } from "@/components/DoctorCardDesktop";

const SingleExpert = ({
  isBg,
  doctorData,
  isForm2,
  formLocation,
}: {
  isBg?: boolean;
  doctorData: Doctor[];
  doctorDataMob?: Doctor[];
  isForm2?: boolean;
  formLocation?: string;
}) => {
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);
  const [doctorName, setDoctorName] = useState("");

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
    if (isForm2) {
      return (
        <Form2
          formLocation={formLocation}
          formName="Doctor-Form"
        />
      );
    }
    return (
      <Form
        formLocation={formLocation}
        formName="Doctor-Form"
      />
    );
  };

  return (
    <div className={`py-5 ${isBg && "bg-[#EAF1FB]"}  `}>
      <section className={`max-w-7xl mx-auto`}>
        <h2
          className={`${montserratLightBold.className} mb-6 mt-0 text-center font-extrabold text-2xl text-[#2F438F] md:text-[2.625rem] md:leading-[3.2rem] md:mt-6`}
        >
          Our Care Experts
        </h2>
          <>
            <div className="flex justify-center px-10">
              {doctorData.map((doc) => (
                <DoctorCardDesktop key={doc.id} doc={doc} />
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
            {isForm2 ? (
              <Form2
                formLocation={formLocation}
                formName="Doctor-Form"
              />
            ) : (
              <Form
                formLocation={formLocation}
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
    </div>
  );
};

export default SingleExpert;
