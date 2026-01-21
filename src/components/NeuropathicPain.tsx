import React from "react";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import ThreeColumnHeroBanner from "./ui/ThreeColumnHeroSection";
import FormAd from "@/sections/FormAd/FormAd";
import { FooterLinksMobile4 } from "@/app/api/footerDataMob";
import { FooterLinks4 } from "@/app/api/footerData";
import neuropathicPainHero from "../../public/gout/neuropathiHero.webp";
import neuropathicPainHeroMob from "../../public/gout/neuropathiHeroMob.webp";  
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import { neuropatheticHeading, neuropatheticPatientReviewData, neuropatheticTreatmentAtNivan, neuropathicFaqData } from "@/app/api/neuropathicPainData";
import googleImg from "../../public/googleImage.webp";
import smileImg from "../../public/smile.webp";
import likeImg from "../../public/like.webp";
import Image from "next/image";

const NeuropathicPain = () => {

  return (
    <div>
      <Navbar isForm2={false} formLocation={"Navbar-NeuropathicPain"} />
      <ThreeColumnHeroBanner
        achievementPoints={ACHIEVEMENT_POINTS}
        heading="Best Neuropathic Pain Treatment in Delhi NCR"
        //subHeading1="And live a pain-free life"
        subHeading="100% Insurance Coverage*"
        formLocation="Hero-Section-Neuropathic-Pain"
        imageSrc={neuropathicPainHero.src}
        mobileImageSrc={neuropathicPainHeroMob.src}
        pageRoute="neuropathic-pain"
       // h2Tag="Advanced Avascular Necrosis Treatment Options in Delhi NCR"
       heroImgClassName="col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-7 lg:right-2/3 top-16 right-px lg:mt-7"
      />
      <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob } isForm2={false} formLocation={"Neuropathic-Pain-our-care-experts"} />
      <TreatmentAtNivaan
        TreatmentCardData={neuropatheticTreatmentAtNivan}
        TreatmentHeading={neuropatheticHeading}
      />

      <WhatPatientSayAboutUs
        patientReviewData={neuropatheticPatientReviewData}
        useWhiteBackground={true}
        pageRoute="neuropathic-pain"
      />
      <Faq askedCardData={neuropathicFaqData} />
      {/* {showFloatingButton && <FloatingButton />} */}
      <FormAd isForm2={false} formLocation={"neuropathic-pain-page"} pageRoute="neuropathic-pain" cardData={CARD_DATA} />
      <FloatingButton formLocation="neuropathic-pain-floating-button" />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile4} FooterLinks={FooterLinks4} />
    </div>
  );
};

export default NeuropathicPain;

const ACHIEVEMENT_POINTS = [
  { 
    id: "1", 
    point: (
      <span className="flex items-center gap-1">
        4.8+ Rating on <Image src={googleImg.src} alt="google-icon" width={24} height={24} unoptimized/>
      </span>
    ) 
  },
  { id: "2", point: "90% Surgeries Avoided" },
  { id: "3", point: "25K+ Happy Patients" },
];

const CARD_DATA = [
    {
      title: "4.8/5",
      desc: "Positive Reviews",
      img: googleImg,
    },
    {
      title: "20K+",
      desc: "Happy Patients",
      img: smileImg,
    },
    {
      title: "90%",
      desc: "Surgeries Avoided",
      img: likeImg,
    },
  ];