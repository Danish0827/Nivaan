import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import HeroSection from "@/sections/Migraine/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhyChooseNivaan from "@/sections/WhyChooseNivaan/WhyChooseNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import FeatureListSection from "@/sections/FeatureListSection/FeatureListSection";
import React from "react";
import {
  migraineFaqData,
  migraineHeading,
  migraineReview,
  migraineTreatmentAtNivan,
  migraineWhatisProps,
  migraineFeatureListCardWithTitle1,
  migraineFeatureListCardWithTitle2,
} from "@/app/api/migraineData";
import FloatingButton from "@/components/FloatingButton";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob,OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const Migraine = () => {
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const featuresRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   if (featuresRef.current) {
  //     const { top } = featuresRef.current.getBoundingClientRect();
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
      <HeroSection />
      {/* <div ref={featuresRef}> */}
        <FeatureListSection featureContents={[
          migraineFeatureListCardWithTitle1,
          migraineFeatureListCardWithTitle2
        ]}/>
      {/* </div> */}
      <OurCareExpertsNcrs Heading="Our Care Experts" bgColor={true} DoctorData={OurCareExpertsNcr}  />
      <WhyChooseNivaan/>
      <TreatmentAtNivaan
        TreatmentCardData={migraineTreatmentAtNivan}
        TreatmentHeading={migraineHeading}
      />
      <FormAd />
      <WhatIsSection {...migraineWhatisProps}/>
      <WhatPatientSayAboutUs patientReviewData={migraineReview} />
      <Faq askedCardData={migraineFaqData} />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5871 2483" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
      {/* {showFloatingButton && <FloatingButton />} */}
    </>
  );
};

export default Migraine;
