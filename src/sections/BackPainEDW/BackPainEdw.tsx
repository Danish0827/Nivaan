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
import { doctorDataMob,DoctorDataConsultingMob, OurCareExpertsNcr} from '@/app/api/v1DrVideoWomenData';
import BackPainElderlyWomenImgMob from '../../../public/mobile/back-pain-edw-mob.webp';
import BackPainElderlyWomenImg from '../../../public/desktop/back-pain-edw-desk.webp';
import BackPainTreatmentImg from '../../../public/desktop/Back-pain-header.webp';
import BackPainTreatmentImgMob from '../../../public/mobile/Back-pain-header-mob.webp';
import HeroSectionJaipur from '../Heriniated/HeroSection/HeroSectionJaipur';
import { ConsultdoctorJaipur } from '@/app/api/ConsultingDoctorData';
import Consultingdoctor from '../ConsultingDoctor/ConsultingDoctor';
import OurCareExpertsNcrs from '../OurCareExperts/OurCareExpertsNcr';
const BackPainEdw = ({ pathName }: { pathName: string }) => {
  //const pathName = usePathname();
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  const isBackPainTreatmentEdw=pathName==='/v1/back-pain-elderly-women-new'
  const isBackPainTreatment = pathName === '/next/back-pain-treatment';
  const isBackPainTreamentJaipur=pathName==='/next/jaipur/back-pain-treatment';
  // const handleScroll = () => {
  //   if (expertsRef.current) {
  //     const { top } = expertsRef.current.getBoundingClientRect();
  //     if (top <= window.innerHeight) {
        // setShowFloatingButton(true);
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
      <Navbar />{
        isBackPainTreatment?
        <HeroSection
          pathName={pathName}
          heading={
            isBackPainTreatment
              ? 'Effective Back Pain Treatment in Delhi NCR & Lucknow'
              : 'Non Surgical Back Pain Treatment '
          }
          imgSrc={
            isBackPainTreatment
              ? BackPainTreatmentImg.src
              : BackPainElderlyWomenImg.src
          }
          imgSrcMob={
            isBackPainTreatment
              ? BackPainTreatmentImgMob.src
              : BackPainElderlyWomenImgMob.src
          }
        /> 
        
        :
          <HeroSectionJaipur
          pathName={pathName}
          heading={
              isBackPainTreamentJaipur 
              ?'Effective Back Pain Treatment in Delhi NCR & Jaipur'
              : 'Non Surgical Back Pain Treatment '
          }
          imgSrc={
            isBackPainTreamentJaipur
              ? BackPainTreatmentImg.src
              : BackPainElderlyWomenImg.src
          }
          imgSrcMob={
            isBackPainTreamentJaipur
              ? BackPainTreatmentImgMob.src
              : BackPainElderlyWomenImgMob.src
          }
          />
      }
      {(
        <FeatureListCardSection
          title1="Why opt for Nivaan’s Back Pain treatment?"
          title2="When does one get Back pain treatment?"
          data1={KneePainFeatureListCardData1}
          data2={BackPainFeatureListCardData2}
        />
      )}
      {/* <div ref={expertsRef}> */}
      {isBackPainTreamentJaipur? (
        <>
          <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob}/>
          <Consultingdoctor doctorData={ConsultdoctorJaipur} doctorDataMob={ConsultdoctorJaipur}/>
          <WhyChooseNivaan />
        </>
      ) :
      isBackPainTreatment ? (
        <>
          <OurCareExpertsNcrs
            DoctorData={OurCareExpertsNcr}
            Heading='Our Care Experts'
            bgColor={true}
          />
          <WhyChooseNivaan />
        </>
      ) :
      (
        <OurCareExperts doctorData={doctorData} doctorDataMob={doctorDataMob} />
      )}
      {/* </div> */}
      <TreatmentAtNivaan
        TreatmentCardData={
          isBackPainTreatment||isBackPainTreamentJaipur
            ? backPainTreatmentAtNivaan2
            : backPainTreatmentAtNivaan
        }
        TreatmentHeading={
          isBackPainTreatment
            ? backPainTreatmentHeading
            : backPainElderlyWomenHeading
        }
      />
      {/* <FormAd /> */}
      {(isBackPainTreatment ||isBackPainTreamentJaipur)&& <FormAd />}
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
          isBackPainTreatment  ||isBackPainTreamentJaipur? backPainTreatmentVideo : backPainElderlyWomen
        }
      />

      <Faq
        askedCardData={
          isBackPainTreatment ? backPainTreatmentFaqData : backPainFaqData
        }
      />
      {(isBackPainTreatmentEdw) && <FormAd />}

      {/* {showFloatingButton && <FloatingButton />} */}
      <FloatingButton />
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </div>
  );
};

export default BackPainEdw;
