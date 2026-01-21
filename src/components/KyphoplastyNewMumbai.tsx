import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KyphoplastyNew/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import FloatingButton from "@/components/FloatingButton";
import {
  KyphoplastyNewFeatureListCardData1,
  KyphoplastyNewFeatureListCardData2,
  kyphoplastyConditionsTreated,
  nextKyphoplastyReviewData,
  KyphoplastyFaqData
} from "../app/api/kyphoplasty";
import FeatureListCardSection from "./FeatureListCardSection";
import ConditionsTreated from "./ConditionsTreated";
import Footer2 from "@/sections/Footer/Footer2";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionMumbai from "@/sections/KyphoplastyNew/HeroSectionMumbai";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
import FormAd_new from "@/sections/FormAd/FormAd_new";
import WhatPatientSayAboutUs2 from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs2";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import { DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";

const KyphoplastyNewMumbai = () => {
  return (
    <>
        <NavbarMumbia />
        <HeroSectionMumbai />
        <FeatureListCardSection title1="When To Opt For A Kyphoplasty?" title2="Why Opt For Nivaan’s Kyphoplasty?" data1={KyphoplastyNewFeatureListCardData1} data2={KyphoplastyNewFeatureListCardData2}  />
          <WhyChooseNivaan2 location="mumbai"/>
        <ConditionsTreated 
          heading="Conditions Treated By Kyphoplasty" 
          conditions={kyphoplastyConditionsTreated} 
        />
        <FormAd_new location="mumbai"/>
        <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
        <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
        <WhatPatientSayAboutUs2 patientReviewData={nextKyphoplastyReviewData} />
        <Faq askedCardData={KyphoplastyFaqData} />
        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}

export default KyphoplastyNewMumbai;
