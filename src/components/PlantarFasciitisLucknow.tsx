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
import plantarHero from "../../public/plantar/plantarHero.webp";
import plantarHeroMob from "../../public/plantar/plantarHeroMob.webp";  
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import { goutFaqData } from "@/app/api/goutData";
import { plantarFaqData, plantarHeading, plantarPatientReviewData, plantarTreatmentAtNivan } from "@/app/api/plantarData";
import googleImg from "../../public/googleImage.webp";
import smileImg from "../../public/smile.webp";
import likeImg from "../../public/like.webp";
import Image from "next/image";
import PlantarHeroSection from "./ui/PlantarFascilitisHeroSection";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorLucknow } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";

const PlantarFasciitisLucknow = () => {

  return (
    <div>
      <Navbar isForm2={false} formLocation={"Navbar-PlantarFasciitis"} />
      <PlantarHeroSection
        achievementPoints={ACHIEVEMENT_POINTS}
        heading="Best Plantar Fasciitis "
        sub_heading="Treatment in Delhi "
        sub_heading2="NCR & Lucknow"
        //subHeading1="And live a pain-free life"
        subHeading="100% Insurance Coverage*"
        formLocation="Hero-Section-Plantar-Fasciitis"
        imageSrc={plantarHero.src}
        mobileImageSrc={plantarHeroMob.src}
        pageRoute="plantar-fasciitis"
       // h2Tag="Advanced Avascular Necrosis Treatment Options in Delhi NCR"
       heroImgClassName="col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-44 lg:right-[56%] top-20 -right-8 lg:mt-7"
      />
      {/* <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob } isForm2={false} formLocation={"Plantar-Fasciitis-our-care-experts"} /> */}
      <Clinicleadership  doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting} isForm2={false} formLocation={"Plantar-Fasciitis-our-care-experts"}/>
      <Consultingdoctor doctorData={ConsultdoctorLucknow} doctorDataMob={ConsultdoctorLucknow} isForm2={false} formLocation={"Plantar-Fasciitis-our-care-experts"}/>
      <TreatmentAtNivaan
        TreatmentCardData={plantarTreatmentAtNivan}
        TreatmentHeading={plantarHeading}
      />

      <WhatPatientSayAboutUs
        patientReviewData={plantarPatientReviewData}
        useWhiteBackground={true}
        pageRoute="/lucknow/plantar-fasciitis"
      />
      <Faq askedCardData={plantarFaqData} />
      {/* {showFloatingButton && <FloatingButton />} */}
      <FormAd isForm2={false} formLocation={"plantar-fasciitis-page"} pageRoute="plantar-fasciitis" cardData={CARD_DATA} />
      <FloatingButton formLocation="plantar-fasciitis-floating-button" />
      <Footer2 phoneNumber="+91-73 5808 1732" />
    </div>
  );
};

export default PlantarFasciitisLucknow;

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
