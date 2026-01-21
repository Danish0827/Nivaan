import React from "react";
import HeroSection from "@/sections/HipPain/HeroSection";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections//TreatmentAtNivaan/TreatmentAtNivaan";
import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "./FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import AffectedHipPainDesktop from "../../public/hip.webp"
import AffectedHipPainMob from "../../public/hipMob.webp"
import Footer2 from "@/sections/Footer/Footer2";
import { HipPainFeatureListCardData2, WhatIsHipPainCarouselCardData, hipPainFaqData, hipPainTreatmentAtNivaanHeading, hipPainTreatmentAtNivan } from "@/app/api/hipPain";
import { NeckPainFeatureListCardData1 } from "@/app/api/neckPainData";
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { DoctorDataConsultingMob, doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { KneePainReviewData } from "@/app/api/v1KneePainElderlyWomenNewData";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import { ConsultdoctorLucknow, ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionMumbai from "@/sections/HipPain/HeroSectionMumbai";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
import FormAd__1 from "@/sections/FormAd/FormAd__1";
import FormAd__2 from "@/sections/FormAd/FormAd_2";
import FormAd_new from "@/sections/FormAd/FormAd_new";
import WhatPatientSayAboutUs2 from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs2";
const HipPainMumbai = () => {
    const whatIsSectionProps = {
        heading: "What is Hip Pain?",
        ImgSrc: AffectedHipPainDesktop,
        ImgSrcMob: AffectedHipPainMob,
        ImgTxt:
          "Hip pain is discomfort in the hip area, often due to joint issues, muscle strain, arthritis, or injuries, affecting movement and comfort.",
        cardData: WhatIsHipPainCarouselCardData, //WhatIsNeckPainCarouselCardData,
        hideImageOverlayText: true,
        imageAltText: "Hip Pain"
      };
    return (
        <div>
            <NavbarMumbia/>
            <HeroSectionMumbai/>
            <FeatureListCardSection title1="Why opt for Nivaan's Hip Pain treatment?" title2="When does one get Hip Pain treatment?" data1={NeckPainFeatureListCardData1} data2={HipPainFeatureListCardData2} />
                <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob}/>
                <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
            {/* </div> */}
            <WhyChooseNivaan2 location="mumbai"/>
            <TreatmentAtNivaan
                TreatmentCardData={hipPainTreatmentAtNivan}
                TreatmentHeading={hipPainTreatmentAtNivaanHeading}
            />
            <FormAd_new location="mumbai"/>
            <WhatIsSection {...whatIsSectionProps} />

            <WhatPatientSayAboutUs2 patientReviewData={KneePainReviewData} />
            <Faq askedCardData={hipPainFaqData} bgWhite={true}/>
          
            {/* {showFloatingButton && <FloatingButton />} */}
            <FloatingButton />
            <Footer2 phoneNumber="+91-73 5871 2483" />
        </div>
    );
};

export default HipPainMumbai;

const ACHIEVEMENT_POINTS = [
    {id: "1", point: "Non-Surgical Pain Treatment"},
    {id: "2", point: "30 - 60 Minute Procedures"},
    {id: "3", point: "Insurance Support"},
]
