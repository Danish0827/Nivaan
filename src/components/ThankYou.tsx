'use client'
import { montserratBold, rubikReg, rubikSemiBolder } from "@/app/fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ThankYouCard from "./ThankYouCard";
import ThankYouPlaceCard from "./ThankYouPlaceCard";
import { ThankYouCardData } from "@/app/api/thankYouCardData";
import { useSearchParams } from 'next/navigation'

const ThankYou = () => {
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone')
  
  useEffect(() => {
    console.log('phone: ', phone)
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'conversion',
        'phone': phone,
        'gtm.start': Date.now(),
        'gtm.uniqueEventId': window.dataLayer.length + 1
      });
    }
  }, [phone]);
  return (
    <div className={`flex flex-col gap-6 py-10 pb-20`}>
      <div className="flex justify-center items-center ">
        <Image
          src={require("../../public/desktop/nivaan-logo.webp")}
          alt="logo"
          className="hover:cursor-pointer"
          height={30}
          unoptimized
        />
      </div>
      <div className="bg-[#EAF1FB] h-[260px] md:h-[340px]">
        <div className="max-w-7xl mx-auto p-6 flex flex-col items-center gap-4 ">
          <Image
            src={require("../../public/thankyou-tick.webp")}
            alt="logo-tick"
            unoptimized
          />
          <p
            className={`${montserratBold.className} text-[#2D458F] lg:text-6xl text-2xl `}
          >
            Thank you{" "}
          </p>
          <p
            className={`${rubikReg.className}  font-normal text-center text-sm lg:text-2xl w-[90%] md:w-[50%]`}
          >
            We will get in touch with you shortly to book your
            consultation with our team of experts.
          </p>
          <div className="flex gap-3 translate-y-6 md:translate-y-4">
            {ThankYouCardData.map((card, i) => (
              <ThankYouCard key={i} card={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-black md:text-[#2F438F] lg:text-2xl py-10 text-sm">
        <p className={`${rubikReg.className} text-center`}>
          In case of any queries, please contact{" "}
          <br className="block md:hidden" />
          <span className={`${rubikSemiBolder.className} font-semibold`}>
            {/* +91-90 7005 7005 */}
            {/* +91-73 5808 1732 */}
            +91-7358712483
            <br />
          </span>{" "}
          {""}
          or visit your nearest Nivaan clinic
        </p>
      </div>
      <div className="max-w-7xl mx-auto  w-full flex justify-center px-6">
        <ThankYouPlaceCard />
      </div>
    </div>
  );
};

export default ThankYou;
//
