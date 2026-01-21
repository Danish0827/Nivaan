import Footer from "@/sections/Footer/Footer";
import Faq from "@/sections/Faq/Faq";
import FeatureListSection from "@/sections/FeatureListSection/FeatureListSection";
import ConditionsTreated from "./ConditionsTreated";
import FloatingButton from "@/components/FloatingButton";
import { arthroplastyConditionsTreated, arthroplastyFaqData, arthroplastyFeatureListCardWithTitle1, arthroplastyFeatureListCardWithTitle2, arthroplastyPatientReview } from "@/app/api/arthroplastyData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import NavbarMumbia from "@/sections/Nav/NavbarMumbia";
import HeroSectionMumbai from "@/sections/Anthroplasty/HeroSectionMumbai";
import WhyChooseNivaan2 from "@/sections/WhyChooseNivaan/WhyChooseNivaan2";
import FormAd_new from "@/sections/FormAd/FormAd_new";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import { DoctorDataConsulting } from "@/app/api/v1DrVideoMenData";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorMumbai } from "@/app/api/ConsultingDoctorData";
import WhatPatientSayAboutUs2 from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs2";

const ArthroplastyMumbai = () => {
    return (
        <>
            <NavbarMumbia/>
            <HeroSectionMumbai/>
                <FeatureListSection featureContents={[
                    arthroplastyFeatureListCardWithTitle1,
                    arthroplastyFeatureListCardWithTitle2
                ]}/>
            <WhyChooseNivaan2 location="mumbai"/>
            <ConditionsTreated heading="Conditions Treated By Arthroplasty" conditions={arthroplastyConditionsTreated}/>
            <FormAd_new location="mumbai"/>
            <Clinicleadership doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting}/>
            <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location="mumbai"/>
            <WhatPatientSayAboutUs2 patientReviewData={arthroplastyPatientReview} />
            <Faq askedCardData={arthroplastyFaqData} />
            <FloatingButton />
            <Footer phoneNumber="+91-73 5871 2483" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
            {/* {showFloatingButton && <FloatingButton />} */}
        </>
    )
}

export default ArthroplastyMumbai