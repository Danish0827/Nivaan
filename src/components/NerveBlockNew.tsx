import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/NerveBlock/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import {
  NerveBlockFaqData,
  NerveBlockFeatureListCardData1,
  NerveBlockFeatureListCardData2,
  NerveBlockPatientReviewData,
} from "@/app/api/nerveBlockNewData"
//import { usePathname } from "next/navigation";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "./FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import TreatmentOutcome from "./TreatmentOutcomes";
import VideoSection from "@/sections/VideoSection/VideoSection";
import ConditionsTreatedSection from "@/sections/ConditionsTreatedSection/ConditionsTreatedSection";
import { ConditionsTreatedCardData } from "@/app/api/radioFrequencyAblationNewData";
import { doctorVideoData } from "@/app/api/v1DrVideoMenData";
import { doctorVideoDataMob, OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const NerveBlockNew = () => {
  //const pathName = usePathname();
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  //const isNerveBlockNew = pathName === "/next/nerve-block-new";
  // const FloatingButton = dynamic(() => import("@/components/FloatingButton"));

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
      <Navbar isForm2={true} formLocation={"Navbar-NerveBlockNew"} />
      <HeroSection />
      {/* <HeroSection 
        pathName="/next/nerve-block-new"
        heading="Nerve Block Procedure in Delhi NCR"
        imgSrc={NerveBlockNewImg.src}
        imgSrcMob={NerveBlockNewImgMob.src}
      /> */}
      {/* <div ref={expertsRef}> */}
        <FeatureListCardSection
          title1="Why opt for Nivaan's Nerve Block Procedure?"
          title2="When To opt for a Nerve Block Procedure?"
          data1={NerveBlockFeatureListCardData1}
          data2={NerveBlockFeatureListCardData2}
        />
      {/* </div> */}
      <VideoSection videoUrl={"https://www.youtube.com/watch?v=XQP-CQq0aBw"} />
      <div className="mt-12 lg:mt-0"></div>
      <WhyChooseNivaan isForm2={true} formLocation="Nerve-Block-Why-Choose-Nivaan-Form" />
      <TreatmentOutcome />
      <ConditionsTreatedSection
        ConditionsTreatedCardData={ConditionsTreatedCardData}
      />
      <FormAd isForm2={true} formLocation="Nerve-Block-FormAd-Form" />
      <OurCareExpertsNcrs
        DoctorData={OurCareExpertsNcr}
        Heading="Our Care Experts"
        isForm2={true} 
        formLocation="Our-Care-Experts-Nerve-Block-Form"
      />
      <WhatPatientSayAboutUs patientReviewData={NerveBlockPatientReviewData} />
      <FloatingButton />
      <Faq askedCardData={NerveBlockFaqData} />
      <Footer phoneNumber="+91-73 5871 2483" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default NerveBlockNew;
