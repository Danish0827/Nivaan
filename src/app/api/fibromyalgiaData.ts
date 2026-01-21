import plantarTreatment2 from "../../../public/plantar/plantarTreatment2.webp";
import fibromyalgiaTesti1 from "../../../public/plantar/fibromyalgiaTesti1.webp";
import fibromyalgiaTesti2 from "../../../public/plantar/fibromyalgiaTesti2.webp";
import fibromyalgiaTesti3 from "../../../public/plantar/fibromyalgiaTesti3.webp";
import physiotherapyImg from "../../../public/plantar/physiotherapyImg.webp";
import { Review, Treatment, TreatmentData, faqData } from "./allTypes";
import starImg from "../../../public/desktop/Stars.webp";
import fiveStar from "../../../public/desktop/5Stars.webp";

export const fibromyalgiaTreatmentAtNivan: TreatmentData[] = [
  {
    id: 1,
    name: "Physiotherapy",
    img: physiotherapyImg,
    process:
      "Gentle techniques and exercises tailored to ease pain and stiffness in musclesand joints.",
    benefits: [
      "Reduces muscle tension",
      "Improves mobility and flexibility",
      "Enhances energy levels",
      "Restores daily functionality"
    ],
  },
  {
    id: 2,
    name: "Medicine Management",
    img: plantarTreatment2,
    process:
      "Personalized prescriptions for managing chronic pain, sleep disturbances, andmood changes.",
    benefits: [
      "Minimizes fibromyalgia symptoms",
      "Improves overall well-being",
      "Reduces reliance on high doses of painkillers"
    ],
  }
];

export const fibromyalgiaHeading: Treatment = {
  heading: "Fibromyalgia Treatments at Nivaan",
  para: "We use the most advanced pain-relief technologies to ensure maximum pain relief",
};

export const fibromyalgiaPatientReviewData: Review[] = [
    {
      id: 1,
      name: "Gauri Kapoor",
      reviewText:
        "“I had severe muscle pain and fatigue due to Fibromyalgia. Dr. Pushpinder recommended physiotherapy and medication management. Within weeks, my pain reduced significantly.”",
      postedWhen: "2 weeks ago",
      img: fibromyalgiaTesti1,
      starImg: starImg,
    },
    {
        id: 2,
        name: "Rajeev Singh",
        reviewText:
          "“Great experience at Nivaan! The team helped me manage my widespread pain and sleep issues with advanced treatments. The doctors and staff are very supportive and caring.”",
        postedWhen: "3 weeks ago",
        img: fibromyalgiaTesti3,
        starImg: starImg,
    },
    {
      id: 3,
      name: "Anandi Rai",
      reviewText:
        "“I was struggling with Fibromyalgiapain for years, but after getting physiotherapy at Nivaan, I’m finallypain-free and sleeping better. Highly recommended!”",
      postedWhen: "5 weeks ago",
      img: fibromyalgiaTesti2,
      starImg: fiveStar,
    }
];

export const fibromyalgiaFaqData: faqData[] = [
    {
      title: "What is Fibromyalgia?",
      desc: "Fibromyalgia is a chronic condition that causes widespread muscle pain, fatigue, and tenderness in specific areas of the body. It often affects sleep, mood, and mental clarity.",
    },
    {
      title: "What are the symptoms of Fibromyalgia?",
      desc: "Common symptoms include:\n• Persistent muscle pain or tenderness\n• Chronic fatigue\n• Sleep disturbances\n• Cognitive issues like 'fibro fog'\n• Sensitivity to light, sound, or temperature",
    },
    {
      title: "What causes Fibromyalgia?",
      desc: "While the exact cause is unknown, triggers may include:\n• Chronic stress or trauma\n• Infections\n• Genetic predisposition\n• Abnormal brain processing of pain signals",
    },
    {
      title: "Who is involved in the treatment process at Nivaan?",
      desc: "A multidisciplinary team at Nivaan includes a pain specialist, physiotherapist, nutritionist, mindset counselor, and care manager to create a personalized treatment plan.",
    },
    {
      title: "What is the best way to get relief from Fibromyalgia pain?",
      desc: "For severe or persistent symptoms, Nivaan offers:\n• Advanced physiotherapy\n• Medication management\nThese treatments help reduce pain, improve mobility, and restore quality of life.",
    },
    {
      title: "What are the advantages of Fibromyalgia treatments at Nivaan?",
      desc: "• Safe and non-invasive\n• Minimal to no side effects\n• Significant pain relief\n• Tailored to individual needs\n• Performed by experienced specialists",
    },
    {
      title: "How long does a Fibromyalgia treatment session take?",
      desc: "Most treatments, including physiotherapy and injections, take 30–40 minutes and are performed as outpatient procedures.",
    },
  ];