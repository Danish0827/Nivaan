import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import FloatingButton from "@/components/FloatingButton";
import HeroSectionKPW from "@/sections/KneePainWomen/HeroSectionWomenKP";
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading } from "@/app/api/kneePainTreatment";
import { KneePainElderlyWomenReviewData, kneePainFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import Footer2 from "@/sections/Footer/Footer2";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorJaipur, ConsultdoctorLucknow, ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";

const KneepainwomenMumbai = ({pathName, imgStyle}: {pathName: string, imgStyle?: string}) => {
  return (
    <>
      <Navbar />
      <HeroSectionKPW pathName={pathName} imgStyle={imgStyle} />
        <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
        <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai}/>
      {/* </div> */}
      <TreatmentAtNivaan
        TreatmentCardData={kneePainTreatmentAtNivan}
        TreatmentHeading={kneePainTreatmentAtNivanHeading}
      />
      <WhatPatientSayAboutUs
        patientReviewData={KneePainElderlyWomenReviewData}
        useWhiteBackground={true}
      />
      <Faq askedCardData={kneePainFaqData} />
      <FormAd />
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5808 1732"  />

    </>
  );
};

export default KneepainwomenMumbai;
