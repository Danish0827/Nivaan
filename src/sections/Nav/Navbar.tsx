"use client";
import React, { useState } from "react";
import NivaanLogo from "../../../public/desktop/nivaan-logo.webp";
import Image from "next/image";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form2 from "@/components/Form2";
import path from "path";
import Link from "next/link";
import Form2Physio from "@/components/Form2Physio";
interface NavbarProps {
  isForm2?: boolean;
  isForm2Physio?: boolean;
  formLocation?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isForm2, formLocation,isForm2Physio }) => {
  const pathName = usePathname();
  const isLocationPage = pathName === "/clinic-locations"
  const isDrVideo =
    pathName === "/v1/dr-video-women-new" ||
    pathName === "/v1/dr-video-men-new" ||
    pathName === "/next/osteoarthritis-treatment" ||
    pathName === "/next/radio-frequency-ablation-new";
  const isNextPath =
    pathName.includes("/next/") &&
    pathName !== "/next/pain-medication" &&
    pathName !== "/next/avn-treatment";
  const isHipPain = pathName === "/next/hip-pain";
  const isKyphoplastyNew = pathName === "/next/Kyphoplasty-new";
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);
  

  const isOrange = pathName === "/next/spine-pain-treatment" ||
  pathName === "/next/request-appointment-hi-meta" ||
  pathName === "/v1/gout-pain" ||
  pathName === "/v1/knee-pain-women-new" ||
  pathName === "/v1/plantar-fasciitis" ||
  pathName === "/next/avn-treatment" ||
  pathName === "/next/neck-pain" ||
  pathName === "/next/nerve-block-new" ||
  pathName === "/next/osteoarthritis-treatment" ||
  pathName === "/next/radio-frequency-ablation-new" || 
  pathName === "/next/shoulder-pain" ||
  pathName === "/v1/fibromyalgia-treatment";
  const handleClick = () => {
    setModal(!modal);
    sendGTMEvent({
      event: "Form Open",
      value: {
        "Form Name": "NavBar-Form",
        "CTA Button text": "Book Consultation",
        "Landing Page URL": landingPageUrl,
      },
    });
  };
  const handleCloseModal = () => {
    setModal(!modal);
    sendGTMEvent({
      event: "Form Close",
      value: {
        "Form Name": "NavBar-Form",
        "CTA Button text": null,
        "Landing Page URL": landingPageUrl,
      },
    });
  };

  const renderForm = () => {
    if (isDrVideo || isForm2) {
      return (
        <Form2
          formLocation={isDrVideo ? "DrVideo-Navbar-Form" : formLocation}
          formName="NavBar-Form"
        />
      );
    }
    if(isForm2Physio){
      return (
      <Form2Physio
          formLocation={formLocation ? formLocation : "Navbar-Form"}
          formName="physiotherapy-NavBar-Form"
        />
      );
    }
    console.log(pathName)
    return (
      <Form
        formLocation={
          pathName === "/next/chronic-pain-arthroplasty"
            ? "NavBar-Chronic-Pain-Arthroplasty"
            : pathName === "/next/migraine"
            ? "NavBar-Migraine"
            : pathName === "/next/pain-medication"
            ? "NavBar-PainMedication"
            : pathName === "/next/shoulder-pain"
            ? "NavBar-Shoulder-Pain"
            : isHipPain
            ? "Navbar-Hip-Pain-Page"
            : isKyphoplastyNew
            ? "Navbar-Kyphoplasty-Page"
            : formLocation
        }
        formName="NavBar-Form"
      />
    );
  };

  return (
    <nav className="flex flex-row justify-between py-3 md:py-6 ">
      <div className="max-w-7xl mx-auto  flex justify-between w-full items-center px-4 ">
        <a href="/">
          <Image
            className="h-[16.67px] w-[84px] lg:h-[51px] lg:w-[230.98px] hover:cursor-pointer"
            src={NivaanLogo}
            alt="Nivaan logo in desktop Navbar"
            priority={true}
            loading="eager"
            unoptimized
          />
        </a>
       { 
       !isLocationPage &&
       <>
          {/* <button
            className={`font-bold rounded-lg text-xs md:text-2xl py-2 px-4 md:py-2 md:px-6 text-white z-40 ${
                isForm2Physio ?
                "md:relative bg-[#DB5115]"
                :
                isNextPath
                ? "md:relative bg-[#2f438f]"
                : "md:relative md:left-6 bg-[#DB5115]"
            }`}
            onClick={handleClick}
          >
            Book Consultation
          </button> */}
        <button
            className={`flex items-center gap-1 font-bold rounded-lg text-xs md:text-2xl py-2 px-4 md:py-2 md:px-6 text-white z-40 ${
                isOrange ?
                "md:relative bg-[#DB5115]"
                :isForm2Physio
                ? "md:relative bg-[#DB5115]"
                : isNextPath
                ? "md:relative bg-[#2f438f]"
                : "md:relative md:left-6 bg-[#DB5115]"
            }`}
            onClick={() => {
              window.location.href = "tel:+916366525217";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z" />
            </svg>
            Call Now
          </button>

       
       </>
        
        }
       
      </div>

      {modal && (
        <div
          className="fixed top-0 h-full w-full flex justify-center items-center z-[99] "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
            {renderForm()}
            <X
              className="absolute top-3 z-[999] right-5 hover:cursor-pointer"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
