"use client"
import Faq from "@/sections/Faq/Faq";
import FormAd from "@/sections/FormAd/FormAd";
import HeroSection from "@/sections/KneePainTreatment/HeroSection";
import Navbar from "@/sections/Nav/Navbar";
import Superspecialists from "@/sections/OurCareExperts/Superspecialists";
import Physiotherapists from "@/sections/OurCareExperts/Physiotherapists";
import TreatmentAtNivaan from "@/sections/TreatmentAtNivaan/TreatmentAtNivaan";
import WhatPatientSayAboutUs from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUs";
import React from "react";
import { usePathname } from "next/navigation";
import FloatingButton from "@/components/FloatingButton";
import FeatureListCardSection from "@/sections/FeatureListCardSection/FeatureListCardSection";
import BenefitsPhysio from "@/sections/WhyChooseNivaan/BenefitsPhysio";
import WhatIsSection from "@/sections/WhatIsSection/WhatIsSection";
import ImgSrcKneePain from "../../public/desktop/kneepain/WhatIsImg.webp";
import ImgSrcKneePainMob from "../../public/mobile/kneepain/WhatIsImgMob.webp";
import Footer2 from "@/sections/Footer/Footer2";
import { WhatIsKneePainCarouselCardData, kneePainTreatmentAtNivan, kneePainTreatmentAtNivanHeading, nextKneePaintreatment } from "@/app/api/kneePainTreatment";
import { Physiotherapy1, Physiotherapy2 } from "@/app/api/v1KneePainNewData";
import { doctorData } from "@/app/api/v1DrVideoMenData";
import { OurCareExpertsNcr } from "@/app/api/v1DrVideoWomenData";
import { OurSuperspecialists } from "@/app/api/v1DrVideoWomenData";
import { physiotherapists } from "@/app/api/v1DrVideoWomenData";

