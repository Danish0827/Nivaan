import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/PainMedication/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurProcedures from "@/sections/OurProcedures/OurProcedures";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import ConditionsTreated from "./ConditionsTreated";
import ImportantStudies from "./ImportantStudies";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import FloatingButton from "@/components/FloatingButton";
import {
  painMedicationFaqData,
  painMedicationPatientReviewData,
  painMedicationSideEffects,
  PainMedicationsImpStudies,
} from '@/app/api/painMedicationData';
import { chronicPainTreatmentAtNivan, chronicPainTreatmentAtNivanHeading } from "@/app/api/chronicPainData";
import { doctorData2, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob2 } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
// import ClinicLocations from "./ClinicLocations";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorJaipur } from "@/app/api/ConsultingDoctorData";

const PainmedicationJaipur = () => {
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
      {/* <div ref={expertsRef}> */}
        <OurProcedures
          procedureCardData={chronicPainTreatmentAtNivan}
          procedureHeading={chronicPainTreatmentAtNivanHeading}
        />
      {/* </div> */}
      <ConditionsTreated
        heading="Side Effects of Long-Term Painkiller Use"
        conditions={painMedicationSideEffects}
      />
        <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting }/>
        <Consultingdoctor doctorData={ConsultdoctorJaipur} doctorDataMob={ConsultdoctorJaipur}/>
      <ImportantStudies
        ImportantStudiesHeading="Important Studies on The Effects of Painkillers"
        ImportantStudiesCardData={PainMedicationsImpStudies}
      />
      <WhatPatientSayAboutUs
        useWhiteBackground={true}
        patientReviewData={painMedicationPatientReviewData}
      />
      <Faq askedCardData={painMedicationFaqData} />
      <FormAd />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default PainmedicationJaipur;
