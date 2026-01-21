import { FeatureListCardDataType, Review, Treatment, TreatmentData } from "./allTypes";
import NeeruImg from "../../../public/NeeruBang.webp";
import Nitin from "../../../public/Nitin-Singh 1 (1).webp";
import backPain2 from "../../../public/backpain2.webp";
import backPain3 from "../../../public/backpain3.webp";
import backPain4 from "../../../public/backpain4.webp";
import backPain5 from "../../../public/backpain5.webp";
import backPain6 from "../../../public/backpain6.webp";
import treatment2 from "../../../public/desktop/treatment-2.webp";

export const backPainElderlyWomen: Review[] = [
    {
      id: 1,
      name: "Neeru Banga",
      reviewText:
        '“Had a wonderful experience with Dr Rohit Gulati and Nivaan Care team. I had pain in my back, after following the procedure and physiotherapy I am feeling much better."',
      postedWhen: "2 weeks ago",
      img: NeeruImg,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 2,
      name: "Shiv Shankar Sharma",
      reviewText:
        '"After so many years, My Mother finally found relief from her pain. We consulted Dr Rohit Gulati virtually, he told us about procedure and how it is going to help my Mother\'s condition - spinal cord cage fixation."',
  
      postedWhen: "7 weeks ago",
      img: Nitin,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 3,
      name: "",
      reviewText: "",
      postedWhen: "",
      img: "",
      isVideo: true,
      videoUrl: "jCoIVbcHsWw",
    },
  ];

  export const backPainElderlyWomenHeading: Treatment = {
    heading: "Back Pain Treatments at Nivaan",
    para: "We use the most advanced pain-relief technologies to ensure maximum pain relief",
  };

  export const backPainTreatmentAtNivaan2: TreatmentData[] = [
    {
      id: 1,
      name: "Lumbar Radiofrequency Ablation",
      img: treatment2,
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: [
        "Minimises inflammation ",
        "Quick recovery time",
        "Immediate pain relief",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 2,
      name: "Caudal Epidural Injection",
      img: backPain2,
      process:
        "Doctor injects a specific steroid/numbing medicine in the epidural space to reduce pain and inflammation. ",
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

  export const backPainTreatmentVideo: Review[] = [
    {
      id: 1,
      name: "Neeru Banga",
      reviewText:
        '“Had a wonderful experience with Dr Rohit Gulati and Nivaan Care team. I had pain in my back, after following the procedure and physiotherapy I am feeling much better."',
      postedWhen: "2 weeks ago",
      img: NeeruImg,
      isVideo: true,
      videoUrl: "jCoIVbcHsWw",
    },
    {
      id: 2,
      name: "Shiv Shankar Sharma",
      reviewText:
        '"After so many years, My Mother finally found relief from her pain. We consulted Dr Rohit Gulati virtually, he told us about procedure and how it is going to help my Mother\'s condition - spinal cord cage fixation."',
  
      postedWhen: "7 weeks ago",
      img: Nitin,
      isVideo: true,
      videoUrl: "viRBUk0uICQ",
    },
    {
      id: 3,
      name: "",
      reviewText: "",
      postedWhen: "",
      img: "",
      isVideo: true,
      videoUrl: "GagaDL-LddA",
    },
  ];