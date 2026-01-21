import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import {
  TrigeminalFaqData,
  nextRadioFrequencyAblationTreatment,
  TrigeminalCard1,
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
import { doctorVideoData } from "@/app/api/v1DrVideoMenData";
import { doctorVideoDataMob,OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const TrigeminalNeuralgiaTreatment = () => {
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
      <Navbar isForm2={true} formLocation={"Trigeminal Neuralgia Treatment NAV"} />
      {/* <HeroSection /> */}
      <ThreeColumnHeroBannerForm2
        achievementPoints={ACHIEVEMENT_POINTS} 
        heading="Trigeminal Neuralgia Treatment with Radiofrequency Ablation in Delhi NCR" 
        form={""} 
        imageSrc={VertebroplastyNCRImage.src} 
        subHeading="100% Insurance Coverage *" 
        showFormHeader={true} 
        formLocation="Trigeminal Neuralgia Treatment Hero Section Form"
      />
      {/* {showFloatingButton && <FloatingButton />} */}
      {/* <div ref={expertsRef}> */}
        <FeatureListCardSection
          title1="When To Undergo Trigeminal Neuralgia Treatment? - Severe, episodic facial pain"
          title2="Why Opt For Nivaan’s RFA procedure for Trigeminal Neuralgia Treatment?"
          data1={TrigeminalCard1}
          data2={RadioFrequencyFeatureListCardData2}
        />
      {/* </div> */}
      <VideoSection videoUrl={"https://www.youtube.com/watch?v=RNfVojsbM78"} />
      <WhyChooseNivaan isForm2={true} formLocation="Trigeminal Neuralgia Treatment Why Choose Nivaan Form" />
      <ConditionsTreatedSection
        ConditionsTreatedCardData={ConditionsTreatedRadioFrequencyCardData}
      />
      <FormAd isForm2={true} formLocation={"Trigeminal Neuralgia Treatment Navbar Form"} />
      {/* <OurCareExperts
        doctorData={doctorVideoData}
        doctorDataMob={doctorVideoDataMob}
        isForm2={true} 
        formLocation="RadioFrequency Ablation Our Care Experts Form"
      /> */}
      <OurCareExpertsNcrs DoctorData={OurCareExpertsNcr} Heading="Our Care Experts" isForm2={true} formLocation="Trigeminal Neuralgia Treatment Our Care Experts Form"/>
      <WhatPatientSayAboutUs
        patientReviewData={nextRadioFrequencyAblationTreatment}
      />
      <Faq askedCardData={TrigeminalFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  );
};

export default TrigeminalNeuralgiaTreatment;

const ACHIEVEMENT_POINTS = [
  { id: "1", point: "30 - 60 Minutes Procedure"},
  { id: "2", point: "96% Success Rate" },
  { id: "3", point: "Insurance Support" },
]