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
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import HeroSectionLucknow from "@/sections/ShoulderPain/HeroSectionLucknow";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorLucknow } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";

const ShoulderPainLucknow = () => {
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
      <HeroSectionLucknow />
      {/* <div ref={featuresRef}> */}
        <FeatureListSection featureContents={[
          shoulderPainFeatureListCardWithTitle1,
          shoulderPainFeatureListCardWithTitle2
        ]}/>
      {/* </div> */}
      {/* <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} /> */}
      <Clinicleadership  isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
      <Consultingdoctor doctorData={ConsultdoctorLucknow} doctorDataMob={ConsultdoctorLucknow}/>
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
      <Footer2 phoneNumber="+91-73 5871 2483"  />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default ShoulderPainLucknow;
