import hipTreatment1 from "../../../public/hipTreatment1.webp";
import hipTreatment2 from "../../../public/hipTreatment2.webp";
import hipTreatment3 from "../../../public/hipTreatment3.webp";
import hipTreatment4 from "../../../public/hipTreatment4.webp";
import hipTreatment5 from "../../../public/hipTreatment5.webp";
import settingsHeartSVG from "../../../public/settings_heart.webp";
import heartSVG from "../../../public/heart.webp";
import pulseAlertSVG from "../../../public/pulse_alert.webp";
import { FeatureListCardDataType, Treatment, TreatmentData, WhatIsCarouselCardType, faqData } from "./allTypes";

export const hipPainTreatmentAtNivan: TreatmentData[] = [
    {
      id: 1,
      name: "Superior Hypogastric Plexus Block",
      img: hipTreatment1,
      process:
        "Doctor injects medication near the superior hypogastric plexus, a group of nerves in the lower abdomen.",
      benefits: [
        "Provides immediate & long-term relief",
        "Reduces inflammation",
        "Helps with additional medical care",
        "Assists in identifying the source of pain",
      ],
    },
    {
      id: 2,
      name: "Sacroiliac Joint Injection",
      img: hipTreatment4,
      process:
        "Doctor administers steroids and anesthetics into the lower back to reduce pain and inflammation.",
      benefits: [
        "Provides instant pain relief",
        "Increases mobility",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 3,
      name: "Ilioinguinal and Iliohypogastric Nerve Block",
      img: hipTreatment2,
      process:
        "Doctor injects anesthesia near specific nerves in the lower abdomen to block the pain signals from being sent to the brain.",
      benefits: [
        "Targeted pain relief",
        "Less systemic medication",
        "Speedier recovery",
        "Minimized dependency on medicine",
      ],
    },
    {
      id: 4,
      name: "Ganglion Impar Block",
      img: hipTreatment3,
      process:
        "Doctor injects medication near the tailbone to relieve pelvic or rectal pain.",
      benefits: [
        "Minimally invasive",
        "Long-term pain relief",
        "No scars or stitches",
        "Instant pain relief",
      ],
    },
    {
      id: 5,
      name: "Hypogastric Plexus(RFA)",
      img: hipTreatment5,
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: [
        "Provides immediate & long-term relief",
        "Reduces inflammation",
        "Helps with additional medical care",
        "Assists in identifying the source of pain",
      ],
    },
  ];
  
  export const hipPainTreatmentAtNivaanHeading: Treatment = {
    heading: "Hip Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
  };
  
  export const WhatIsHipPainCarouselCardData: WhatIsCarouselCardType[] = [
    {
      id: 1,
      heading: "What are the common causes of Hip Pain?",
      icon: pulseAlertSVG,
      para: "Hip Pain is caused due to multiple reasons. Some on them are -",
      listArr: [
        {
          title: "Arthritis: ",
          desc: "Joint inflammation and pain, due to wear and tear or autoimmune factors.",
        },
        {
          title: "Bursitis: ",
          desc: "Inflammation of fluid-filled sacs causing sharp hip pain.",
        },
        {
          title: "Muscle/Tendon Strain: ",
          desc: "Overuse or injury to hip muscles or tendons.",
        },
        {
          title: "Hip Fractures: ",
          desc: "Cause severe pain and mobility issues.",
        },
      ],
    },
    {
      id: 2,
      heading: "How is Hip Pain diagnosed?",
      icon: heartSVG,
      para: "At Nivaan, a holistic approach is taken, where a team of pain specialists and physiotherapists evaluate the patient. The following mediums help diagnose a patient with Hip Pain -",
      listArr: [
        { title: "", desc: "Medical history" },
        { title: "", desc: "Physical Examination" },
        { title: "", desc: "Imaging Tests like X-ray, MRI, or CT scan" },
      ],
    },
    {
      id: 3,
      heading: "What are the various Hip Pain treatment options available?",
      icon: settingsHeartSVG,
      para: "Nivaan’s team provides a treatment plan that combines physical therapy, medical management, and non-surgical interventions. Non-surgical treatment options include -",
      listArr: [
        { title: "", desc: "Superior Hypogastric Plexus Block" },
        { title: "", desc: "Hip Joint Injection" },
        { title: "", desc: "Ilioinguinal and Iliohypogastric Nerve Block" },
        { title: "", desc: "Ganglion Impar Block" },
        { title: "", desc: "Sacroiliac Joint Injection" },
        { title: "", desc: "Hypogastric Plexus" },
      ],
    },
  ];

  export const hipPainFaqData: faqData[] = [
    {
      title: "Why choose Nivaan over other hospitals for Hip Pain treatment?",
      desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of Hip Pain.",
    },
    {
      title: "Why should I opt for non-surgical treatment for Hip Pain?",
      desc: "Non-surgical treatments for Hip Pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
    },
    {
      title: "Does insurance cover Hip Pain treatment? ",
      desc: "Yes, Most Hip Pain treatment procedures are covered under insurance plans and Nivaan has collaborated with various Insurance providers to provide a hassle free insurance claim process.",
    },
    {
      title: "When can one return to work after the treatment procedure?",
      desc: "As most Hip Pain treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
    {
      title: "How long does a Hip Pain treatment procedure take?",
      desc: "The duration of a Hip Pain treatment procedure at Nivaan typically ranges from 30-40 minutes, depending on the specific treatment being administered.",
    },
    {
      title: "What are the common symptoms of Hip Pain?",
      desc: "Common symptoms of Hip Pain include discomfort or soreness in or around the hip joint accompanied by other symptoms like stiffness, swelling, and limited range of motion.",
    },
    {
      title: "What are the primary causes of Hip Pain?",
      desc: "Common Hip Pain causes include arthritis, bursitis, tendonitis, muscle or tendon strain, hip fractures, labral tears, sciatica, hip impingement, osteonecrosis, and infections like septic arthritis. Overuse, injuries, and age-related wear and tear also contribute significantly.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
    {
      title: "What is the best way to get instant Hip Pain relief?",
      desc: "For immediate relief from Hip Pain, Nivaan's pain specialists may suggest treatments like nerve block, radiofrequency ablation, administered under local anaesthesia for quick pain relief.",
    },
    {
      title: "What are the various Hip Pain treatments available at Nivaan?",
      desc: "Nivaan offers a range of treatments for Hip Pain, including lifestyle modifications, physical therapy, medications, and non-invasive procedures. Each treatment plan is customised based on the patient’s specific needs and medical history.",
    },
    {
      title:
        "What are the advantages of non-invasive Hip Pain treatment procedures?",
      desc: "Hip Pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
    },
    {
      title: "Why should one not delay Hip Pain treatment?",
      desc: "One should avoid delaying Hip Pain treatment to avoid further bone damage, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
    },
  ];

export const HipPainFeatureListCardData2: FeatureListCardDataType[] = [
    {
      id: 1,
      desc: "Swelling and tenderness in the hip",
    },
    {
      id: 2,
      desc: "Stiffness and reduced mobility",
    },
    {
      id: 3,
      desc: "Difficulty in walking",
    },
    {
      id: 4,
      desc: "Pain due to injury to the hip",
    },
  ];