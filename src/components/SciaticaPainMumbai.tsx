import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSectionJaipur from "@/sections/Sciatica/HeroSectionJaipur";
import FloatingButton from "@/components/FloatingButton";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
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
import { DoctorDataConsulting, doctorVideoData } from "@/app/api/v1DrVideoMenData";
import { DoctorDataConsultingMob, doctorVideoDataMob } from "@/app/api/v1DrVideoWomenData";
import { SciaticaPainFaqData, SciaticaPainHeading, SciaticaPainNewFeatureListCardData1, SciaticaPainNewFeatureListCardData2, SciaticaPainPatientReviewData, SciaticaPainTreatmentAtNivaan, WhatIsSciaticaPainCarouselCardData } from "@/app/api/sciaticaPainNewData";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorJaipur, ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import HeroSectionMumbai from "@/sections/Sciatica/HeroSectionMumbai";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import FormAd__1 from "@/sections/FormAd/FormAd__1";
import WhatPatientSayAboutUs2 from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs2";

const SciaticaPainMumbai = () => {

  const whatIsSectionProps = {
    heading: "What is Sciatica Pain ?",
    ImgSrc: sciaticaPainImage,
    ImgSrcMob: sciaticaPainImageMob,
    ImgTxt:
      "Sciatica pain is the pain that happens when the Sciatica nerve gets damaged.",
    cardData: WhatIsSciaticaPainCarouselCardData,
        hideImageOverlayText: true,

  };
  return (
    <>
      <NavbarMumbia isForm2={true} formLocation="Sciatica-Navbar-Form" />
      <HeroSectionMumbai />
        <FeatureListCardSection
          title1="Why opt for Nivaan’s Sciatica pain treatment?"
          title2="When does one get Sciatica pain treatment?"
          data1={SciaticaPainNewFeatureListCardData1}
          data2={SciaticaPainNewFeatureListCardData2}
      />
      <WhyChooseNivaan location="mumbai" isForm2={true} formLocation="Sciatica-Why-Choose-Nivaan-Form" />
      <TreatmentAtNivaan
        TreatmentCardData={SciaticaPainTreatmentAtNivaan}
        TreatmentHeading={SciaticaPainHeading}
      />
      <FormAd__1 isForm2={true} formLocation="Sciatica-FormAd-Form" />
        <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob} isForm2={true} 
        formLocation="Our-Care-Experts-Sciatica-Form" />
        <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} isForm2={true} 
        formLocation="Our-Care-Experts-Sciatica-Form" location="mumbai"/>
      <WhatIsSection {...whatIsSectionProps} />
      <WhatPatientSayAboutUs2 patientReviewData={SciaticaPainPatientReviewData} />
      <Faq askedCardData={SciaticaPainFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default SciaticaPainMumbai;
