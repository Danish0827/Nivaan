import React from "react";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import {
    NeckPainFeatureListCardData2,
    NeckPainFeatureListCardData1,
    WhatIsNeckPainCarouselCardData,
    neckPainTreatmentAtNivaanHeading,
    neckPainTreatmentAtNivaan,
    neckPainFaqData,
    neckPainReview,
} from "@/app/api/neckPainData";
import TreatmentAtNivaan from "@/sections//TreatmentAtNivaan/TreatmentAtNivaan";
import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import ThreeColumnHeroBanner from "./ui/ThreeColumnHeroSection";
import NeckPainImage from '../../public/desktop/NeckPain.webp';
import FeatureListCardSection from "./FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import AffectedNectPainDesktop from "../../public/neck-pain.webp"
import AffectedNectPainMob from "../../public/neckMob.webp"
import { DoctorDataConsulting, doctorDataVert } from "@/app/api/v1DrVideoMenData";
import { doctorDataMobVert } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import HeroSectionNeckPain from "./ui/HeroSectionNeckPian";
import Clinicleadership from "@/sections/ClinicLeadership/ClinicLeadership";
import Consultingdoctor from "@/sections/ConsultingDoctor/ConsultingDoctor";
import { ConsultdoctorJaipur } from "@/app/api/ConsultingDoctorData";
import Footer2 from "@/sections/Footer/Footer2";


const NeckpainJaipur = () => {
    // const [showFloatingButton, setShowFloatingButton] = useState(false);
    // const expertsRef = useRef<HTMLDivElement>(null);

    // const handleScroll = () => {
    //     if (expertsRef.current) {
    //         const { top } = expertsRef.current.getBoundingClientRect();
    //         if (top <= window.innerHeight) {
    //             setShowFloatingButton(true);
    //         } else {
    //             setShowFloatingButton(false);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    const whatIsSectionProps = {
        heading: "What is Neck Pain?",
        ImgSrc: AffectedNectPainDesktop,
        ImgSrcMob: AffectedNectPainMob,
        ImgTxt:
          "",
        cardData: WhatIsNeckPainCarouselCardData,
        hideImageOverlayText: true,
        imageAltText: "Neck Pain is the discomfort, stiffness, or uneasiness in the neck and shoulder."
      };
    return (
        <div>
            <Navbar isForm2={false} formLocation={"Navbar-NeckPainNCR"} />

    
            <HeroSectionNeckPain 
                formLocation="Hero-Section-Neck-Pain" 
                achievementPoints={ACHIEVEMENT_POINTS} 
                heading="Best Neck Pain"
                sub_heading="Treatment in Delhi"
                sub_heading2="NCR & Jaipur"
                h2Tag="Top Neck Pain Specialists in Delhi NCR & Jaipur" 
                subHeading="100% Insurance Coverage*"  
                imageSrc={NeckPainImage.src} 
                mobileImageSrc={NeckPainImage.src} 
                heroImgClassName="col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-2 lg:right-2/3 top-16 right-px lg:mt-7"
            />
            <FeatureListCardSection title1="Why opt for Nivaan’s Neck Pain treatment?" title2="When does one get Neck Pain treatment?" data1={NeckPainFeatureListCardData1} data2={NeckPainFeatureListCardData2} />

            {/* <div className="bg-[#EAF1FB] " ref={expertsRef}> */}
                {/* <OurCareExperts doctorData={doctorDataVert} doctorDataMob={doctorDataMobVert } isForm2={false} formLocation="Neck-Pain-Our-Care-Experts" /> */}
                <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsulting} isForm2={false} formLocation="Neck-Pain-Our-Care-Experts"/>
                <Consultingdoctor doctorData={ConsultdoctorJaipur} doctorDataMob={ConsultdoctorJaipur} isForm2={false} formLocation="Neck-Pain-Our-Care-Experts"/>
            {/* </div> */}
            <WhyChooseNivaan />
            <TreatmentAtNivaan
                TreatmentCardData={neckPainTreatmentAtNivaan}
                TreatmentHeading={neckPainTreatmentAtNivaanHeading}
            />
            <FormAd />
            <WhatIsSection {...whatIsSectionProps} />

            <WhatPatientSayAboutUs patientReviewData={neckPainReview} />
            <Faq askedCardData={neckPainFaqData} />
          
            {/* {showFloatingButton && <FloatingButton />} */}
            <FloatingButton />
            <Footer2 phoneNumber="+91-73 5871 2483" />
        </div>
    );
};

export default NeckpainJaipur;

const ACHIEVEMENT_POINTS = [
    {id: "1", point: "Non-Surgical Pain Treatment"},
    {id: "2", point: "30-60 Minute Procedures"},
    {id: "3", point: "Insurance Support"},
]
