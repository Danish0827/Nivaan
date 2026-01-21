// import Faq from "@/sections/Faq/Faq";
// import Footer from "@/sections/Footer/Footer";
// import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/Heriniated/HeroSection/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
// import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
// import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
// import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import {
  herniatedFaqData,
  herniatedHeading,
  herniatedPatientReviewData,
  herniatedTreatmentAtNivan,
} from "../app/api/herniated";
import FloatingButton from "@/components/FloatingButton";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import HerniatedImg from "../../public/desktop/HerniatedHeroImg.webp";
import HerniatedImgMob from "../../public/mobile/HerniatedHeroImgMob.webp";
import dynamic from "next/dynamic";

const OurCareExperts = dynamic(() => import("@/sections/OurCareExperts/OurCareExperts"))
const TreatmentAtNivaan = dynamic(() => import("@/sections/TreatmentAtNivaan/TreatmentAtNivaan"))
const WhatPatientSayAboutUs = dynamic(() => import("@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs"))
const Faq = dynamic(() => import("@/sections/Faq/Faq"))
const FormAd = dynamic(() => import("@/sections/FormAd/FormAd"))
const Footer = dynamic(() => import("@/sections/Footer/Footer"))
// const FloatingButton = dynamic(() => import("@/sections/OurCareExperts/OurCareExperts"))


const Herniated = () => {
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);

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
      <HeroSection 
        pathName="/v1/herniated-new"
        heading="Non-Surgical Herniated Disc Treatment"
        imgSrc={HerniatedImg.src}
        // imgSrcMob={HerniatedImgMob.src}
      />
      {/* <div ref={expertsRef}> */}
        <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} />
      {/* </div> */}
      <TreatmentAtNivaan
        TreatmentCardData={herniatedTreatmentAtNivan}
        TreatmentHeading={herniatedHeading}
      />
      <WhatPatientSayAboutUs patientReviewData={herniatedPatientReviewData} />
      <Faq askedCardData={herniatedFaqData} />
      <FormAd />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
      {/* {showFloatingButton && <FloatingButton />} */}
      <FloatingButton />
    </>
  );
};

export default Herniated;
