import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/JaipurKneePainTreatment/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "@/sections/FeatureListCardSection/FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/kneepain/WhatIsImg.webp";
import ImgSrcKneePainMob from "../../public/mobile/kneepain/WhatIsImgMob.webp";
import Footer2 from "@/sections/Footer/Footer2";
import { WhatIsKneePainCarouselCardData, kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading, nextKneePaintreatment } from "@/app/api/kneePainTreatment";
import { KneePainFeatureListCardData1, KneePainFeatureListCardData2 } from "@/app/api/v1KneePainNewData";
import { doctorData, DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import { DoctorDataConsultingMob, doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { kneePainFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { kneePainPatientReviewData } from "@/app/api/v1KneePainNewData";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import { ConsultdoctorJaipur } from "@/app/api/ConsultingDoctorData";
import { backPainTreatmentVideo } from "@/app/api/v1BackPainElderlyWomenData";

const KneePainTreatmentJaipur = () => {
  return (
    <>
        <Navbar />
        <HeroSection/>
        <FeatureListCardSection data1={KneePainFeatureListCardData1} data2={KneePainFeatureListCardData2} />
            {/* <OurCareExperts isBg={true} doctorData={doctorData} doctorDataMob={doctorDataMob} /> */}
            <Clinicleadership  isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob}/>
            <Consultingdoctor doctorData={ConsultdoctorJaipur} doctorDataMob={ConsultdoctorJaipur}/>
        <WhyChooseNivaan />
        <TreatmentAtNivaan TreatmentCardData={kneePainTreatmentAtNivan} TreatmentHeading={kneePainTreatmentAtNivanHeading} />
        <FormAd />
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
export default KneePainTreatmentJaipur;