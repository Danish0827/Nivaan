import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/Heriniated/HeroSection/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
//import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { backPainFaqData, backPainHeading, backPainTreatmentAtNivaan } from "@/app/api/backPainTreatment";
import { backPainNew, backPainReview } from "@/app/api/v1backPainMenNewData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import BackPainMenNewImgMob from "../../public/mobile/BackpainmennewMob.webp";
import BackPainMenNewImg from "../../public/desktop/backPainHero.webp"
import ShilpaBackPain from "../../public/desktop/shilpaBackPain.webp"
import ShilpaBackPainMob from "../../public/mobile/backPainHomemaker.webp"

const BackPainMenNew = ({pathName, imgStyle}: {pathName: string, imgStyle?: string}) => {
  //const pathName = usePathname();
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  const isBackPainNew = pathName === "/v1/back-pain-new";
  const FloatingButton = dynamic(() => import("@/components/FloatingButton"));

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
      <Navbar isForm2={false} formLocation={"Navbar-BackPain"}/>
      <HeroSection 
        pathName={pathName}
        heading="Non Surgical Back Pain Treatment"
        imgSrc={isBackPainNew ? ShilpaBackPain.src : BackPainMenNewImg.src}
        imgSrcMob={isBackPainNew ? ShilpaBackPainMob.src : BackPainMenNewImgMob.src}
        imgStyle={imgStyle}
      />
      {/* <div ref={expertsRef}> */}
        <OurCareExperts isForm2={false} formLocation={"BackPain-our-care-experts"} doctorData={doctorData} doctorDataMob={doctorDataMob} />
      {/* </div> */}
      {/* {showFloatingButton && <FloatingButton />} */}
      <TreatmentAtNivaan
        TreatmentCardData={backPainTreatmentAtNivaan}
        TreatmentHeading={backPainHeading}
      />
      {isBackPainNew ? (
        <WhatPatientSayAboutUs patientReviewData={backPainNew} />
      ) : (
        <WhatPatientSayAboutUs patientReviewData={backPainReview} useWhiteBackground={true} />
      )}
      <Faq askedCardData={backPainFaqData} />
      <FormAd isForm2={false} formLocation={"BackPain-page"}/>
      <FloatingButton />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
    </>
  );
};

export default BackPainMenNew;
