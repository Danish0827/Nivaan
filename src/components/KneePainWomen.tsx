import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import FormAd from "@/sections/FormAd/FormAd";
import Navbar from "@/sections/Nav/Navbar";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import FloatingButton from "@/components/FloatingButton";
import HeroSectionKPW from "@/sections/KneePainWomen/HeroSectionWomenKP";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { doctorDataMob,OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading } from "@/app/api/kneePainTreatment";
import { KneePainElderlyWomenReviewData, kneePainFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { FooterLinksMobile } from "@/app/api/footerDataMob";
import { FooterLinks } from "@/app/api/footerData";
import OurCareExpertsNcrs from "@/sections/OurCareExperts/OurCareExpertsNcr";

const KneePain = ({pathName, imgStyle}: {pathName: string, imgStyle?: string}) => {
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
      <HeroSectionKPW pathName={pathName} imgStyle={imgStyle} />
      {/* {showFloatingButton && <FloatingButton />} */}
      {/* <div ref={expertsRef}> */}
        <OurCareExpertsNcrs Heading={'Our Care Experts'} DoctorData={OurCareExpertsNcr} />

      {/* </div> */}
      <TreatmentAtNivaan
        TreatmentCardData={kneePainTreatmentAtNivan}
        TreatmentHeading={kneePainTreatmentAtNivanHeading}
      />
      <WhatPatientSayAboutUs
        patientReviewData={KneePainElderlyWomenReviewData}
        useWhiteBackground={true}
      />
      <Faq askedCardData={kneePainFaqData} />
      <FormAd />
      <FloatingButton />
      <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />

    </>
  );
};

export default KneePain;
