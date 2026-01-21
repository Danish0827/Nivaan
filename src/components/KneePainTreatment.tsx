"use client"
import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KneePainTreatment/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import { usePathname } from "next/navigation";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "@/sections/FeatureListCardSection/FeatureListCardSection";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/kneepain/WhatIsImg.webp";
import ImgSrcKneePainMob from "../../public/mobile/kneepain/WhatIsImgMob.webp";
import Footer2 from "@/sections/Footer/Footer2";
import { WhatIsKneePainCarouselCardData, kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading, nextKneePaintreatment } from "@/app/api/kneePainTreatment";
import { KneePainFeatureListCardData1, KneePainFeatureListCardData2 } from "@/app/api/v1KneePainNewData";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { kneePainFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { kneePainPatientReviewData } from "@/app/api/v1KneePainNewData";
import HeroSectionNCR from "@/sections/KneePainTreatment/HeroSectionNCR";
import {
  backPainElderlyWomenHeading,
  backPainTreatmentAtNivaan2,
  backPainTreatmentVideo,
  backPainElderlyWomen,
} from '@/app/api/v1BackPainElderlyWomenData';
const KneePainTreatment = () => {
    const pathName = usePathname();
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  const isKneePainTreatment = pathName === '/next/knee-pain-treatment';
  // const handleScroll = () => {
  //   if (expertsRef.current) {
  //     const { top } = expertsRef.current.getBoundingClientRect();
  //     if (top <= window.innerHeight) {
  //       setShowFloatingButton(true);
  //     } else {
  //       setShowFloatingButton(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  return (
    <>
        <Navbar />
        <HeroSectionNCR />
        <FeatureListCardSection data1={KneePainFeatureListCardData1} data2={KneePainFeatureListCardData2} />
        {/* {showFloatingButton && <FloatingButton />} */}
        {/* <div ref={expertsRef}> */}
            <OurCareExpertsNcrs   Heading={'Our Care Experts'} DoctorData={OurCareExpertsNcr}  bgColor={true}/>
        {/* </div> */}
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
        {/* <WhatPatientSayAboutUs patientReviewData={nextKneePaintreatment} /> */}
        <WhatPatientSayAboutUs patientReviewData={backPainTreatmentVideo} useWhiteBackground={true} />
        <Faq askedCardData={kneePainFaqData} bgWhite={true} />
        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}

export default KneePainTreatment;