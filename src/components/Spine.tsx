"use client"
import Faq from "@/sections/Faq/FaqArr";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KneePainTreatment/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import PrecisionCareExpertSpine from "@/sections/OurCareExperts/PrecisionCareExpertSpine";
import BenefitsCarousel from "@/sections/OurCareExperts/BenefitsCarousel";
import WhatPatientSayAboutUsSpine from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUsSpine";
import React from "react";
import { usePathname } from "next/navigation";
import FloatingButton from "@/components/FloatingButton";
import SpineList from "@/sections/FeatureListCardSection/SpineList";
import AdvantagesOfSpine from "@/sections/WhyChooseNivaan/AdvantagesOfSpine";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaanResurface";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/spineImg.png";
import fullEndosDesk from "../../public/desktop/fullEndosDesk.png";
import fullEndosMob from "../../public/mobile/fullEndosMob.png";
import ImgSrcKneePainMob from "../../public/mobile/spineMob.png";
import Footer2 from "@/sections/Footer/Footer2";
import { WhatIsKneePainCarouselCardData, kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading, nextKneePaintreatment } from "@/app/api/kneePainRefurce";
import { SpineFeature1, SpineFeature2 } from "@/app/api/v1KneePainNewDataResurface";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { spineData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { kneePainPatientReviewData } from "@/app/api/v1KneePainNewData";
import HeroSectionSpine from "@/sections/KneePainTreatment/HeroSectionSpine";

import {
  backPainElderlyWomenHeading,
  backPainTreatmentAtNivaan2,
  backPainTreatmentVideo,
  backPainElderlyWomen,
} from '@/app/api/v1BackPainElderlyWomenData';
const Spine = () => {
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
        <HeroSectionSpine />
        <SpineList data1={SpineFeature1} data2={SpineFeature2} />
        {/* {showFloatingButton && <FloatingButton />} */}
        {/* <div ref={expertsRef}> */}
        <PrecisionCareExpertSpine/>
        {/* </div> */}
        <AdvantagesOfSpine />
        {/* <TreatmentAtNivaan TreatmentCardData={kneePainTreatmentAtNivan} TreatmentHeading={kneePainTreatmentAtNivanHeading} /> */}
        <WhyChooseNivaan/>
        <FormAd show={false}/>
        <WhatIsSection 
            heading="What is Endoscopic Spine Procedure?"
            ImgSrc={ImgSrcKneePain} 
            ImgSrcMob={ImgSrcKneePainMob} 
            ImgTxt="Endoscopic Spine Procedure is a minimally invasive procedure performed through a pencil-sized tube under real-time visualization. It allows precise removal of herniated discs, bone spurs, or ligament overgrowths causing nerve compression — restoring mobility and reducing chronic back or leg pain. Unlike traditional spine procedure, it preserves muscles and bone stability, leading to faster recovery and minimal blood loss." 
            cardData={[]}
            hideImageOverlayText= {true}
            
        />
        <WhatIsSection 
            heading="Minimally Invasive Spine Procedure"
            ImgSrc={fullEndosDesk} 
            ImgSrcMob={fullEndosMob} 
            ImgTxt="Endoscopic Spine Procedure is a minimally invasive procedure performed through a pencil-sized tube under real-time visualization. It allows precise removal of herniated discs, bone spurs, or ligament overgrowths causing nerve compression — restoring mobility and reducing chronic back or leg pain. Unlike traditional spine procedure, it preserves muscles and bone stability, leading to faster recovery and minimal blood loss." 
            cardData={[]}
            hideImageOverlayText= {true}
            
        />
        {/* <BenefitsCarousel/> */}

        <WhatPatientSayAboutUsSpine />
        {/* <WhatPatientSayAboutUs patientReviewData={backPainTreatmentVideo} useWhiteBackground={true} /> */}
        <Faq askedCardData={spineData} bgWhite={true} />
        <div className="max-w-5xl mx-auto px-6 py-8 border-t border-gray-200">
          <p className="text-sm mb-3">
            <sup>a</sup> Lee DY, Shim CS, Ahn Y, Choi YG, Kim HJ, Lee SH. Comparison of percutaneous endoscopic lumbar discectomy and open lumbar microdiscectomy for recurrent disc herniation. 
            <i> J Korean Neurosurg Soc.</i> 2009 Dec;46(6):515–21. doi: 10.3340/jkns.2009.46.6.515. Epub 2009 Dec 31. PMID: 20062565; PMCID: PMC2803265.
          </p>

          <p className="text-sm mb-3">
            <sup>b</sup> Nurmukhametov R, Medetbek A, Ramirez ME, Afsar A, Sharif S, Montemurro N. Factors affecting return to work following endoscopic lumbar foraminal stenosis surgery: A single-center series. 
            <i> Surg Neurol Int.</i> 2023 Nov 24;14:408. doi: 10.25259/SNI_659_2023. PMID: 38053695; PMCID: PMC10695345.
          </p>

          <p className="text-sm">
            <sup>c</sup> Kang SH, Yang JS, Cho SS, Cho YJ, Jeon JP, Choi HJ. A Prospective Observational Study of Return to Work after Single Level Lumbar Discectomy. 
            <i> J Korean Neurosurg Soc.</i> 2020 Nov;63(6):806–813. doi: 10.3340/jkns.2020.0227. Epub 2020 Nov 1. PMID: 33181867; PMCID: PMC7671783.
          </p>
      </div>

        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}

export default Spine;