import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "@/sections/FeatureListCardSection/FeatureListCardSection";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/kneepain/WhatIsImg.webp";
import ImgSrcKneePainMob from "../../public/mobile/kneepain/WhatIsImgMob.webp";
import Footer2 from "@/sections/Footer/Footer2";
import { WhatIsKneePainCarouselCardData, kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading, nextKneePaintreatment } from "@/app/api/kneePainTreatment";
import { KneePainFeatureListCardData1, KneePainFeatureListCardData2 } from "@/app/api/v1KneePainNewData";
import { DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { DoctorDataConsultingMob } from "@/app/api/v1DrVideoWomenData";
import { kneePainFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import {ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import { backPainTreatmentVideo } from "@/app/api/v1BackPainElderlyWomenData";
import FormAd__2 from "@/sections/FormAd/FormAd_2";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionMumbia from "@/sections/MumbaiKneePain/MumbaiKneePainTreatment";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
const KneePainTreatmentMumbia = () => {
  return (
    <>
        <NavbarMumbia />
        <HeroSectionMumbia/>
        <FeatureListCardSection data1={KneePainFeatureListCardData1} data2={KneePainFeatureListCardData2} />
            <Clinicleadership  isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob}/>
            <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
        <WhyChooseNivaan2 location="mumbai"/>
        <TreatmentAtNivaan TreatmentCardData={kneePainTreatmentAtNivan} TreatmentHeading={kneePainTreatmentAtNivanHeading} />
        <FormAd__2 location="mumbai"/>
        <WhatIsSection 
            heading="What is Knee Pain?"
            ImgSrc={ImgSrcKneePain} 
            ImgSrcMob={ImgSrcKneePainMob} 
            ImgTxt="Pain in or around the knee that may indicate a condition affecting the knee joint itself or the soft tissue around the knee." 
            cardData={WhatIsKneePainCarouselCardData}
            hideImageOverlayText= {true}
        />
        <WhatPatientSayAboutUs patientReviewData={backPainTreatmentVideo} useWhiteBackground={true} />
        <Faq askedCardData={kneePainFaqData} bgWhite={true} />
        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}
export default KneePainTreatmentMumbia;