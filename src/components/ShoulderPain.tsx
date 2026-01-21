import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import HeroSection from "@/sections/ShoulderPain/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import FeatureListSection from "@/sections/FeatureListSection/FeatureListSection";
import React from "react";
import {
  shoulderPainFaqData,
  shoulderPainHeading,
  shoulderPainTreatmentAtNivan,
  shoulderPainReview,
  shoulderPainWhatisProps,
  shoulderPainFeatureListCardWithTitle1,
  shoulderPainFeatureListCardWithTitle2,
} from "../app/api/shoulderPainData";
import FloatingButton from "@/components/FloatingButton";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";

const ShoulderPain = () => {
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const featuresRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   if (featuresRef.current) {
  //     const { top } = featuresRef.current.getBoundingClientRect();
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
      {/* <div ref={featuresRef}> */}
        <FeatureListSection featureContents={[
          shoulderPainFeatureListCardWithTitle1,
          shoulderPainFeatureListCardWithTitle2
        ]}/>
      {/* </div> */}
      <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} />
      <WhyChooseNivaan/>
      <TreatmentAtNivaan
        TreatmentCardData={shoulderPainTreatmentAtNivan}
        TreatmentHeading={shoulderPainHeading}
      />
      <FormAd />
      <WhatIsSection {...shoulderPainWhatisProps}/>
      <WhatPatientSayAboutUs patientReviewData={shoulderPainReview} />
      <Faq askedCardData={shoulderPainFaqData} />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5871 2483" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default ShoulderPain;