import { PhysioFaqData } from "@/app/api/v1KneePainElderlyWomenNewData";
import { kneePainPatientReviewData } from "@/app/api/v1KneePainNewData";
import Image from 'next/image';
import HeroSectionPhysio from "@/sections/KneePainTreatment/HeroSectionPhysio";
import { PhysioReviewData } from "@/app/api/v1KneePainElderlyWomenNewData";
import {
  backPainElderlyWomenHeading,
  backPainTreatmentAtNivaan2,
  backPainTreatmentVideo,
  backPainElderlyWomen,
} from '@/app/api/v1BackPainElderlyWomenData';
import WhatPatientSayAboutUsPhysio from "@/sections/WhatPatientSayAboutUs/WhatPatientSayAboutUsPhysio";
import ExperienceCarousel from "@/components/ExperienceCarousel";
const KneePhysiotherapy = () => {
    const pathName = usePathname();
  // const [showFloatingButton, setShowFloatingButton] = useState(false);
  // const expertsRef = useRef<HTMLDivElement>(null);
  const isKneePainTreatment = pathName === '/next/knee-pain-treatment';
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
        <Navbar isForm2Physio={true} formLocation="Physiotherapy-Navbar-Form" />
        <HeroSectionPhysio />
        <FeatureListCardSection data1={Physiotherapy1} data2={Physiotherapy2} />
        {/* {showFloatingButton && <FloatingButton />} */}
        {/* <div ref={expertsRef}> */}
            <Superspecialists   Heading={'Our Superspecialists'} DoctorData={OurSuperspecialists}  bgColor={true}/>
            <Physiotherapists   Heading={'Our Physiotherapists'} DoctorData={physiotherapists}  bgColor={true}/>
        {/* </div> */}
        <BenefitsPhysio />

        <section
            className="px-11 py-[25px] md:px-[70px] md:py-[42px] text-black"
            style={{ backgroundColor: "#EBF1FF" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1A2A6C]">
              Integrated Physiotherapy, Enabled by Experts
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <Image src={require('../../public/physio/Experts.png')} alt="" className="rounded-lg w-full max-w-md" />
              </div>

              {/* Right Content */}
              <div>
                
                <p className="mb-6 text-gray-700">
                  At Nivaan, physiotherapy is{" "}
                  <span className="font-semibold">
                    Superspecialist-guided and progress-driven
                  </span>
                  , not trial-and-error. Every plan is:
                </p>

                <ul className="space-y-4 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-blue-600 text-lg mr-2">
                    <Image src={require('../../public/physio/1.png')} alt="" className="w-10 max-w-md" />
                    </span>
                    <span>
                      <span className="font-semibold">Diagnosed and designed</span> by our
                      orthopaedic surgeon and pain management specialists
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-blue-600 text-lg mr-2">
                    <Image src={require('../../public/physio/2.png')} alt="" className="w-10 max-w-md" />
                    </span>
                    <span>
                      Delivered through{" "}
                      <span className="font-semibold">
                        modern physiotherapy techniques
                      </span>
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-blue-600 text-lg mr-2">
                    <Image src={require('../../public/physio/3.png')} alt="" className="w-10 max-w-md" />
                    </span>
                    <span>
                      Reviewed with{" "}
                      <span className="font-semibold">free Superspecialist check-ins</span>{" "}
                      at 5th &amp; 10th sessions
                    </span>
                  </li>

                  <li className="flex items-start">
                    <span className="text-blue-600 text-lg mr-2">
                    <Image src={require('../../public/physio/4.png')} alt="" className="w-10 max-w-md" />
                    </span>
                    <span>
                      Focused on{" "}
                      <span className="font-semibold">
                        pain relief, rehab, and lifestyle reset
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>


          <section className="px-6 md:px-20 py-12 bg-white">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1A2A6C] mb-10">
                Our Services & Techniques
              </h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Card 1 */}
               
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g1.png')} alt="Manual Therapy" style={{"width":"40%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md">
                    Manual Therapy <br /> And Joint Mobilisation
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g2.png')} alt="Manual Therapy" style={{"width":"35%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md">
                    Dry Needling <br /> And Myofascial Release
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g3.png')} alt="Manual Therapy" style={{"width":"35%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md ml-2">
                    Electrotherapy <br /> (Laser, IFT, TENS, Ultrasound)
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g4.png')} alt="Manual Therapy" style={{"width":"40%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md">
                    Cupping And <br /> Kinesiology Taping
                  </p>
                </div>

                {/* Card 5 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g5.png')} alt="Manual Therapy" style={{"width":"30%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md">
                    Strength And <br /> Conditioning Programs
                  </p>
                </div>

                {/* Card 6 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g6.png')} alt="Manual Therapy" style={{"width":"20%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md ml-2">
                    Posture Correction <br /> And Ergonomic Training
                  </p>
                </div>

                {/* Card 7 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g7.png')} alt="Manual Therapy" style={{"width":"30%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md">
                    Neuromuscular Re-Education <br /> And Balance Training
                  </p>
                </div>

                {/* Card 8 */}
                <div className="bg-[#F1F6FF] rounded-lg p-4 shadow-sm flex items-center">
                <Image src={require('../../public/physio/g8.png')} alt="Manual Therapy" style={{"width":"30%"}}/>
                  <p className="font-semibold text-[#1A2A6C] text-md ml-3">
                    Post Surgical Rehabilitation <br /> (Knee, Hip, Spine, Shoulder)
                  </p>
                </div>
              </div>
            </section>




        {/* <TreatmentAtNivaan TreatmentCardData={kneePainTreatmentAtNivan} TreatmentHeading={kneePainTreatmentAtNivanHeading} /> */}
        <FormAd show={false}/>
        {/* <WhatIsSection 
            heading="What is Knee Pain?"
            ImgSrc={ImgSrcKneePain} 
            ImgSrcMob={ImgSrcKneePainMob} 
            ImgTxt="Pain in or around the knee that may indicate a condition affecting the knee joint itself or the soft tissue around the knee." 
            cardData={WhatIsKneePainCarouselCardData}
            hideImageOverlayText= {true}
        /> */}
        {/* <WhatPatientSayAboutUs patientReviewData={nextKneePaintreatment} /> */}
        <WhatPatientSayAboutUsPhysio patientReviewData={PhysioReviewData} />
        <ExperienceCarousel/>
        <Faq askedCardData={PhysioFaqData} bgWhite={true} />
        <FloatingButton />
        <Footer2 phoneNumber="+91-73 5871 2483" />
    </>
  )
}

export default KneePhysiotherapy;