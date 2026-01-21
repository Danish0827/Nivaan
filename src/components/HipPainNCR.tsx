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
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob,OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { KneePainReviewData } from "@/app/api/v1KneePainElderlyWomenNewData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const HipPainNCR = () => {
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
            <Navbar />
            <HeroSection />
            <FeatureListCardSection title1="Why opt for Nivaan's Hip Pain treatment?" title2="When does one get Hip Pain treatment?" data1={NeckPainFeatureListCardData1} data2={HipPainFeatureListCardData2} />

            {/* <div className="bg-[#EAF1FB] " ref={expertsRef}> */}
                <OurCareExpertsNcrs DoctorData={OurCareExpertsNcr} Heading="Our Care Experts"/>
            {/* </div> */}
            <WhyChooseNivaan />
            <TreatmentAtNivaan
                TreatmentCardData={hipPainTreatmentAtNivan}
                TreatmentHeading={hipPainTreatmentAtNivaanHeading}
            />
            <FormAd />
            <WhatIsSection {...whatIsSectionProps} />

            <WhatPatientSayAboutUs patientReviewData={KneePainReviewData} />
            <Faq askedCardData={hipPainFaqData} bgWhite={true}/>
          
            {/* {showFloatingButton && <FloatingButton />} */}
            <FloatingButton />
            <Footer2 phoneNumber="+91-73 5871 2483" />
        </div>
    );
};

export default HipPainNCR;

const ACHIEVEMENT_POINTS = [
    {id: "1", point: "Non-Surgical Pain Treatment"},
    {id: "2", point: "30 - 60 Minute Procedures"},
    {id: "3", point: "Insurance Support"},
]
