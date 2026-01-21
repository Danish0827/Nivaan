import React from "react";
import { regenerativeOrthopedics } from "@/app/api/data";
import { avnTreatmentOutcomes, avnPatientReview, avnDoctorData, avnFaqData, avnTreatmentAtNivaan } from "@/app/api/avnTreatmentData";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import Navbar from "@/sections/Nav/Navbar";
import FloatingButton from "@/components/FloatingButton";
import ThreeColumnHeroBanner from "./ui/ThreeColumnHeroSection";
import IconCardGrid from "./ui/IconCardGrid";
import AvnTreatmentHeroImg from "../../public/avn_lp_hero.webp";
import AvnTreatmentHeroImgMob from "../../public/avn_lp_heroMob.webp";
import FormAd from "@/sections/FormAd/FormAd";
import OurProcedures from "@/sections/OurProcedures/OurProcedures";
import SingleExpert from "@/sections/OurCareExperts/SingleExpert";
import { chronicPainTreatmentAtNivan } from "@/app/api/chronicPainData";
import { FooterLinksMobile4 } from "@/app/api/footerDataMob";
import { FooterLinks4 } from "@/app/api/footerData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";
import { OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
const AvnTreatment = () => {
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
    <div>
      <Navbar isForm2={false} formLocation={"Navbar-AvnTreatment"} />
      <ThreeColumnHeroBanner
        achievementPoints={ACHIEVEMENT_POINTS}
        heading="Get Nivaan's Advanced"
        heading2="AVN Treatment"
        subHeading1="And live a pain-free life"
        subHeading="100% Insurance Coverage*"
        formLocation="Hero-Section-Next-AvnTreatment"
        imageSrc={AvnTreatmentHeroImg.src}
        mobileImageSrc={AvnTreatmentHeroImgMob.src}
        pageRoute="avn-treatment"
        h2Tag="Advanced Avascular Necrosis Treatment Options in Delhi NCR"
      />
      {/* <div ref={expertsRef}>
        <SingleExpert doctorData={avnDoctorData} formLocation="avn-treatment-page" />
      </div> */}
      <OurCareExpertsNcrs Heading="Our Care Experts" DoctorData={OurCareExpertsNcr} formLocation="avn-treatment-page" />
      <OurProcedures
        procedureCardData={chronicPainTreatmentAtNivan}
        procedureHeading={avnTreatmentAtNivaan}
      />
      <div className="bg-[#EAF1FB] p-[1px]">
        <IconCardGrid
          title="Regenerative Orthopedics"
          gridData={regenerativeOrthopedics}
        />
        <IconCardGrid
          title="Treatment Outcomes"
          gridData={avnTreatmentOutcomes}
        />
      </div>

      <WhatPatientSayAboutUs
        patientReviewData={avnPatientReview}
        useWhiteBackground={true}
        pageRoute="avn-treatment"
      />
      <Faq askedCardData={avnFaqData} />
      {/* {showFloatingButton && <FloatingButton />} */}
      <FormAd isForm2={false} formLocation={"avn-treatment-page"} pageRoute="avn-treatment" />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile4} FooterLinks={FooterLinks4} />
    </div>
  );
};

export default AvnTreatment;

const ACHIEVEMENT_POINTS = [
  { id: "1", point: "Cashless Treatment" },
  { id: "2", point: "Advanced Technique" },
  { id: "3", point: "10k+ Happy Patients" },
];
