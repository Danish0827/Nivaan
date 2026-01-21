import HeroSection from '../Heriniated/HeroSection/HeroSection';
import OurCareExperts from '../OurCareExperts/OurCareExperts';
import {
  backPainElderlyWomenHeading,
  backPainTreatmentAtNivaan2,
  backPainTreatmentVideo,
  backPainElderlyWomen,
} from '@/app/api/v1BackPainElderlyWomenData';
import WhatPatientSayAboutUs from '../WhatPatientSayAboutUs/WhatPatientSayAboutUs';
import TreatmentAtNivaan from '../TreatmentAtNivaan/TreatmentAtNivaan';
import Faq from '../Faq/Faq';
import FormAd from '../FormAd/FormAd';
import Navbar from '../Nav/Navbar';
import FloatingButton from '@/components/FloatingButton';
import FeatureListCardSection from '@/components/FeatureListCardSection';
import WhyChooseNivaan from '../WhyChooseNivaan/WhyChooseNivaan';
import ImgSrcKneePain from '../../../public/back.webp';
import ImgSrcKneePainMob from '../../../public/backPainMob.webp';
import WhatIsSection from '@/sections/WhatIsSection/WhatIsSection';
import Clinicleadership from '../ClinicLeadership/ClinicLeadership';
//import { usePathname } from "next/navigation";
import Footer2 from '../Footer/Footer2';
import {
  WhatIsBackPainCarouselCardData,
  backPainFaqData,
  backPainTreatmentAtNivaan,
} from '@/app/api/backPainTreatment';
import { KneePainFeatureListCardData1 } from '@/app/api/v1KneePainNewData';
import {
  BackPainFeatureListCardData2,
  backPainTreatmentFaqData,
  backPainTreatmentHeading,
} from '@/app/api/v1backPainMenNewData';
import { doctorData,DoctorDataConsulting} from '@/app/api/v1DrVideoMenData';
import { doctorDataMob,DoctorDataConsultingMob} from '@/app/api/v1DrVideoWomenData';
import BackPainElderlyWomenImgMob from '../../../public/mobile/back-pain-edw-mob.webp';
import BackPainElderlyWomenImg from '../../../public/desktop/back-pain-edw-desk.webp';
import BackPainTreatmentImg from '../../../public/desktop/Back-pain-header.webp';
import BackPainTreatmentImgMob from '../../../public/mobile/Back-pain-header-mob.webp';
import HeroSectionLucknow from '../Heriniated/HeroSection/HeroSectionLucknow';
import { ConsultdoctorLucknow } from '@/app/api/ConsultingDoctorData';
import Consultingdoctor from '../ConsultingDoctor/ConsultingDoctor';
const BackPainLucknow = () => {
  const whatIsSectionProps = {
    heading: 'What is Back Pain?',
    ImgSrc: ImgSrcKneePain,
    ImgSrcMob: ImgSrcKneePainMob,
    ImgTxt:
      'Back Pain is the discomfort, stiffness, or uneasiness in the back region, specifically the area between the neck and pelvis.',
    cardData: WhatIsBackPainCarouselCardData,
    isAffected: true,
    hideImageOverlayText: true,
    imageAltText:
      'Back Pain is the discomfort, stiffness, or uneasiness in the back region, specifically the area between the neck and pelvis.',
  };
  return (
    <div>
      <Navbar />
        <HeroSectionLucknow
          heading={
                'Effective Back Pain Treatment in Delhi NCR & Lucknow'
          }
          imgSrc={
               BackPainTreatmentImg.src
          }
          imgSrcMob={
              BackPainTreatmentImgMob.src

          }
        /> 
        
        <FeatureListCardSection
          title1="Why opt for Nivaan’s Back Pain treatment?"
          title2="When does one get Back pain treatment?"
          data1={KneePainFeatureListCardData1}
          data2={BackPainFeatureListCardData2}
        />

      {/* <div ref={expertsRef}> */}
      
        <>
          <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob}/>
          <Consultingdoctor doctorData={ConsultdoctorLucknow} doctorDataMob={ConsultdoctorLucknow}/>
          <WhyChooseNivaan />
        </>

      {/* </div> */}
      <TreatmentAtNivaan
        TreatmentCardData={
            backPainTreatmentAtNivaan2
           
        }
        TreatmentHeading={
           backPainTreatmentHeading
        }
      />
      {/* <FormAd /> */}
       <FormAd show={true}/>
      {/* <WhatIsSection
        heading="What is Back Pain?"
        ImgSrc={ImgSrcKneePain}
        ImgSrcMob={ImgSrcKneePainMob}
        ImgTxt="Back Pain is the discomfort, stiffness, or uneasiness in the back region, specifically the area between the neck and pelvis."
        cardData={WhatIsBackPainCarouselCardData}
        /> */}
      <WhatIsSection {...whatIsSectionProps} />
      <div></div>
      <WhatPatientSayAboutUs
        patientReviewData={
            backPainTreatmentVideo 
        }
      />

      <Faq
        askedCardData={
           backPainTreatmentFaqData 
        }
      />

      {/* {showFloatingButton && <FloatingButton />} */}
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </div>
  );
};

export default BackPainLucknow;
