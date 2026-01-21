import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import {
    Vertebroplasty2,
    Vertebroplasty1,
    vertebroplastyConditionsTreated,
    vertebroplastyPatientReview,
    vertebroplastyFaqData,
} from "../app/api/vertebroplasty"
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
import { doctorDataVert } from "@/app/api/v1DrVideoMenData";
import { doctorDataMobVert } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";

const VertebroplastyNCR = () => {
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
            <Navbar isForm2={false} formLocation={"Navbar-VertebroplastyNCR"} />
            <ThreeColumnHeroBanner 
                achievementPoints={ACHIEVEMENT_POINTS} 
                heading="Chronic Pain Treatment with Vertebroplasty in Delhi NCR" 
                subHeading="100% Insurance Coverage*" 
                formLocation="Hero-Section-Next-VertebroplastyNCR" 
                imageSrc={VertebroplastyNCRImage.src} 
                mobileImageSrc={VertebroplastyNCRImage.src} 
                heroImgClassName = "col-start-2 row-start-1 lg:col-start-2 lg:row-start-auto self-end justify-self-center lg:justify-self-start absolute lg:top-0 lg:right-2/3 top-24 right-px lg:mt-7"
            />
            <FeatureListCardSection title1="When To Opt For A Vertebroplasty?" title2="Why Opt For Nivaan’s Vertebroplasty?" data1={Vertebroplasty1} data2={Vertebroplasty2} />
            <WhyChooseNivaan />

            <div className="bg-[#EAF1FB] p-[1px]">
                <IconCardGrid title="Conditions Treated By Vertebroplasty" columns={3} gridData={vertebroplastyConditionsTreated}/>
            </div>
            <FormAd show={true}/>
            {/* <div ref={expertsRef}> */}
                <OurCareExperts doctorData={doctorDataVert} doctorDataMob={doctorDataMobVert } isForm2={false} formLocation="Vertebroplasty-Our-Care-Experts" />
            {/* </div> */}
            <WhatPatientSayAboutUs patientReviewData={vertebroplastyPatientReview} />
            <Faq askedCardData={vertebroplastyFaqData} />
            <FloatingButton />
            {/* {showFloatingButton && <FloatingButton />} */}
            <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
        </div>
    );
};

export default VertebroplastyNCR;

const ACHIEVEMENT_POINTS = [
    { id: "1", point: "30 - 45 Minutes Procedure"},
    { id: "2", point: "96% Success Rate" },
    { id: "3", point: "Insurance Support" },
]
