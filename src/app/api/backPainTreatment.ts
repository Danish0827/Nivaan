import treatment2 from "../../../public/desktop/treatment-2.webp";
import backPain2 from "../../../public/backpain2.webp";
import backPain3 from "../../../public/backpain3.webp";
import backPain4 from "../../../public/backpain4.webp";
import backPain5 from "../../../public/backpain5.webp";
import backPain6 from "../../../public/backpain6.webp";
import { Treatment, TreatmentData, WhatIsCarouselCardType, faqData } from "./allTypes";
import heartPulseExclamation from "../../../public/heartpulse_exclamation.webp";
import heartPulse from "../../../public/heartpulse.webp";
import settingsHeart from "../../../public/settings_heart.webp";
  
  export const backPainHeading: Treatment = {
    heading: "Back Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
  };

  export const backPainTreatmentAtNivaan: TreatmentData[] = [
    {
      id: 1,
      name: "Lumbar Radiofrequency Ablation",
      img: treatment2,
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: ["Minimises inflammation ", "Quick recovery time"],
    },
    {
      id: 2,
      name: "Caudal Epidural Injection",
      img: backPain2,
      process:
        "Doctor injects a specific steroid/numbing medicine in the epidural space to reduce pain and inflammation. ",
      benefits: [
        "Daycare procedure",
        "Provides instant pain relief",
        "Increases mobility",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 3,
      name: "Lumbar Transforaminal Nerve Block",
      img: backPain3,
      process:
        "Doctor injects anaesthesia and steroids near lumbar nerves to block the pain signals from being sent to the brain.",
      benefits: [
        "Minimally invasive",
        "Long-term pain relief",
        "No scars or stitches",
        "Helps identify the source of pain",
      ],
    },
  
    {
      id: 4,
      name: "Ozone Injection",
      img: backPain4,
      process:
        "Doctor injects Ozone gas into the lumbar joint. This helps in reducing inflammation and pain.",
      benefits: [
        "Quick daycare procedure",
        "Mobility improvement",
        "Promotes long term healing",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 5,
      name: "Endoscopic Discectomy",
      img: backPain5,
      process:
        "Doctor makes a key-hole incision to remove herniated disc material with the help of an endoscope.",
      benefits: [
        "Much safer than other surgeries",
        "Small incision",
        "Minimal scar tissue formation",
        "No damage to bones and muscles",
      ],
    },
    {
      id: 6,
      name: "Kyphoplasty",
      img: backPain6,
      process:
        "Doctor places a bone cement injection to treat compression fractures that are a result of osteoporosis/ trauma.",
      benefits: [
        "Restores height of collapsed bones",
        "Restores balance of spine",
        "Relieves pain significantly",
        "Reduces risk for subsequent fractures",
      ],
    },
  ];

  export const backPainFaqData: faqData[] = [
    {
      title: "Why choose Nivaan over other hospitals for Back pain treatment?",
      desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of Back pain.",
    },
    {
      title: "Why should I not opt for surgery for Back pain?",
      desc: "Non-surgical treatments for Back pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
    },
    {
      title: "Does insurance cover Back pain treatment?",
      desc: "Nivaan collaborates with various insurance providers, and most Back pain treatment procedures are covered under insurance plans.",
    },
    {
      title: "When can one return to work after the treatment procedure?",
      desc: "As most Back pain treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
    {
      title: "How long does a Back pain treatment procedure take?",
      desc: "The duration of a Back pain treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
    {
      title:
        "What are the advantages of non-invasive Back pain treatment procedures?",
      desc: "Back pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
    },
    {
      title: "Why should one not delay Back pain treatment?",
      desc: "One should avoid delaying Back pain treatment to avoid further damage to the bones, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
    },
  ];

  export const WhatIsBackPainCarouselCardData: WhatIsCarouselCardType[] = [
    {
      id: 1,
      heading: "What are the common causes of Back Pain?",
      icon: heartPulseExclamation,
      para: "Back Pain is caused due to multiple reasons. Some on them are -",
      listArr: [
        {
          title: "Sedentary Lifestyle: ",
          desc: "Muscle weakness causing stiffness.",
        },
        {
          title: "Injuries: ",
          desc: "Muscle or ligament strains, herniated discs, fractures",
        },
        {
          title: "Stress and Age: ",
          desc: "Poor sleep and depression worsens condition. More common in ages 40 and above",
        },
        {
          title: "Genetics: ",
          desc: "History of skeletal disorders, spinal abnormalities",
        },
      ],
    },
    {
      id: 2,
      heading: "How is Back Pain diagnosed?",
      icon: heartPulse,
      para: "At Nivaan, a holistic approach is taken, where a team of pain specialists and physiotherapists evaluate the patient. The following mediums help diagnose a patient with Back Pain -",
      listArr: [
        { title: "", desc: "Medical history" },
        { title: "", desc: "Physical Examination" },
        { title: "", desc: "Imaging Tests like X-ray, MRI, or CT scan" },
      ],
    },
    {
      id: 3,
      heading: "What are the various Back Pain treatment options available?",
      icon: settingsHeart,
      para: "Nivaan’s team provides a treatment plan that combines physical therapy, medical management, and non-surgical interventions. Non-surgical treatment options include -",
      listArr: [
        { title: "", desc: "Lumbar Transforaminal Nerve Block" },
        { title: "", desc: "Lumbar Radiofrequency Ablation" },
        { title: "", desc: "Caudal Epidural Block" },
        { title: "", desc: "Endoscopic Discectomy" },
        { title: "", desc: "Ozone Injection" },
        { title: "", desc: "Kyphoplasty" },
      ],
    },
  ];