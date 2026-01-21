import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
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
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import ConditionsTreatedSection from "@/sections/ConditionsTreatedSection/ConditionsTreatedSection";
import Footer2 from "@/sections/Footer/Footer2";
import VertebroplastyNCRImage from '../../public/desktop/vertebroplastyNCR.webp'
import ThreeColumnHeroBannerForm2 from "./ui/ThreeColumnHeroSectionForm2";
import { DoctorDataConsulting, doctorVideoData } from "@/app/api/v1DrVideoMenData";
import { doctorVideoDataMob } from "@/app/api/v1DrVideoWomenData";
import HeroSectionRFALPJaipur from "./ui/HeroSectionRFALPJaipur";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorJaipur } from "@/app/api/ConsultingDoctorData";

const RadioFrequencyAblationJaipur = () => {
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  const FloatingButton = dynamic(() => import("@/components/FloatingButton"));

  // const handleScroll = () => {
  //   if (expertsRef.current) {
  //     const { top } = expertsRef.current.getBoundingClientRect();
  //     if (top <= window.innerHeight) {
  //       setShowFloatingButton(true);
  //     } else {
  //       setShowFloatingButton(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <Navbar isForm2={true} formLocation={"RadioFrequency Ablation Navbar Form"} />
      {/* <HeroSection /> */}
      <HeroSectionRFALPJaipur
        achievementPoints={ACHIEVEMENT_POINTS} 
        heading="Chronic Pain Treatment with Radiofrequency Ablation in Delhi" 
        sub_heading="NCR & Jaipur"
        form={""} 
        imageSrc={VertebroplastyNCRImage.src} 
        subHeading="100% Insurance Coverage *" 
        showFormHeader={true} 
        formLocation="RadioFrequency Ablation Hero Section Form"
      />
      {/* {showFloatingButton && <FloatingButton />} */}
      {/* <div ref={expertsRef}> */}
        <FeatureListCardSection
          title1="When To Opt For A Radiofrequency Ablation Procedure?"
          title2="Why Opt For Nivaan’s Radiofrequency Ablation Procedure?"
          data1={RadioFrequencyFeatureListCardData1}
          data2={RadioFrequencyFeatureListCardData2}
        />
      {/* </div> */}
      <VideoSection videoUrl={"https://www.youtube.com/watch?v=RNfVojsbM78"} />
      <WhyChooseNivaan isForm2={true} formLocation="RadioFrequency Ablation Why Choose Nivaan Form" />
      <ConditionsTreatedSection
        ConditionsTreatedCardData={ConditionsTreatedRadioFrequencyCardData}
      />
      <FormAd  isForm2={true} formLocation={"RadioFrequency Ablation Navbar Form"} />
      {/* <OurCareExperts
        doctorData={doctorVideoData}
        doctorDataMob={doctorVideoDataMob}
        isForm2={true} 
        formLocation="RadioFrequency Ablation Our Care Experts Form"
      /> */}
      <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting} isForm2={true} formLocation="RadioFrequency Ablation Our Care Experts Form"/>
      <Consultingdoctor doctorData={ConsultdoctorJaipur} doctorDataMob={ConsultdoctorJaipur} isForm2={true} formLocation="RadioFrequency Ablation Our Care Experts Form"/>
      <WhatPatientSayAboutUs
        patientReviewData={nextRadioFrequencyAblationTreatment}
      />
      <Faq askedCardData={RadioFrequencyFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  );
};

export default RadioFrequencyAblationJaipur;

const ACHIEVEMENT_POINTS = [
  { id: "1", point: "30 - 60 Minutes Procedure"},
  { id: "2", point: "96% Success Rate" },
  { id: "3", point: "Insurance Support" },
]