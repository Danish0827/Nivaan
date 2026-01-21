import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import FeatureListSection from "@/sections/FeatureListSection/FeatureListSection";
import React from "react";
import {
  migraineFaqData,
  migraineHeading,
  migraineReview,
  migraineTreatmentAtNivan,
  migraineWhatisProps,
  migraineFeatureListCardWithTitle1,
  migraineFeatureListCardWithTitle2,
} from "@/app/api/migraineData";
import FloatingButton from "@/components/FloatingButton";
import { DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import Footer2 from "@/sections/Footer/Footer2";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionMumbai from "@/sections/Migraine/HeroSectionMumbai";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
import FormAd_new from "@/sections/FormAd/FormAd_new";

const MigraineMumbai = () => {
  return (
    <>
      <NavbarMumbia/>
      <HeroSectionMumbai/>
        <FeatureListSection featureContents={[
          migraineFeatureListCardWithTitle1,
          migraineFeatureListCardWithTitle2
        ]}/>
      <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
        <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
      <WhyChooseNivaan2 location="mumbai"/>
      <TreatmentAtNivaan
        TreatmentCardData={migraineTreatmentAtNivan}
        TreatmentHeading={migraineHeading}
      />
      <FormAd_new location="mumbai"/>
      <WhatIsSection {...migraineWhatisProps}/>
      <WhatPatientSayAboutUs patientReviewData={migraineReview} />
      <Faq askedCardData={migraineFaqData} />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483"  />
    </>
  );
};

export default MigraineMumbai;
