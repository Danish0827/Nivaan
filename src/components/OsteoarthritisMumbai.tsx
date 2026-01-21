import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import FloatingButton from "@/components/FloatingButton";
import {
  osteoarthritisTreatmentAtNivan,
  osteoarthritisTreatmentAtNivanHeading,
  WhatIsOsteoarthritisCarouselCardData,
  nextOsteoarthritisTreatment,
  OsteoarthritisFeatureListCardData1,
  OsteoarthritisFeatureListCardData2,
  osteoarthritisTreatmentFaqData,
} from "@/app/api/osteoarthritisTreatmentData";
import FeatureListCardSection from "./FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/osteoarthritis/WhatIsImg.webp";
import ImgSrcKneePainMob from "../../public/mobile/osteoarthritis/WhatIsImgMob.webp";
import Footer2 from "@/sections/Footer/Footer2";
import { DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import HeroSectionLucknow from "@/sections/OsteoarthritisTreatment/HeroSectionLucknow";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import {  ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionMumbai from "@/sections/OsteoarthritisTreatment/HeroSectionMumbI";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
import FormAd_new from "@/sections/FormAd/FormAd_new";
import FormAd__2 from "@/sections/FormAd/FormAd_2";
import FormAd__1 from "@/sections/FormAd/FormAd__1";

const OsteoarthritisMumbai = () => {
  return (
    <>
      <NavbarMumbia />
      <HeroSectionMumbai/>
      <FeatureListCardSection
         title1={<>Why opt for Nivaan&apos;s<br />Osteoarthritis treatment?</>}
        title2=
        {<>When does one get<br />Osteoarthritis treatment?</>}
        data1={OsteoarthritisFeatureListCardData1}
        data2={OsteoarthritisFeatureListCardData2}
        pathname="osteo"
      />
      <WhyChooseNivaan2 location="mumbai"/>
      <TreatmentAtNivaan
        TreatmentCardData={osteoarthritisTreatmentAtNivan}
        TreatmentHeading={osteoarthritisTreatmentAtNivanHeading}
      />
      <FormAd__1 isForm2={true} formLocation={"Osteoarthritis Treatment Navbar Form"} />
        <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
        <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
      <WhatIsSection
        heading="What is Osteoarthritis Pain?"
        ImgSrc={ImgSrcKneePain}
        ImgSrcMob={ImgSrcKneePainMob}
        ImgTxt="Osteoarthritis pain is the soreness caused by the degeneration of cartilage in the joints and the underlying bone."
        cardData={WhatIsOsteoarthritisCarouselCardData}
        separatorColor={"#2F438F"}
        imageTextColor={"#000000"}
        hideImageOverlayText={true}
      />
      <WhatPatientSayAboutUs patientReviewData={nextOsteoarthritisTreatment} />
      <Faq askedCardData={osteoarthritisTreatmentFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  );
};

export default OsteoarthritisMumbai;
