import HeroSection from '../Heriniated/HeroSection/HeroSectionAcl';
import OurCareExperts from '../OurCareExperts/OurCareExperts';
import {
  backPainTreatmentAtNivaan2,
  backPainTreatmentVideo,
} from '@/app/api/v1BackPainElderlyWomenData';
import WhatPatientSayAboutUs from '../WhatPatientSayAboutUs/WhatPatientSayAboutUs';
import TreatmentAtNivaan from '../TreatmentAtNivaan/TreatmentAtNivaan';
import Faq from '../Faq/Faq';
import FormAd from '../FormAd/FormAd';
import FormAd2 from '../FormAd/FormAd2_new';
import Navbar from '../Nav/Navbar';
import FloatingButton from '@/components/FloatingButton';
import FeatureListCardSection from '@/components/FeatureListCardSection';
import WhyChooseNivaan from '../WhyChooseNivaan/WhyChooseNivaan';
import PRP_image from "../../../public/PRP_doc.webp"
import Prp_mob from "../../../public/PRP_mob.png"
import WhatIsSection from '@/sections/WhatIsSection/WhatIsSection';
import Footer2 from '../Footer/Footer2';
import googleImg from "../../../public/googleImage.webp";
import smileImg from "../../../public/smile.webp";
import likeImg from "../../../public/like.webp";
import { AclInjuryFeatureCardData,AclInjuryFeatureTreatmentCardData ,ACLPainTreatmentHeading,PrpTreatmentAtNivaan2,WhatIsACLInjuryPainCarouselCardData,ACLPainTreatmentFaqData} from '@/app/api/AclInjuryData';

import { doctorData} from '@/app/api/v1DrVideoMenData';
import { doctorDataMob, OurCareExpertsNcr} from '@/app/api/v1DrVideoWomenData';
import AclInjuryImg from '../../../public/desktop/Acl_injury.png';
import AclInjuryImgMob from '../../../public/mobile/Acl_mob.png'
import OurCareExpertsNcrs from '../OurCareExperts/OurCareExpertsNcr';
const AclInjury = ({ pathName }: { pathName: string }) => {
  const isBackPainTreatmentEdw=pathName==='/v1/back-pain-elderly-women-new'

  const whatIsSectionProps = {
    heading: 'What is ACL Pain?',
    ImgSrc: PRP_image,
    ImgSrcMob: Prp_mob,
    ImgTxt:
      'Back Pain is the discomfort, stiffness, or uneasiness in the back region, specifically the area between the neck and pelvis.',
    cardData: WhatIsACLInjuryPainCarouselCardData,
    isAffected: true,
    hideImageOverlayText: true,
    imageAltText:
      'Back Pain is the discomfort, stiffness, or uneasiness in the back region, specifically the area between the neck and pelvis.',
  };
  return (
    <div>
      <Navbar />
      {
        <HeroSection
          pathName={pathName}
          heading={'Knee Pain While Walking ? It might be an ACL Injury'
          }
          imgSrc={AclInjuryImg.src}
          imgSrcMob={AclInjuryImgMob.src}
        /> 
      
      }
      {(
        <FeatureListCardSection
          title1="Why opt for Nivaan’s ACL  treatment?"
          title2="When does one get ACL pain treatment?"
          data1={AclInjuryFeatureCardData}
          data2={AclInjuryFeatureTreatmentCardData}
        />
      )}
          <OurCareExpertsNcrs
          bgColor={true}
            DoctorData={OurCareExpertsNcr}
            Heading='Our Care Experts'
          />
          <WhyChooseNivaan />
      {/* <TreatmentAtNivaan
        TreatmentCardData={PrpTreatmentAtNivaan2}
        TreatmentHeading={ACLPainTreatmentHeading}
      /> */}

      <FormAd2 isForm2={false} formLocation={"acl-injury-page"} pageRoute="acl-injury" cardData={CARD_DATA} />
      <WhatIsSection {...whatIsSectionProps} />
      <div></div>
      <WhatPatientSayAboutUs
        patientReviewData={
          backPainTreatmentVideo 
        }
      />

      <Faq
        askedCardData={
          ACLPainTreatmentFaqData 
        }
      />
      {(isBackPainTreatmentEdw) && <FormAd />}
      {/* <FloatingButton /> */}
      <Footer2 phoneNumber="+91-73 5871 2483" />
    </div>
  );
};

export default AclInjury;
const CARD_DATA = [
  {
    title: "4.8/5",
    desc: "Positive Reviews",
    img: googleImg,
  },
  {
    title: "20K+",
    desc: "Happy Patients",
    img: smileImg,
  },
  {
    title: "90%",
    desc: "Surgeries Avoided",
    img: likeImg,
  },
];
