"use client"
import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KneePainTreatment/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import PrecisionCareExpert from "@/sections/OurCareExperts/PrecisionCareExpert";
import BenefitsCarousel from "@/sections/OurCareExperts/BenefitsCarousel";
import WhatPatientSayAboutUsResurface from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUsResurface";
import React from "react";
import { usePathname } from "next/navigation";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "@/sections/FeatureListCardSection/FeatureListCardSectionResurfacing";
import AdvantagesOfKneeSurfacing from "@/sections/WhyChooseNivaan/AdvantagesOfKneeSurfacing";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaanResurface";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/kneepain/refurse-knee.png";
import ImgSrcKneePainMob from "../../public/kneedamagemob.png";
import Footer2 from "@/sections/Footer/Footer2";
import { WhatIsKneePainCarouselCardData, kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading, nextKneePaintreatment } from "@/app/api/kneePainRefurce";
import { KneePainFeatureListCardData1, KneePainFeatureListCardData2 } from "@/app/api/v1KneePainNewDataResurface";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { kneeResurfaceFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { kneePainPatientReviewData } from "@/app/api/v1KneePainNewData";
import HeroSectionNCRKR from "@/sections/KneePainTreatment/HeroSectionNCRKR";
import {
  backPainElderlyWomenHeading,
  backPainTreatmentAtNivaan2,
  backPainTreatmentVideo,
  backPainElderlyWomen,
} from '@/app/api/v1BackPainElderlyWomenData';
const KneePainResurface = () => {
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
        <HeroSectionNCRKR />
        <FeatureListCardSection data1={KneePainFeatureListCardData1} data2={KneePainFeatureListCardData2} />
        {/* {showFloatingButton && <FloatingButton />} */}
        {/* <div ref={expertsRef}> */}
        <PrecisionCareExpert/>
        {/* </div> */}
        <AdvantagesOfKneeSurfacing />
        {/* <TreatmentAtNivaan TreatmentCardData={kneePainTreatmentAtNivan} TreatmentHeading={kneePainTreatmentAtNivanHeading} /> */}
        <WhyChooseNivaan/>
        <FormAd show={false}/>
        <WhatIsSection 
            heading="What is Knee Resurfacing??"
            ImgSrc={ImgSrcKneePain} 
            ImgSrcMob={ImgSrcKneePainMob} 
            ImgTxt="Knee Resurfacing is a next-generation alternative to total knee replacement, ideal for patients with arthritis or damage limited to one part of the knee. Instead of replacing the entire joint, only the damaged surface is treated—preserving bone, ligaments, and natural motion." 
            cardData={WhatIsKneePainCarouselCardData}
            hideImageOverlayText= {true}
        />
        <BenefitsCarousel/>

        <WhatPatientSayAboutUsResurface />
        {/* <WhatPatientSayAboutUs patientReviewData={backPainTreatmentVideo} useWhiteBackground={true} /> */}
        <Faq askedCardData={kneeResurfaceFaqData} bgWhite={true} />
        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}

export default KneePainResurface;