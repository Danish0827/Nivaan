import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSectionMumbai from "@/sections/PainMedication/HeroSectionMumbai";
import Navbar from "@/sections/Nav/Navbar";
import OurProcedures from "@/sections/OurProcedures/OurProcedures";
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
import {  DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorLucknow, ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import FormAd_new from "@/sections/FormAd/FormAd_new";

const PainmedicationMumbai = () => {
  return (
    <>
      <NavbarMumbia />
      <HeroSectionMumbai />
        <OurProcedures
          procedureCardData={chronicPainTreatmentAtNivan}
          procedureHeading={chronicPainTreatmentAtNivanHeading}
        />
      <ConditionsTreated
        heading="Side Effects of Long-Term Painkiller Use"
        conditions={painMedicationSideEffects}
      />
      <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
      <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
      <ImportantStudies
        ImportantStudiesHeading="Important Studies on The Effects of Painkillers"
        ImportantStudiesCardData={PainMedicationsImpStudies}
      />
      <WhatPatientSayAboutUs
      useWhiteBackground={true}
        patientReviewData={painMedicationPatientReviewData}
      />
      <Faq askedCardData={painMedicationFaqData} />
      {/* <FormAd_new /> */}
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5808 1732"  />
    </>
  );
};

export default PainmedicationMumbai;
