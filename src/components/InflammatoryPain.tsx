import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/InflammatoryPain/HeroSection";
import FloatingButton from "@/components/FloatingButton";
import Navbar from "@/sections/Nav/Navbar";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
//import { usePathname } from "next/navigation";
import FeatureListCardSection from "./FeatureListCardSection";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import sciaticaPainImage from "../../public/Siatica.webp";
import sciaticaPainImageMob from "../../public/Siatica.webp";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import Footer2 from "@/sections/Footer/Footer2";
import { doctorVideoDataMob,OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { InflammatoryNewFeatureListCardData1,InflammatoryPainNewFeatureListCardData2,InflammatoryPainTreatmentAtNivaan,InflammatoryPainHeading,
    WhatIsInflammatoryPainCarouselCardData,InflammatoryPainPatientReviewData,InflammatoryPainFaqData ,chronicPainWomenReviewData} from "@/app/api/inflammatoryPainData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import FormAd__2 from "@/sections/FormAd/FormAd_2";
import WhatPatientSayAboutUs2 from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs2";

const InflammatoryPain= () => {
  const whatIsSectionProps = {
    heading: "What is Sciatica Pain ?",
    ImgSrc: sciaticaPainImage,
    ImgSrcMob: sciaticaPainImageMob,
    ImgTxt:
      "Sciatica pain is the pain that happens when the Sciatica nerve gets damaged.",
    cardData: WhatIsInflammatoryPainCarouselCardData,
        hideImageOverlayText: true,

  };
  return (
    <>
      <NavbarMumbia isForm2={true} formLocation="Inflammatory-Pain-Form" />
      <HeroSection />
        <FeatureListCardSection
          title1="Why opt for Nivaan’s Inflammatory pain treatment?"
          title2="When does one get Inflammatory pain treatment?"
          data1={InflammatoryNewFeatureListCardData1}
          data2={InflammatoryPainNewFeatureListCardData2}
      />
      {/* </div> */}
      <OurCareExpertsNcrs
       Heading={'Our Care Experts'} DoctorData={OurCareExpertsNcr} bgColor={true} />
      <WhyChooseNivaan isForm2={true} formLocation="Sciatica-Why-Choose-Nivaan-Form" />
      <TreatmentAtNivaan
        TreatmentCardData={InflammatoryPainTreatmentAtNivaan}
        TreatmentHeading={InflammatoryPainHeading}
      />
      <FormAd__2 isForm2={true} formLocation="Inflammatory-pain" />
      {/* <WhatPatientSayAboutUs patientReviewData={chronicPainWomenReviewData} useWhiteBackground={true} /> */}
      <WhatPatientSayAboutUs2 patientReviewData={chronicPainWomenReviewData} useWhiteBackground={true}/>
      <Faq askedCardData={InflammatoryPainFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default InflammatoryPain;
