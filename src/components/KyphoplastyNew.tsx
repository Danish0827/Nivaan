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
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import ConditionsTreated from "./ConditionsTreated";
import Footer2 from "@/sections/Footer/Footer2";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";

const KyphoplastyNew = () => {
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  
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
        <Navbar />
        <HeroSection />
        <FeatureListCardSection title1="When To Opt For A Kyphoplasty?" title2="Why Opt For Nivaan’s Kyphoplasty?" data1={KyphoplastyNewFeatureListCardData1} data2={KyphoplastyNewFeatureListCardData2}  />
        {/* {showFloatingButton && <FloatingButton />} */}
        {/* <div ref={expertsRef}> */}
          <WhyChooseNivaan />
        {/* </div> */}
        <ConditionsTreated 
          heading="Conditions Treated By Kyphoplasty" 
          conditions={kyphoplastyConditionsTreated} 
        />  
        <FormAd />
        <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} />
        <WhatPatientSayAboutUs patientReviewData={nextKyphoplastyReviewData} />
        <Faq askedCardData={KyphoplastyFaqData} />
        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}

export default KyphoplastyNew;
