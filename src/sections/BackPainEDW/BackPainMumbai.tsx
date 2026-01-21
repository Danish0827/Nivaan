import {
    backPainTreatmentAtNivaan2,
    backPainTreatmentVideo,
} from '@/app/api/v1BackPainElderlyWomenData';
import WhatPatientSayAboutUs from '../WhatPatientSayAboutUs/WhatPatientSayAboutUs';
import TreatmentAtNivaan from '../TreatmentAtNivaan/TreatmentAtNivaan';
import Faq from '../Faq/Faq';
import FloatingButton from '@/components/FloatingButton';
import FeatureListCardSection from '@/components/FeatureListCardSection';
import ImgSrcKneePain from '../../../public/back.webp';
import ImgSrcKneePainMob from '../../../public/backPainMob.webp';
import WhatIsSection from '@/sections/WhatIsSection/WhatIsSection';
import Clinicleadership from '../ClinicLeadership/ClinicLeadership';
import Footer2 from '../Footer/Footer2';
import {
    WhatIsBackPainCarouselCardData,

} from '@/app/api/backPainTreatment';
import { KneePainFeatureListCardData1 } from '@/app/api/v1KneePainNewData';
import {
    BackPainFeatureListCardData2,
    backPainTreatmentFaqData,
    backPainTreatmentHeading,
} from '@/app/api/v1backPainMenNewData';
import { DoctorDataConsulting } from '@/app/api/v1DrVideoMenData';
import { DoctorDataConsultingMob } from '@/app/api/v1DrVideoWomenData';
import BackPainTreatmentImg from '../../../public/desktop/Back-pain-header.webp';
import BackPainTreatmentImgMob from '../../../public/mobile/Back-pain-header-mob.webp';
import { ConsultdoctorMumbai } from '@/app/api/ConsultingDoctorData';
import Consultingdoctor from '../ConsultingDoctor/ConsultingDoctor';
import HeroSectionMumbai from '../Heriniated/HeroSection/HeroSectionMumbai';
import NavbarMumbia from '../Nav/NavbarMumbia';
import WhyChooseNivaan2 from '../WhyChooseNivaan/WhyChooseNivaan2';
import FormAd__2 from '../FormAd/FormAd_2';
import FormAd_new from '../FormAd/FormAd_new';
const BackPainMumbai = () => {
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
            <NavbarMumbia />
            <HeroSectionMumbai
                heading={
                    'Effective Back Pain Treatment in Delhi NCR & Mumbai'
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
            <>
                <Clinicleadership isBg={true} doctorData={DoctorDataConsulting} doctorDataMob={DoctorDataConsultingMob} />
                <Consultingdoctor doctorData={ConsultdoctorMumbai} doctorDataMob={ConsultdoctorMumbai} location='mumbai'/>
                <WhyChooseNivaan2 location='mumbai'/>
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
            <FormAd_new location='mumbai'/>
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

export default BackPainMumbai;
