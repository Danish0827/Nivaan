import Faq from "@/sections/Faq/Faq";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import {
  RadioFrequencyFaqData,
  nextRadioFrequencyAblationTreatment,
  RadioFrequencyFeatureListCardData1,
  RadioFrequencyFeatureListCardData2,
  ConditionsTreatedRadioFrequencyCardData,
} from "@/app/api/radioFrequencyAblationNewData";
import dynamic from "next/dynamic";
import FeatureListCardSection from "./FeatureListCardSection";
import VideoSection from "@/sections/VideoSection/VideoSection";
import ConditionsTreatedSection from "@/sections/ConditionsTreatedSection/ConditionsTreatedSection";
import Footer2 from "@/sections/Footer/Footer2";
import VertebroplastyNCRImage from '../../public/desktop/vertebroplastyNCR.webp'
import { DoctorDataConsulting, doctorVideoData } from "@/app/api/v1DrVideoMenData";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionRFALPMumbai from "./ui/HeroSectionRFALPMumbai";
import FormAd_new from "@/sections/FormAd/FormAd_new";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
import FormAd2_new from "@/sections/FormAd/FormAd2_new";
import FormAd__1 from "@/sections/FormAd/FormAd__1";

const RadioFrequencyAblationMumbai = () => {
  const FloatingButton = dynamic(() => import("@/components/FloatingButton"));
  return (
    <>
      <NavbarMumbia isForm2={true} formLocation={"RadioFrequency Ablation Navbar Form"} />
      <HeroSectionRFALPMumbai
        achievementPoints={ACHIEVEMENT_POINTS} 
        heading="Chronic Pain Treatment with Radiofrequency Ablation in Delhi" 
        sub_heading="NCR & Mumbai"
        form={""} 
        imageSrc={VertebroplastyNCRImage.src} 
        subHeading="100% Insurance Coverage *" 
        showFormHeader={true} 
        formLocation="RadioFrequency Ablation Hero Section Form"
      />
        <FeatureListCardSection
          title1="When To Opt For A Radiofrequency Ablation Procedure?"
          title2="Why Opt For Nivaan’s Radiofrequency Ablation Procedure?"
          data1={RadioFrequencyFeatureListCardData1}
          data2={RadioFrequencyFeatureListCardData2}
        />
      <VideoSection videoUrl={"https://www.youtube.com/watch?v=RNfVojsbM78"} />
      <WhyChooseNivaan2 isForm2={true} formLocation="RadioFrequency Ablation Why Choose Nivaan Form" location="mumbai" />
      <ConditionsTreatedSection
        ConditionsTreatedCardData={ConditionsTreatedRadioFrequencyCardData}
      />
      {/* <FormAd__2  isForm2={true} formLocation={"RadioFrequency Ablation Navbar Form"} location="mumbai" /> */}
      <FormAd__1 isForm2={true} formLocation="RadioFrequency Ablation Navbar Form" />
      <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting} isForm2={true} formLocation="RadioFrequency Ablation Our Care Experts Form"/>
      <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} isForm2={true} formLocation="RadioFrequency Ablation Our Care Experts Form" location="mumbai"/>
      <WhatPatientSayAboutUs
        patientReviewData={nextRadioFrequencyAblationTreatment}
      />
      <Faq askedCardData={RadioFrequencyFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  );
};

export default RadioFrequencyAblationMumbai;

const ACHIEVEMENT_POINTS = [
  { id: "1", point: "30 - 60 Minutes Procedure"},
  { id: "2", point: "96% Success Rate" },
  { id: "3", point: "Insurance Support" },
]