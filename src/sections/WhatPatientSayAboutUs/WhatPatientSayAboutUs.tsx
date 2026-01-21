'use client'
import React from "react";
import PatientReviewCardCarousel from "@/components/PatientReviewCardCarousel";
import googleIcon2 from "../../../public/desktop/google-logo.webp";
import Image from "next/image";
import starImg from "../../../public/desktop/Stars.webp";
import { usePathname } from "next/navigation";
import { montserratLightBold } from "@/app/fonts";
import PatientReviewCardCarousel2 from "@/components/PatientReviewCardCarousel2";
import PatientReviewWithOneVideo from "@/components/PatientReviewWithOneVideo";
import { Review } from "@/app/api/allTypes";

const WhatPatientSayAboutUs = ({
  patientReviewData,
  useWhiteBackground = false, // New prop with default value
  pageRoute,
}: {
  patientReviewData: Review[];
  useWhiteBackground?: boolean; // New prop type
  pageRoute?: string
}) => {
  const pathName = usePathname();
  const isDrVideo =
    pathName === "/v1/dr-video-women-new" ||
    pathName === "/v1/dr-video-men-new";
  const isNextPath = pathName.includes("/next/") && pathName !== "/next/pain-medication" && pathName !== "/next/jaipur/pain-medication" && pathName !== "/next/lucknow/pain-medication"
  const isMigraine = pathName === "/next/migraine"||pathName==="/next/jaipur/migraine"||pathName==="/next/lucknow/migraine"||pathName==="/next/mumbai/migraine"
  const isPainMedication = pathName === '/next/pain-medication' || pathName === "/next/osteoarthritis-treatment"
  const isBackPain = pathName === '/v1/back-pain-new'||pathName==="/v1/jaipur/back-pain-new"||pathName==="/v1/lucknow/back-pain-new"
  const isShoulderPain = pathName === "/next/shoulder-pain"||pathName==="/next/jaipur/shoulder-pain"||pathName==="/next/lucknow/shoulder-pain"
  const isSciaticaPain = pathName == "/next/sciatica-pain-new";
  const Women_knee_pain=pathName==="/v1/jaipur/knee-pain-women-new"||pathName==="/v1/lucknow/knee-pain-women-new"
  const isNewPage =pathName === "/v1/fibromyalgia-treatment" ||pathName==="/v1/jaipur/fibromyalgia-treatment" ||pathName==="/v1/lucknow/fibromyalgia-treatment"|| pathName === "/v1/neuropathic-pain" || pathName === "/v1/plantar-fasciitis"||pathName==="/v1/jaipur/plantar-fasciitis"||pathName==="/v1/lucknow/plantar-fasciitis"
  const isGoutPain=pathName==="/v1/gout-pain"||pathName==="/v1/lucknow/gout-pain"||pathName==="/v1/jaipur/gout-pain"
  return (
    <section
      className={`py-8 md:pt-20 md:pb-12 text-black ${
        useWhiteBackground
          ? "bg-white"
          : pathName === "/v1/dr-video-women-new" ||
            pathName === "/v1/dr-video-men-new"
          ? "bg-[#EBF7FD]"
          : isPainMedication || isBackPain
          ? "bg-white"
          : "bg-[#EAF1FB]"
      }`}
    >
      <h2
        className={`text-lg md:text-[2.625rem] md:leading-[51.2px] font-extrabold mb-6 text-[#2F438F] text-center w-1/2 md:w-full mx-auto ${montserratLightBold.className}`}
      >
        What Our Patients Say About Us!
      </h2>
      {(!isNextPath || pageRoute == "avn-treatment") &&
        ((pathName === "/v1/knee-pain-elderly-men-new" ||
        pathName === "/v1/knee-pain-elderly-women-new") ? (
          <div className="hidden md:flex md:flex-row justify-between mx-auto bg-[#2F438F] px-8 py-4 w-3/4 md:w-[45%] md:h-[72.63px] rounded-xl mb-12">
            <p className="text-[13.48px] leading-[16.54px] flex flex-row justify-center items-center text-white">
              <span className="text-[#00B4E5] font-bold mr-1">5000+</span>{" "}
              reviews on Google{" "}
              <Image src={googleIcon2} alt="google icon big" unoptimized/>
            </p>
            <div className="flex flex-row justify-center items-center gap-2">
              <span className="bg-[#00B4E5] px-3 py-5 rounded-full text-[14.12px] leading-[17.33px] font-bold text-white">
                4.8+
              </span>
              <Image src={starImg} alt="star img" width={110} height={154} unoptimized/>
            </div>
          </div>
        ) : (
          (pathName === "/next/pain-medication" ||pathName === "/next/jaipur/pain-medication"|| pathName === "/next/lucknow/pain-medication"|| isBackPain|| 
            pageRoute == "avn-treatment" || isNewPage||isGoutPain ||Women_knee_pain ) && (
            <div className="flex flex-col md:flex-row justify-between mx-auto bg-[#2F438F] px-6 py-4 w-[18.125rem] md:w-[45%] md:h-[92px] rounded-xl mb-12">
              <p className="text-base md:text-xl flex flex-row justify-center items-center text-white">
                <span className="text-[#00B4E5] font-bold mr-1">5000+</span>{" "}
                reviews on Google{" "}
                <Image src={googleIcon2} alt="google icon big" unoptimized/>
              </p>
              <div className="flex flex-row justify-center items-center gap-2">
                <span className="bg-[#00B4E5] px-3 py-5 rounded-full text-[14.79px] leading-[18.15px] md:text-[17.89px] md:leading-[21.95px] font-bold text-white">
                  4.8+
                </span>
                <Image src={starImg} alt="star img" width={110} height={154} unoptimized/>
              </div>
            </div>
          )
        ))}
      {isDrVideo
      ? <PatientReviewCardCarousel2 reviews={patientReviewData} /> 
      : isMigraine || isShoulderPain
      ? <PatientReviewWithOneVideo reviews={patientReviewData} />
      : <PatientReviewCardCarousel reviews={patientReviewData} />
    }
    </section>
  );
};

export default WhatPatientSayAboutUs;
