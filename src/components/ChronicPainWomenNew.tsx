import React from "react";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import HeroSection from "@/sections/ChronicPain/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts2 from "@/sections/OurCareExperts2/OurCareExperts2";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import ExperienceSection from "@/sections/ExperienceSection/ExperienceSection";
import OurProcedures from "@/sections/OurProcedures/OurProcedures";
import dynamic from "next/dynamic";
import { doctorVideoData } from "@/app/api/v1DrVideoMenData";
import { doctorVideoDataMob } from "@/app/api/v1DrVideoWomenData";
import { chronicPainFaqData, chronicPainTreatmentAtNivan, chronicPainTreatmentAtNivanHeading, chronicPainWomenReviewData } from "@/app/api/chronicPainData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";

const ChronicPainWomenNew = ({pathName}: {pathName: string}) => {
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const experienceRef = useRef<HTMLDivElement>(null);
  const FloatingButton = dynamic(() => import("@/components/FloatingButton"));
  // const handleScroll = () => {
  //   if (experienceRef.current) {
  //     const { top } = experienceRef.current.getBoundingClientRect();
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
    <div>
      <Navbar />
      {/* <HeroSection /> */}
      <HeroSection pathName={pathName} />
      {/* <div ref={experienceRef}> */}
        <ExperienceSection />
      {/* </div> */}
      {/* {showFloatingButton && <FloatingButton />} */}

      <OurProcedures
        procedureCardData={chronicPainTreatmentAtNivan}
        procedureHeading={chronicPainTreatmentAtNivanHeading}
      />
      <OurCareExperts2
        doctorData={doctorVideoData}
        doctorDataMob={doctorVideoDataMob}
      />
      <WhatPatientSayAboutUs patientReviewData={chronicPainWomenReviewData} />
      <Faq askedCardData={chronicPainFaqData} />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
    </div>
  );
};

export default ChronicPainWomenNew;
