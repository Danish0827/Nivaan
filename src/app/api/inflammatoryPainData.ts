import { FeatureListCardDataType, Review, Treatment, TreatmentData, WhatIsCarouselCardType,faqData } from "./allTypes";
import star_sciatica from "../../../public/desktop/star_sciatica.webp";
import sciatica_treatment1 from "../../../public/desktop/sciatica/treatments1.webp";
import sciatica_treatment2 from "../../../public/desktop/sciatica/treatments2.webp";
import kneeTreatment2 from "../../../public/desktop/kneepain/knee-treatment-2.webp";
import kneeTreatment5 from "../../../public/desktop/kneepain/knee-treatment-5.webp";
import sciatica_treatment3 from "../../../public/desktop/sciatica/treatments3.webp";
import heartPulseExclamation from "../../../public/heartpulse_exclamation.webp";
import heartPulse from "../../../public/heartpulse.webp";
import settingsHeart from "../../../public/settings_heart.webp";
import kneeTreatment4 from "../../../public/desktop/kneepain/knee-treatment-4.webp";
import kneeTreatment1 from "../../../public/desktop/kneepain/knee-treatment-1.webp";
import kneePainElderlyMenTestimonial1 from "../../../public/desktop/kneepainnewmen_review1.webp";
import kneePainElderlyMenTestimonial2 from "../../../public/desktop/kneepainnewmen_review2.webp";
import ShivShankar from "../../../public/desktop/shivShankar.webp";
import NeeruBanga from "../../../public/desktop/Nitin-Singh 1 (2).webp";
import Faq from "@/sections/Faq/Faq";
export const InflammatoryPainHeading: Treatment = {
    heading: "Inflammatory Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
  };
    export const InflammatoryPainTreatmentAtNivaan: TreatmentData[] = [
    {
      id: 1,
      name: "Radiofrequency Ablation",
      img: kneeTreatment1,
      process: "Radiofrequency waves are used to eliminate pain sensations.",
      benefits: [
        "Minimal recovery time",
        "Instant pain relief",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 2,
      name: "Intra Articular Injection",
      img: kneeTreatment4,
      process: "Doctors injects corticosteriods directly into the joint space. This method targets the source of knee pain effectively and efficiently",
      benefits: [
        "Targeted Pain Relief",
        "Reduces Inflammation",
        "Improve Mobaility ",
        "30 Min Procedure"
      ],
    },
    {
      id: 3,
      name: "Nerve Blocks",
      img: kneeTreatment2,
      process:
        "A numbing medication is injected near nerves to block the pain signals from being sent to the brain.",
      benefits: [
        "Provides immediate & long-term relief",
        "Reduces inflammation",
        "Helps with additional medical care",
        "Assists in identifying the source of pain ",
      ],
    },
    {
      id: 4,
      name: "Prolotherapy",
      img: kneeTreatment5,
      process:
        "Doctor injects a specific steroid/dextrose solution into damaged knee tendons,joints,ligaments or adjacent joint spaces.",
      benefits: [
        "Promotes Tissue Repair And Growth",
        "Helps Identify The Source Of Pain",
        "Long-Term Pain Relief",
        "Improve Mobility",
      ],
    },
  ];
  export const InflammatoryNewFeatureListCardData1: FeatureListCardDataType[] = [
    { id: 1, desc: "Multi-disciplinary approach" },
    { id: 2, desc: "Personalized and holistic plans" },
    { id: 3, desc: "Insurance support enabled" },
    { id: 4, desc: "US FDA approved treatments" },
  ];
  export const InflammatoryPainNewFeatureListCardData2: FeatureListCardDataType[] = [
    { id: 1, desc: "Pain with swelling in joints" },
    { id: 2, desc: "Stiffness that worsens in morning or after rest" },
    { id: 3, desc: "Pain that flares  up unpredictably" },
    { id: 4, desc: "Persistent fatigue and bodyache" },
  ];
    export const WhatIsInflammatoryPainCarouselCardData: WhatIsCarouselCardType[] = [
    {
      id: 1,
      heading: "What damages the Sciatica nerve?",
      icon: heartPulseExclamation,
      para: "There are multiple causes for Sciatica nerve damage. The most common reasons include:",
      listArr: [
        { title: "", desc: "Herniated discs" },
        { title: "", desc: "Degenerative disc disease" },
        { title: "", desc: "Osteoporosis" },
        { title: "", desc: "Compression fractures" },
        { title: "", desc: "Spinal stenosis" },
        { title: "", desc: "Spinal tumours" },
      ],
    },
    {
      id: 2,
      heading: "How is Sciatica diagnosed?",
      icon: heartPulse,
      para: "At Nivaan, a holistic approach is taken, where a team of pain specialists and physiotherapists evaluate the patient. The following mediums help diagnose a patient with Sciatica:",
      listArr: [
        { title: "", desc: "Medical history" },
        { title: "", desc: "Physical Examination" },
        { title: "", desc: "Imaging Tests like X-ray, MRI, or CT scan" },
      ],
    },
    {
      id: 3,
      heading: "What are the various Sciatica pain treatment options available?",
      icon: settingsHeart,
      para: "Nivaan’s team provides a treatment plan that combines physical therapy, medical management, and non-surgical interventions. Non-surgical treatment options available for Sciatica are:",
      listArr: [
        { title: "", desc: "Nerve Block" },
        { title: "", desc: "Epidural Block" },
        { title: "", desc: "Radiofrequency Ablation" },
      ],
    },
  ];
    export const InflammatoryPainPatientReviewData: Review[] = [
    {
      id: 1,
      name: "Meeti Sharma",
      reviewText:
        "Had a good experience with Dr. Pushpinder. I got a nerve block injection and did physiotherapy for sciatica pain. I am much better now with no pain.",
      postedWhen: "28/03/23",
      img: star_sciatica,
    },
    {
      id: 2,
      name: "Aanand Rai",
      reviewText:
        "Dr. Rohit diagnosed me with sciatica and advised injection for pain relief. I got the procedure 2 weeks back. I am pain-free now.",
      postedWhen: "03/08/23",
      img: star_sciatica,
    },
    {
      id: 3,
      name: "Sudhesh Yadav",
      reviewText:
        "Very good clinic and staff. Doctor treated back and leg pain in a few sittings with medicines and nerve injection.",
      postedWhen: "21/05/23",
      img: star_sciatica,
    },
  ];
  export const chronicPainWomenReviewData: Review[] = [
    {
      id: 1,
      name: "Neeru Banga",
      reviewText:
      "Had a wonderful experience with Dr Rohit Gulati and Nivaan Care team. I had pain in my back, after following the procedure and physiotherapy I am feeling much better.",
      postedWhen: "2 weeks ago",
      img: NeeruBanga,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 2,
      name: "Shiv Shankar Sharma",
      reviewText:
        "After so many years, My Mother finally found relief from her pain. We consulted Dr Rohit Gulati virtually, he told us about procedure and how it is going to help my Mother's condition - spinal cord cage fixation.",
        postedWhen: "7 weeks ago",
      img: ShivShankar,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 3,
      name: "Parineeti",
      reviewText:
        "I was suffering with my knee and lower back pain last 2-3 years for which I consulted Nivaan care team . Dr Ritu had been very supportive in treating me.",
  
        postedWhen: "1 week ago",
      img: kneePainElderlyMenTestimonial2,
      isVideo: false,
      videoUrl: "",
    }
  ];
  export const InflammatoryPainFaqData: faqData[] = [
        {
          title: "Why choose Nivaan over other hospitals for inflammatory pain treatment?",
          desc: "Nivaan excels in providing care through a non-surgical, personalised approach. Our expert team uses advanced techniques and targeted non-surgical pain interventions, ensuring faster recovery, less downtime, and long-term joint health without the need for major surgery."
        },
        {
          title: "Who is involved in the diagnosis and treatment processes at Nivaan?",
          desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient."
        },
        {
          title:"What causes inflammatory pain?",
          desc:"nflammatory pain is often caused by an overactive immune response that leads to swelling, stiffness, and sensitivity in the joints, muscles, or tissues. Conditions like arthritis, autoimmune disorders, or chronic stress can all trigger inflammation."
        },
        {
          title:"How do I know if my pain is due to inflammation?",
          desc:"Common signs include pain with swelling, stiffness in the morning, pain that flares up randomly, and body fatigue. If your pain seems to come and go without clear injury, inflammation might be the cause."
        },
        {
          title:"Can inflammatory pain exist without visible swelling or injury?",
          desc:"Yes. In many cases, inflammation is internal and doesn’t present obvious signs at first. That’s why expert diagnosis is important when pain persists without a clear cause."
        },
        {
          title:"What non-surgical treatments are available at Nivaan?",
          desc:"We offer a range of non-surgical treatments including nerve blocks, PRP, RFA, steroid injections, physiotherapy, and anti-inflammatory lifestyle guidance, all tailored to your condition."
        },
        {
          title:"Is this treatment covered under insurance?",
          desc:"Many of our procedures, including diagnostics and interventional treatments, are covered under most health insurance plans. Our team can help you check your eligibility."
        },
        {
          title:"Can inflammation be cured permanently?",
          desc:"Inflammation can often be managed or reduced significantly with the right care. At Nivaan, we focus on treating the root cause and helping patients return to a pain-free life."
        }
      ]