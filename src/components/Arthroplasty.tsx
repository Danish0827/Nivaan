import Navbar from "@/sections/Nav/Navbar";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import Footer from "@/sections/Footer/Footer";
import Faq from "@/sections/Faq/Faq";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import FeatureListSection from "@/sections/FeatureListSection/FeatureListSection";
import ConditionsTreated from "./ConditionsTreated";
import HeroSection from "@/sections/Anthroplasty/HeroSection";
import FloatingButton from "@/components/FloatingButton";
import FormAd from "@/sections/FormAd/FormAd";
import { arthroplastyConditionsTreated, arthroplastyFaqData, arthroplastyFeatureListCardWithTitle1, arthroplastyFeatureListCardWithTitle2, arthroplastyPatientReview } from "@/app/api/arthroplastyData";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob,OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const Arthroplasty = () => {
    // const [showFloatingButton, setShowFloatingButton] = useState(false);
    // const featureListRef = useRef<HTMLDivElement>(null);

    // const handleScroll = () => {
    //     if (featureListRef.current) {OurCarexpxpertsNcrs
    //         const { top } = featureListRef.current.getBoundingClientRect();
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
        <>
            <Navbar/>
            <HeroSection/>
            {/* <div ref={featureListRef}> */}
                <FeatureListSection featureContents={[
                    arthroplastyFeatureListCardWithTitle1,
                    arthroplastyFeatureListCardWithTitle2
                ]}/>
            {/* </div> */}
            <WhyChooseNivaan/>
            <ConditionsTreated heading="Conditions Treated By Arthroplasty" conditions={arthroplastyConditionsTreated}/>
            <FormAd show={true} />
            <OurCareExpertsNcrs DoctorData={OurCareExpertsNcr} Heading="Our Care Experts" />
            <WhatPatientSayAboutUs patientReviewData={arthroplastyPatientReview} />
            <Faq askedCardData={arthroplastyFaqData} />
            <FloatingButton />
            <Footer phoneNumber="+91-73 5871 2483" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
            {/* {showFloatingButton && <FloatingButton />} */}
        </>
    )
}

export default Arthroplasty