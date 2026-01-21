import FloatingButton from "@/components/FloatingButton";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import HeroSection from "@/sections/Osteoarthritis/HeroSection";
import OurCareExperts from "@/sections/OurCareExperts/OurCareExperts";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import { doctorData } from '@/app/api/v1DrVideoMenData';
import { doctorDataMob } from '@/app/api/v1DrVideoWomenData';
import { osteoarthritisFaqData, osteoarthritisPatientReviewData, osteooarthritisTreatmentAtNivan, osteooarthritisTreatmentAtNivanHeading } from '@/app/api/osteoarthritisTreatmentData';
import { FooterLinksMobile } from '@/app/api/footerDataMob';
import { FooterLinks } from '@/app/api/footerData';

const Osteoarthritis = () => {
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
      <HeroSection />
      {/* {showFloatingButton && <FloatingButton />} */}
      {/* <div ref={expertsRef}> */}
        <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} />
      {/* </div> */}
      <TreatmentAtNivaan TreatmentCardData={osteooarthritisTreatmentAtNivan} TreatmentHeading={osteooarthritisTreatmentAtNivanHeading} />
      <WhatPatientSayAboutUs
        patientReviewData={osteoarthritisPatientReviewData}
      />
      <Faq askedCardData={osteoarthritisFaqData} />
      <FormAd />
      <FloatingButton />
      <Footer phoneNumber='+91-73 5808 1732' FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
    </>
  )
}

export default Osteoarthritis
