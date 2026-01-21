import React from "react";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import {
    endoscopicDiscetomy1,
    endoscopicDiscetomy2,
    endoscopicDiscetomyConditionsTreated,
    endoscopicDiscetomyReview,
    endoscopicDiscetomyFaqData,
} from "@/app/api/endoscopicDiscectomy";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import ThreeColumnHeroBanner from "./ui/ThreeColumnHeroSection";
import VertebroplastyNCRImage from '../../public/desktop/vertebroplastyNCR.webp'
import FeatureListCardSection from "./FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import IconCardGrid from "./ui/IconCardGrid";
import { ComparisonTableData } from "@/app/api/data";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";

const EndoscopicDiscectomy = () => {
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
    return (
        <div>
            <Navbar isForm2={false} formLocation={"Navbar-EndoscopicDiscectomy"} />
            <ThreeColumnHeroBanner 
                achievementPoints={ACHIEVEMENT_POINTS} 
                heading="Chronic Pain Treatment with Endoscopic Discectomy in Delhi NCR" 
                subHeading="100% Insurance Coverage*" 
                formLocation="Hero-Section-Next-EndoscopicDiscectomy" 
                imageSrc={VertebroplastyNCRImage.src} 
                mobileImageSrc={VertebroplastyNCRImage.src} 
                heroImgClassName = "col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-0 lg:right-2/3 top-24 right-px lg:mt-7"
            />
            {/* <div ref={expertsRef}> */}
                <FeatureListCardSection title1="When To Opt For A Endoscopic Discectomy?" title2="Why Opt For Nivaan’s Endoscopic Discectomy?" data1={endoscopicDiscetomy1} data2={endoscopicDiscetomy2} />
            {/* </div> */}
            <WhyChooseNivaan data={ComparisonTableData} isForm2={false} formLocation={"EndoscopicDiscectomy-Why-Choose-Nivaan"} />

            <div className="bg-[#EAF1FB] p-[1px]">
                <IconCardGrid title="Conditions Treated By Endoscopic Discectomy" columns={3} gridData={endoscopicDiscetomyConditionsTreated} />
            </div>
            <FormAd  isForm2={false} formLocation={"EndoscopicDiscectomy-page"} />
            <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob } isForm2={false} formLocation={"Endoscopic-Discectomy-our-care-experts"} />
            <WhatPatientSayAboutUs patientReviewData={endoscopicDiscetomyReview} />
            <Faq askedCardData={endoscopicDiscetomyFaqData} />
            {/* {showFloatingButton && <FloatingButton />} */}
            <FloatingButton />
            <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
        </div>
    );
};

export default EndoscopicDiscectomy;

const ACHIEVEMENT_POINTS = [
    { id: "1", point: "2 - 3 Hour Procedure" },
    { id: "2", point: "96% Success Rate" },
    { id: "3", point: "Insurance Support" },
]