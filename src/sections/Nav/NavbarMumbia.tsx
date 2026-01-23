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
interface NavbarProps {
  isForm2?: boolean;
  formLocation?: string;
}

const NavbarMumbia: React.FC<NavbarProps> = ({ isForm2, formLocation }) => {
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
            isNextPath
              ? "md:relative bg-[#DB5115]"
              : "md:relative md:left-6 bg-[#2f438f]"
          }`}
          onClick={handleClick}
        >
          Book Consultation
        </button> */}

        <button
          className={`font-bold rounded-lg text-xs md:text-2xl py-2 px-4 md:py-2 md:px-6 text-white z-40 ${
            isNextPath
              ? "md:relative bg-[#DB5115]"
              : "md:relative md:left-6 bg-[#2f438f]"
          }`}
          onClick={() => {
            window.location.href = "tel:+916366525217";
          }}
        >
          Book Consultation
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

export default NavbarMumbia;
