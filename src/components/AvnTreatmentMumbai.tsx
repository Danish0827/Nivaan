import React from "react";
import { regenerativeOrthopedics } from "@/app/api/data";
import { avnTreatmentOutcomes, avnPatientReview, avnDoctorData, avnFaqData, avnTreatmentAtNivaan } from "@/app/api/avnTreatmentData";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import ThreeColumnHeroBanner from "./ui/ThreeColumnHeroSection";
import IconCardGrid from "./ui/IconCardGrid";
import AvnTreatmentHeroImg from "../../public/avn_lp_hero.webp";
import AvnTreatmentHeroImgMob from "../../public/avn_lp_heroMob.webp";
import FormAd from "@/sections/FormAd/FormAd";
import OurProcedures from "@/sections/OurProcedures/OurProcedures";
import SingleExpert from "@/sections/OurCareExperts/SingleExpert";
import { chronicPainTreatmentAtNivan } from "@/app/api/chronicPainData";
import { FooterLinksMobile4 } from "@/app/api/footerDataMob";
import { Footer2Links, FooterLinks4 } from "@/app/api/footerData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";
import { DoctorDataConsultingMob, OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import { DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import FormAd_new from "@/sections/FormAd/FormAd_new";
const AvnTreatmentMumbai = () => {
  return (
    <div>
      <NavbarMumbia isForm2={false} formLocation={"Navbar-AvnTreatment"} />
      <ThreeColumnHeroBanner
        achievementPoints={ACHIEVEMENT_POINTS}
        heading="Get Nivaan's Advanced"
        heading2="AVN Treatment"
        subHeading1="And live a pain-free life"
        subHeading="100% Insurance Coverage*"
        formLocation="Hero-Section-Next-AvnTreatment"
        imageSrc={AvnTreatmentHeroImg.src}
        mobileImageSrc={AvnTreatmentHeroImgMob.src}
        pageRoute="avn-treatment"
        h2Tag="Advanced Avascular Necrosis Treatment Options in Delhi NCR"
        location="mumbai"
      />
     <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob}/>
     <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
      <OurProcedures
        procedureCardData={chronicPainTreatmentAtNivan}
        procedureHeading={avnTreatmentAtNivaan}
      />
      <div className="bg-[#EAF1FB] p-[1px]">
        <IconCardGrid
          title="Regenerative Orthopedics"
          gridData={regenerativeOrthopedics}
        />
        <IconCardGrid
          title="Treatment Outcomes"
          gridData={avnTreatmentOutcomes}
        />
      </div>

      <WhatPatientSayAboutUs
        patientReviewData={avnPatientReview}
        useWhiteBackground={true}
        pageRoute="avn-treatment"
      />
      <Faq askedCardData={avnFaqData} />
      <FormAd_new isForm2={false} formLocation={"avn-treatment-page"} pageRoute="avn-treatment" location="mumbai"/>
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5808 1732"  />
    </div>
  );
};

export default AvnTreatmentMumbai;

const ACHIEVEMENT_POINTS = [
  { id: "1", point: "Cashless Treatment" },
  { id: "2", point: "Advanced Technique" },
  { id: "3", point: "10k+ Happy Patients" },
];
