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
import Form2Physio from "@/components/Form2Physio";
const Superspecialists = ({
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

return (
  <>
    <section
      className="px-11 py-[25px] md:px-[70px] md:py-[42px] text-black"
      style={{ backgroundColor:  bgColor ? "#EBF1FF" : "transparent" }}
    >
      <h2
        className={`mx-auto w-[80%] md:w-full font-extrabold text-[18px] leading-[20.34px] md:text-[42px] md:leading-[51.2px] text-[#2F438F] text-center ${montserratBold.className}`}
      >
        {Heading}
      </h2>
      <br />
      <div>
        <DoctorCarousel doctorData={DoctorData} />
        <div className="mt-6 mb-8 hidden md:flex md:justify-center">
          <CustomButton
            className="bg-[#DB5115] mx-auto"
            title="Book Consultation"
            onBtnClick={() => handleClick("Dr. Naveen Talwar")}
          />
        </div>
      </div>
    </section>

    {modal && (
      <div
        className="fixed top-0 h-full w-full flex justify-center items-center z-[99]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="relative">
            <Form2Physio
              formLocation={"physiotherapy-Our-Superspecialists"}
              formName="Doctor-Form"
            />
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

export default Superspecialists;
