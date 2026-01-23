"use client";
import React, { useState } from "react";
import NivaanLogo from "../../../public/Nivaan.webp";
import Image from "next/image";
import Form from "@/components/Form";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Form2 from "@/components/Form2";
import { Navbar2Links } from "@/app/api/data";
import { montserratSemiBold } from "@/app/fonts";
import SubscribeButton from "@/components/SubscribeButton";
import Link from "next/link";
import Form3 from "@/components/Form3";
import FormPmax from "@/components/FormPmax";
import { ChevronDown } from "lucide-react";

interface Navbar2Props {
  isHindi?: boolean;
}

const Navbar2: React.FC<Navbar2Props> = ({ isHindi }) => {
  const router = useRouter();
  const pathName = usePathname();
  const isDrVideo =
    pathName === "/v1/dr-video-women-new" ||
    pathName === "/v1/dr-video-men-new";
  const isHome =
    pathName === "/" ||
    pathName === "/next/request-appointment" ||
    pathName === "/next/request-appointment-meta" ||
    pathName === "/next/request-appointment-hi-meta"
  const isPmax =
    pathName === "/next/request-appointment-pmax" || 
    pathName === "/next/request-appointment-pmax2"
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    if (isHome) {
      router.push("/next/request-appointment");
    } else {
      setModal(!modal);
      sendGTMEvent({
        event: "Form Open",
        value: {
          "Form Name": "NavBar-Form",
          "CTA Button text": "Book Consultation",
          "Landing Page URL": landingPageUrl,
        },
      });
    }
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
  return (
    <nav className="hidden md:flex md:flex-row md:justify-between ">
      <div className="max-w-7xl mx-auto lg:px-8 lg:py-2 flex justify-between w-full px-8 items-center ">
        <a href="/">
          <Image
            className="hover:cursor-pointer mr-20"
            src={NivaanLogo}
            alt="Nivaan logo in desktop Navbar"
            width={165.35}
            height={36.18}
            unoptimized
          />
        </a>
        <div className="w-1/2 flex flex-row justify-around items-baseline ml-16 mr-28">
         {Navbar2Links.map((obj) => {
  const isPainAreas = (isHindi ? obj.titleHindi : obj.title) === "Pain Areas";

  return isPainAreas ? (
    <div className="relative group" key={obj.id}>
      <span
        className={`${montserratSemiBold.className} py-3 md:py-6 text-sm font-medium text-black border-b-4 border-transparent hover:text-[#8ed1fc] hover:border-b-[#54B1E2] cursor-pointer flex items-center gap-1`}
      >
        {isHindi ? obj.titleHindi : obj.title}
        <ChevronDown className="w-4 h-4" />
      </span>
      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md z-50 min-w-[12rem] py-2">
        <Link href="https://pain-solutions.nivaancare.com/back-pain/" className="px-4 py-2 hover:bg-gray-100">
          Back Pain
        </Link>
        {/* <Link href="https://nivaancare.com/next/knee-pain-treatment" className="px-4 py-2 hover:bg-gray-100">
          Knee Pain
        </Link> */}
        <Link href="https://pain-solutions.nivaancare.com/knee-pain/" className="px-4 py-2 hover:bg-gray-100">
          Knee Pain
        </Link>
{/*         <Link href="https://www.nivaancare.com/next/neck-pain" className="px-4 py-2 hover:bg-gray-100">
          Neck Pain
        </Link> */}
        <Link href="https://pain-solutions.nivaancare.com/neck-pain/" className="px-4 py-2 hover:bg-gray-100">
          Neck Pain
        </Link>
        <Link href="https://pain-solutions.nivaancare.com/shoulder-pain/" className="px-4 py-2 hover:bg-gray-100">
          Shoulder Pain
        </Link>
      </div>
    </div>
  ) : (
    <Link
      key={obj.id}
      href={obj.link}
      className={`${montserratSemiBold.className} y-3 md:py-6 text-sm font-medium text-black border-b-4 border-transparent hover:text-[#8ed1fc] hover:border-b-[#54B1E2] cursor-pointer flex items-center gap-1`}
    >
      {isHindi ? obj.titleHindi : obj.title}
    </Link>
  );
})}


        </div>
        {/* <button
          className="bg-[#DB5115] font-bold rounded-2xl text-xs md:text-sm py-2 px-4 md:py-2 md:px-6 text-white z-40"
          onClick={handleClick}
        >
          Request a Call Back
        </button> */}
        <SubscribeButton
          onClick={handleClick}
          title={isHindi ? "अपॉइंटमेंट बुक करें" : "Lets Get Started"}
        />
      </div>

      {modal && (
        <div
          className="fixed top-0 h-full w-full flex justify-center items-center z-[99] "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="relative">
            {isDrVideo ? (
              <Form2
                formLocation="Navbar-DrVideo-Page"
                formName="NavBar-Form"
              />
            ) : isHome ? (
              <Form3 formLocation="Navbar-Home-Page" formName="NavBar-Form" />
            ) : isPmax ? (
              <FormPmax formLocation="Navbar-Pmax-Page" formName="NavBar-Form" />
            ) : (
              <Form
                formLocation="Navbar-Herniated-Page"
                formName="NavBar-Form"
              />
            )}
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

export default Navbar2;
