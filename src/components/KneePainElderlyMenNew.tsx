import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KneePainElderlyMen/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import FloatingButton from "@/components/FloatingButton";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob } from "@/app/api/v1DrVideoWomenData";
import { kneePainTreatmentAtNivan, kneePainTreatmentAtNivanElderlyHeading } from "@/app/api/kneePainTreatment";
import { kneePainMan } from "@/app/api/v1KneePainElderlyMenNewData";
import { kneePainFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";

const KneePainElderlyMenNew = () => {
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
      <HeroSection pathName="/v1/knee-pain-elderly-men-new" />
      {/* <HeroSection 
        pathName="/v1/knee-pain-elderly-men-new"
        heading="Non Surgical Knee Pain Treatment"
        imgSrc={KneePainElderlyMenNewImg.src}
        imgSrcMob={KneePainElderlyMenNewImgMob.src}
      /> */}
      {/* {showFloatingButton && <FloatingButton />} */}
      {/* <div ref={expertsRef}> */}
        <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} />
      {/* </div> */}
      <TreatmentAtNivaan
        TreatmentCardData={kneePainTreatmentAtNivan}
        TreatmentHeading={kneePainTreatmentAtNivanElderlyHeading}
      />

      <WhatPatientSayAboutUs patientReviewData={kneePainMan} />

      <Faq askedCardData={kneePainFaqData} />
      <FormAd />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
    </>
  );
};

export default KneePainElderlyMenNew;
