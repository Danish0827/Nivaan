import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/OsteoarthritisTreatment/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
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
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob, OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const OsteoarthritisTreatment = () => {
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
      <FeatureListCardSection
         title1={<>Why opt for Nivaan&apos;s<br />Osteoarthritis treatment?</>}
        title2=
        {<>When does one get<br />Osteoarthritis treatment?</>}
        data1={OsteoarthritisFeatureListCardData1}
        data2={OsteoarthritisFeatureListCardData2}
        pathname="osteo"
      />
      {/* {showFloatingButton && <FloatingButton />} */}

      <WhyChooseNivaan />
      <TreatmentAtNivaan
        TreatmentCardData={osteoarthritisTreatmentAtNivan}
        TreatmentHeading={osteoarthritisTreatmentAtNivanHeading}
      />
      <FormAd isForm2={true} formLocation={"Osteoarthritis Treatment Navbar Form"} />
      {/* <div ref={expertsRef}> */}
        <OurCareExpertsNcrs  DoctorData={OurCareExpertsNcr} Heading="Our Care Experts" />
      {/* </div> */}
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

export default OsteoarthritisTreatment;
