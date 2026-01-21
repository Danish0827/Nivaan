import React from "react";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import HeroSectionGoutPain from "./ui/HeroSectionGoutPain";
import FormAd from "@/sections/FormAd/FormAd";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import goutPain from "../../public/gout/goutHero.webp";
import goutPainMob from "../../public/gout/goutHeroMob.webp";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { goutFaqData, goutHeading, goutPatientReviewData, goutTreatmentAtNivan } from "@/app/api/goutData";
import SingleTreatmentAtNivaan from "@/sections/TreatmentAtNivaan/SingleTreatmentAtNivaan";
import googleImg from "../../public/googleImage.webp";
import smileImg from "../../public/smile.webp";
import likeImg from "../../public/like.webp";
import Image from "next/image";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorJaipur } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";

const GoutPainJaipur = () => {

  return (
    <div>
      <Navbar isForm2={false} formLocation={"Navbar-GoutPain"} />
      <HeroSectionGoutPain
        achievementPoints={ACHIEVEMENT_POINTS}
        heading="Best Gout Pain "
        heading1="Treatment in Delhi"
        sub_heading="NCR & Jaipur"
        //subHeading1="And live a pain-free life"
        subHeading="100% Insurance Coverage*"
        formLocation="Hero-Section-Gout-Pain"
        imageSrc={goutPain.src}
        mobileImageSrc={goutPainMob.src}
        pageRoute="gout-pain"
       // h2Tag="Advanced Avascular Necrosis Treatment Options in Delhi NCR"
       heroImgClassName="col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-32 lg:right-[55%] top-20 -right-8 lg:mt-7"
      />
      {/* <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob } isForm2={false} formLocation={"Gout-Pain-our-care-experts"} /> */}
      <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting} isForm2={false} formLocation={"Gout-Pain-our-care-experts"}/>
      <Consultingdoctor doctorData={ConsultdoctorJaipur} doctorDataMob={ConsultdoctorJaipur} isForm2={false} formLocation={"Gout-Pain-our-care-experts"}/>
      <SingleTreatmentAtNivaan
        TreatmentCardData={goutTreatmentAtNivan}
        TreatmentHeading={goutHeading}
      />

      <WhatPatientSayAboutUs
        patientReviewData={goutPatientReviewData}
        useWhiteBackground={true}
        pageRoute="/vq/jaipur/gout-pain"
      />
      <Faq askedCardData={goutFaqData} />
      {/* {showFloatingButton && <FloatingButton />} */}
      <FormAd isForm2={false} formLocation={"gout-pain-page"} pageRoute="gout-pain" cardData={CARD_DATA} />
      <FloatingButton formLocation="gout-pain-floating-button" />
      <Footer2 phoneNumber="+91-73 5808 1732"/>
    </div>
  );
};

export default GoutPainJaipur;

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
