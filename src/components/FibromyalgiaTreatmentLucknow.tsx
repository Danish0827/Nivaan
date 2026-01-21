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
import fibromyalgiaHero from "../../public/plantar/fibromyalgiaHero.webp";
import fibromyalgiaHeroMob from "../../public/plantar/fibromyalgiaHeroMob.webp";  
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import { fibromyalgiaFaqData, fibromyalgiaHeading, fibromyalgiaPatientReviewData, fibromyalgiaTreatmentAtNivan } from "@/app/api/fibromyalgiaData";
import googleImg from "../../public/googleImage.webp";
import smileImg from "../../public/smile.webp";
import likeImg from "../../public/like.webp";
import Image from "next/image";
import HeroSectionFibromyalgia from "./ui/HeroSectionFibromyalgia";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorLucknow } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";

const FibromyalgiaTreatmentLucknow = () => {

  return (
    <div>
      <Navbar isForm2={false} formLocation={"Navbar-FibromyalgiaTreatment"} />
      <HeroSectionFibromyalgia
        achievementPoints={ACHIEVEMENT_POINTS}
        heading="Best Fibromyalgia"
        sub_heading="Treatment in Delhi"
        sub_heading2="NCR & Lucknow"
        //subHeading1="And live a pain-free life"
        subHeading="100% Insurance Coverage*"
        formLocation="Hero-Section-Fibromyalgia-Treatment"
        imageSrc={fibromyalgiaHero.src}
        mobileImageSrc={fibromyalgiaHeroMob.src}
        pageRoute="fibromyalgia-treatment"
       // h2Tag="Advanced Avascular Necrosis Treatment Options in Delhi NCR"
        heroImgClassName="col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-14 lg:right-2/3 top-16 -right-8 lg:mt-14"
      />
      {/* <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob } isForm2={false} formLocation={"Fibromyalgia-Treatment-our-care-experts"} /> */}
      <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting} isForm2={false} formLocation={"Fibromyalgia-Treatment-our-care-experts"}/>
      <Consultingdoctor doctorData={ConsultdoctorLucknow} doctorDataMob={ConsultdoctorLucknow} isForm2={false} formLocation={"Fibromyalgia-Treatment-our-care-experts"}/>
      <TreatmentAtNivaan
        TreatmentCardData={fibromyalgiaTreatmentAtNivan}
        TreatmentHeading={fibromyalgiaHeading}
      />

      <WhatPatientSayAboutUs
        patientReviewData={fibromyalgiaPatientReviewData}
        useWhiteBackground={true}
        pageRoute="/lucknow/fibromyalgia-treatment"
      />
      <Faq askedCardData={fibromyalgiaFaqData} />
      {/* {showFloatingButton && <FloatingButton />} */}
      <FormAd isForm2={false} formLocation={"fibromyalgia-treatment-page"} pageRoute="fibromyalgia-treatment" cardData={CARD_DATA} />
      <FloatingButton formLocation="fibromyalgia-treatment-floating-button" />
      <Footer2 phoneNumber="+91-73 5808 1732" />
    </div>
  );
};

export default FibromyalgiaTreatmentLucknow;

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
  { id: "3", point: "Non-Surgical Pain Treatment" },
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