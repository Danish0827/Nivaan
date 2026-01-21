import sciatica_treatment1 from "../../../public/desktop/sciatica/treatments1.webp";
import sciatica_treatment2 from "../../../public/desktop/sciatica/treatments2.webp";
import sciatica_treatment3 from "../../../public/desktop/sciatica/treatments3.webp";
import star_sciatica from "../../../public/desktop/star_sciatica.webp";
import { FeatureListCardDataType, Review, Treatment, TreatmentData, WhatIsCarouselCardType, faqData } from "./allTypes";
import heartPulseExclamation from "../../../public/heartpulse_exclamation.webp";
import heartPulse from "../../../public/heartpulse.webp";
import settingsHeart from "../../../public/settings_heart.webp";

export const SciaticaPainHeading: Treatment = {
    heading: "Sciatica Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
  };
  
  export const SciaticaPainTreatmentAtNivaan: TreatmentData[] = [
    {
      id: 1,
      name: "Nerve Blocks",
      img: sciatica_treatment1,
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
      id: 2,
      name: "Radiofrequency Ablation",
      img: sciatica_treatment2,
      process: "Radiofrequency waves are used to eliminate pain sensations.",
      benefits: [
        "Minimal recovery time",
        "Instant pain relief",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 3,
      name: "Epidural Injection",
      img: sciatica_treatment3,
      process:
        "Doctor injects a specific steroid/numbing medicine in the epidural space to reduce pain and inflammation.",
      benefits: [
        "Daycare procedure",
        "Provides instant pain relief",
        "Increases mobility",
        "Reduces reliance on painkillers ",
      ],
    },
  ];
  
  export const SciaticaPainPatientReviewData: Review[] = [
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

  export const SciaticaPainNewFeatureListCardData1: FeatureListCardDataType[] = [
    { id: 1, desc: "Immediate pain relief" },
    { id: 2, desc: "Minimally-invasive treatments" },
    { id: 3, desc: "Scientifically proven and safe" },
    { id: 4, desc: "30-40 minutes daycare procedure" },
    { id: 5, desc: "No hospitalisation required" },
    { id: 6, desc: "No stitches or scars" },
  ];
  export const SciaticaPainNewFeatureListCardData2: FeatureListCardDataType[] = [
    { id: 1, desc: "Medication is ineffective" },
    { id: 2, desc: "Pain is unbearable" },
    { id: 3, desc: "Performing daily tasks is difficult" },
    { id: 4, desc: "Under doctor’s advice" },
  ];
  
  export const SciaticaPainFaqData: faqData[] = [
    {
      title: "Where is the Sciatica nerve?",
      desc: "The Sciatica nerve originates from the ventral rami of the spinal nerve L4 through S3 and travels down through the gluteus muscles, hamstrings and calves.",
    },
    {
      title: "What are the symptoms of Sciatica?",
      desc: "Sciatica symptoms include lower back pain that radiates along the Sciatica nerve that goes down the buttock and leg.",
    },
    {
      title: "What are the different types of Sciatica pain?",
      desc: "The pain can be acute, chronic, alternating or bilateral. Patients describe Sciatica pain as dull aching or burning sensation pain. There may be leg and foot numbness with a tingling sensation.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "A pain specialist, physiotherapist, nutritionist, mindset counsellor, and care manager are involved in creating a treatment plan after proper patient evaluation and discussion among the team.",
    },
    {
      title: "What is the best way to get instant Sciatica pain relief?",
      desc: "If medical management is not working, pain specialist doctors suggest a nerve block, radiofrequency ablation, or an epidural block. Once administered, these procedures are performed under local anaesthesia and immediately start relieving pain.",
    },
    {
      title: "What are the various Sciatica pain treatments available at Nivaan?",
      desc: "Sciatica pain can be managed through medicines and various non-invasive procedures. At Nivaan, a pain specialist doctor and physiotherapist understand the patient's chief complaint, and medical history and then develop a comprehensive, tailor-made Sciatica treatment plan.",
    },
    {
      title: "What are the advantages of Sciatica treatment procedures?",
      desc: "Sciatica treatment procedures are safe and come with minimal to no side effects. Additionally, one can experience pain relief from these procedures almost immediately. These procedures are performed by trained pain specialists under local anaesthesia with x-ray/ultrasound guidance in a clean, sterile environment.",
    },
    {
      title: "How long does a Sciatica treatment procedure take?",
      desc: "Depending on the type, a Sciatica treatment procedure can take anywhere from 30-40 minutes.",
    },
    {
      title: "Does insurance cover Sciatica treatment?",
      desc: "Nivaan works with various providers to have most of its treatment procedures covered under insurance.",
    },
    {
      title: "When can one join work after the treatment procedure?",
      desc: "Since Sciatica treatments are daycare procedures, one can join work the next day. However, the doctor may advise taking it lightly for a few days for proper healing.",
    },
  ];
  
  export const WhatIsSciaticaPainCarouselCardData: WhatIsCarouselCardType[] = [
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