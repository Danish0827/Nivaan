import shoulderPainPC from "../../../public/shoulder.webp";
import shoulderPainMobile from "../../../public/shoulderMob.webp";
import { FeatureListCardDataType, FeatureListCardProps, Review, Treatment, TreatmentData, WhatIsCarouselCardType, faqData } from "./allTypes";
import ra from "../../../public/ra.webp";
import sm from "../../../public/sm.webp";
import bi from "../../../public/bi.webp";
import si from "../../../public/si.webp";
import iai from "../../../public/iai.webp";
import heartPulseExclamation from "../../../public/heartpulse_exclamation.webp";
import heartPulse from "../../../public/heartpulse.webp";
import settingsHeart from "../../../public/settings_heart.webp";

export const shoulderPainFeatureListCard1: FeatureListCardDataType[] = [
    { id: 1, desc: "Long-lasting pain relief" },
    { id: 2, desc: "1:1 personalised care" },
    { id: 3, desc: "30-60 minutes daycare procedures" },
    { id: 4, desc: "US FDA approved treatments" },
  ];
  
  export const shoulderPainFeatureListCard2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent pain" },
    { id: 2, desc: "Difficulty in Shoulder movement" },
    { id: 3, desc: "Swelling or clicking of the Shoulder" },
    { id: 4, desc: "Inability to bear weight" },
  ];
  
  export const shoulderPainFeatureListCardWithTitle1: FeatureListCardProps = {
    title: "Why opt for Nivaan’s Shoulder Pain treatment?",
    data: shoulderPainFeatureListCard1,
  };
  
  export const shoulderPainFeatureListCardWithTitle2: FeatureListCardProps = {
    title: "When does one get Shoulder Pain treatment?",
    data: shoulderPainFeatureListCard2,
  };
  
  export const shoulderPainHeading: Treatment = {
    heading: "Shoulder Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
  };
  
  export const shoulderPainTreatmentAtNivan: TreatmentData[] = [
    {
      id: 1,
      name: "Radiofrequency Ablation",
      img: ra,
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: [
        "Minimises inflammation",
        "Quick recovery time",
        "Immediate pain relief",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 2,
      name: "Shoulder Manipulation",
      img: sm,
      process:
        "Doctor moves the shoulder to loosen tightness and break scar tissue to improve shoulder movement and reduce pain.",
      benefits: [
        "Improved shoulder mobility",
        "Reduced shoulder pain",
        "Enhances the effectiveness of physical therapy",
      ],
    },
    {
      id: 3,
      name: "Bursitis Injection",
      img: bi,
      process:
        "Doctor numbs the area, then injects medication into the bursa to alleviate inflammation and pain.",
      benefits: [
        "Quick pain relief",
        "Reduced inflammation",
        "Improved mobility",
        "Minimally invasive option",
      ],
    },
    {
      id: 4,
      name: "Steroid Injection",
      img: si,
      process:
        "Doctor applies a numbing agent, and then injects a steroid medication to reduce inflammation and pain.",
      benefits: [
        "Quick inflammation and pain relief",
        "Targeted treatment",
        "Delay or avoid surgery",
      ],
    },
    {
      id: 5,
      name: "Intra-articular Injection",
      img: iai,
      process:
        "Doctor injects corticosteroids directly into the joint space. This method targets the source of Shoulder pain effectively and efficiently.",
      benefits: [
        "Targeted Pain Relief",
        "Reduces Inflammation",
        "Improves mobility",
        "30 Min Procedure",
      ],
    },
  ];
  
  export const shoulderPainReview: Review[] = [
    {
      id: 1,
      name: "",
      reviewText: "",
      postedWhen: "",
      img: "",
      isVideo: true,
      videoUrl: "nTyEpmbkVPQ",
    },
  ];
  
  export const shoulderPainFaqData: faqData[] = [
    {
      title:
        "Why choose Nivaan over other hospitals for Shoulder Pain treatment?",
      desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of Shoulder pain.",
    },
    {
      title: "Why should I not opt for surgery for Shoulder Pain?",
      desc: "Non-surgical treatments for Shoulder pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
    },
    {
      title: "Does insurance cover Shoulder Pain treatment?",
      desc: "Nivaan collaborates with various insurance providers, and most Shoulder pain treatment procedures are covered under insurance plans.",
    },
    {
      title: "When can one return to work after the treatment procedure?",
      desc: "As most Shoulder pain procedures at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
    {
      title: "How long does a Shoulder Pain treatment procedure take?",
      desc: "The duration of a Shoulder pain treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
    },
    {
      title: "What is Shoulder Pain?",
      desc: "Shoulder pain is discomfort or pain in the Shoulder area resulting from conditions such as injuries, arthritis, mechanical problems, or overuse. Symptoms can include pain, swelling, stiffness, and reduced mobility.",
    },
    {
      title: "What are the primary causes of Shoulder Pain?",
      desc: "Primary causes of Shoulder pain include arthritis (like osteoarthritis), sports injuries, repetitive motion injuries, obesity, ageing, and certain medical conditions that affect the joints.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
    {
      title: "What is the best way to get instant Shoulder Pain relief?",
      desc: "For immediate relief from Shoulder pain, Nivaan’s pain specialists may suggest treatments like Shoulder Manipulation, RFA, Bursitis Injection, Steroid Injection & Intra-articular Injection administered under local anaesthesia for quick pain relief.",
    },
    {
      title: "What are the various Shoulder Pain treatments available at Nivaan?",
      desc: "Nivaan offers a range of treatments for Shoulder pain, including lifestyle modifications, physical therapy, medications, and non-invasive procedures. Each treatment plan is customised based on the patient’s specific needs and medical history.",
    },
    {
      title:
        "What are the advantages of non-invasive Shoulder Pain treatment procedures?",
      desc: "Shoulder pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
    },
    {
      title: "Why should one not delay Shoulder Pain treatment?",
      desc: "One should avoid delaying Shoulder pain treatment to avoid further damage to the bones, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
    },
  ];
  
  export const WhatIsShoulderPainCarouselCardData: WhatIsCarouselCardType[] = [
    {
      id: 1,
      heading: "What are the common causes of Shoulder Pain?",
      icon: heartPulseExclamation,
      para: "Shoulder Pain is caused due to multiple reasons. Some on them are -",
      listArr: [
        {
          title: "Lifestyle:",
          desc: "Particularly osteoarthritis, causing joint pain and stiffness.",
        },
        {
          title: "Tendinitis:",
          desc: "Inflammation of the tendons, often due to overuse.",
        },
        {
          title: "Bursitis:",
          desc: "Inflammation of the bursae, small fluid-filled sacs that reduce friction.",
        },
        {
          title: "Rotator Cuff Tear:",
          desc: "Tears in the rotator cuff tendons can lead to pain and weakness.",
        },
        {
          title: "Frozen Shoulder:",
          desc: "Characterised by stiffness and pain in the shoulder joint.",
        },
        {
          title: "Dislocation:",
          desc: "The shoulder joint is prone to dislocation, leading to intense pain.",
        },
        {
          title: "Fractures:",
          desc: "Fractures of the shoulder bones, including the clavicle or humerus, can cause severe pain.",
        },
      ],
    },
    {
      id: 2,
      heading: "How is Shoulder Pain diagnosed?",
      icon: heartPulse,
      para: "At Nivaan, a holistic approach is taken, where a team of pain specialists and physiotherapists evaluate the patient. The following mediums help diagnose a patient with Shoulder Pain -",
      listArr: [
        { title: "", desc: "Medical history" },
        { title: "", desc: "Physical Examination" },
        { title: "", desc: "Imaging Tests like X-ray, MRI, or CT scan" },
      ],
    },
    {
      id: 3,
      heading: "What are the various Shoulder Pain treatment options available?",
      icon: settingsHeart,
      para: "Nivaan’s team provides a treatment plan that combines physical therapy, medical management, and non-surgical interventions. Non-surgical treatment options include -",
      listArr: [
        { title: "", desc: "Radiofrequency Ablation" },
        { title: "", desc: "Intra-articular Injection" },
        { title: "", desc: "Shoulder Manipulation" },
        { title: "", desc: "Steroid Injection" },
        { title: "", desc: "Bursitis Injection" },
      ],
    },
  ];

  export const shoulderPainWhatisProps = {
    heading: "What is Shoulder Pain?",
    ImgSrc: shoulderPainPC,
    ImgSrcMob: shoulderPainMobile,
    ImgTxt: "",
    cardData: WhatIsShoulderPainCarouselCardData,
    hideImageOverlayText: true,
  };