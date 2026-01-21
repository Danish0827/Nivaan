import spinalFractures from "../../../public/spinalFractures.webp";
import spinalTumor from "../../../public/spinalTumor.webp";
import traumaticVertebralFractures from "../../../public/traumaticVertebralFractures.webp";
import FiveStar from "../../../public/5Star.webp";
import { FeatureListCardDataType, IconGridData, Review, faqData } from "./allTypes";

export const vertebroplastyFaqData: faqData[] = [
    {
      title: "What is Vertebroplasty?",
      desc: "A minimally invasive procedure to stabilize compression fractures in the spine.",
    },
    {
      title: "What conditions can Vertebroplasty treat?",
      desc: "Back pain from osteoporotic fractures, spinal tumors, and trauma.",
    },
    {
      title: "Is hospitalization required for Vertebroplasty?",
      desc: "No, it's an outpatient procedure.",
    },
    {
      title:
        "How soon can one resume normal day-to-day activity after Vertebroplasty?",
      desc: "Typically within 24-48 hours post-procedure.",
    },
    {
      title: "How long does Vertebroplasty take?",
      desc: "About 30-45 minutes.",
    },
    {
      title: "Does insurance cover Vertebroplasty?",
      desc: "Yes, it is covered by insurance.",
    },
    {
      title: "Is the Vertebroplasty procedure painful?",
      desc: "The procedure is minimally painful as it is performed under local anesthesia.",
    },
  ];

  export const vertebroplastyPatientReview: Review[] = [
    {
      id: 1,
      name: "Mira Singh",
      reviewText:
        "After suffering from back pain for over a year, Vertebroplasty at Nivaan gave me my life back. Dr. Naveen Talwar is highly skilled and was incredibly supportive throughout the process. Today, I can enjoy activities I thought were forever lost to me. Heartfelt thanks to Nivaan!",
      postedWhen: "19/07/23",
      img: FiveStar,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      reviewText:
        "The expertise and care at Nivaan Healthcare are unmatched. Dr. Pushpinder Singh performed my Vertebroplasty. The staff's attentiveness and professionalism made my recovery smoother than I anticipated. I'm grateful.",
      postedWhen: "5/10/23",
      img: FiveStar,
    },
    {
      id: 3,
      name: "Anita Desai",
      reviewText:
        "Choosing Nivaan for my Vertebroplasty was the best decision. Dr. Rohit Gulati ensured I was comfortable and informed at every step. The procedure was a success, significantly reducing my pain and improving my mobility.",
      postedWhen: "28/08/23",
      img: FiveStar,
    },
  ];

  export const vertebroplastyConditionsTreated: IconGridData[] = [
    {
      id: 1,
      icon: spinalFractures,
      description: "Osteoporotic Spinal Fractures",
    },
    {
      id: 2,
      icon: spinalTumor,
      description: "Spinal Tumors",
    },
    {
      id: 3,
      icon: traumaticVertebralFractures,
      description: "Traumatic Vertebral Body Fractures",
    },
  ];

  export const Vertebroplasty1: FeatureListCardDataType[] = [
    {
      id: 1,
      desc: "Persistent back pain",
    },
    {
      id: 2,
      desc: "Osteoporotic fractures",
    },
    {
      id: 3,
      desc: "Vertebral compression due to tumor",
    },
  ];
  
  export const Vertebroplasty2: FeatureListCardDataType[] = [
    {
      id: 1,
      desc: "Outpatient procedure",
    },
    {
      id: 2,
      desc: "Insurance coverage",
    },
    {
      id: 3,
      desc: "Rapid recovery time",
    },
    {
      id: 4,
      desc: "Durable pain relief",
    },
    {
      id: 5,
      desc: "Clinically proven and secure",
    },
  ];