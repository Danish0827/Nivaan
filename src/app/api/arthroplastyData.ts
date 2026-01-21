import kneeBreak from "../../../public/knee_break.webp";
import backBreak from "../../../public/back_break.webp";
import kneeBand from "../../../public/knee_band.webp";
import jointBreak from "../../../public/joint_break.webp";
import RiyaKumari from "../../../public/desktop/kneepainnewmen_review1.webp";
import Parineeti from "../../../public/desktop/kneepainnewmen_review2.webp";
import herniTesti1 from "../../../public/herniTest1.webp";
import { ConditionsTreatedType, FeatureListCardDataType, FeatureListCardProps, Review, faqData } from "./allTypes";

export const arthroplastyFeatureListCard1: FeatureListCardDataType[] = [
    { id: 1, desc: "Severe joint pain " },
    { id: 2, desc: "Joint damage due to arthritis or injury" },
    { id: 3, desc: "Loss of joint function and mobility" },
  ];
  
  export const arthroplastyFeatureListCard2: FeatureListCardDataType[] = [
    { id: 1, desc: "Personalized treatment plans" },
    { id: 2, desc: "Insurance coverage" },
    { id: 3, desc: "Minimized recovery time" },
    { id: 4, desc: "Evidence-based" },
    { id: 5, desc: "Patient-centered care" },
  ];
  
  export const arthroplastyConditionsTreated: ConditionsTreatedType[] = [
    {
      id: 1,
      image: kneeBreak,
      content: "Osteo Arthritis",
    },
    {
      id: 2,
      image: backBreak,
      content: "Rheumatoid Arthritis",
    },
    {
      id: 3,
      image: kneeBand,
      content: "Post-Traumatic Arthritis",
    },
    {
      id: 4,
      image: jointBreak,
      content: "Hip And Knee Joint Degeneration",
    },
  ];

export const arthroplastyFaqData: faqData[] = [
    {
      title: "What is Arthroplasty?",
      desc: "Arthroplasty is a minimally invasive surgical procedure used to treat broken vertebrae with a balloon and bone cement.",
    },
    {
      title: "What conditions can Arthroplasty treat?",
      desc: "Arthroplasty can treat spinal deformity and back pain resulting from vertebral fractures caused by osteoporosis, cancer, and trauma.",
    },
    {
      title: "Is hospitalization required for Arthroplasty?",
      desc: "Yes, hospitalization is required for the procedure.",
    },
    {
      title:
        "How soon can one resume normal day-to-day activity after Arthroplasty?",
      desc: "Normal activities can usually be resumed within 24 hours after the procedure.",
    },
    {
      title: "How long does a Arthroplasty take?",
      desc: "The procedure typically takes between 40 to 60 minutes.",
    },
    {
      title: "Does insurance cover Arthroplasty?",
      desc: "Yes, insurance often covers the cost of Arthroplasty.",
    },
    {
      title: "Is Arthroplasty procedure painful?",
      desc: "The procedure is minimally painful as it is performed under local anesthesia.",
    },
  ];
  
  export const arthroplastyPatientReview: Review[] = [
    {
      id: 1,
      name: "Sunita Agarwal",
      reviewText:
        "Dr. Naveen Talwar performed my knee arthroplasty, the pain relief was almost immediate, and recovery was smoother than I imagined. Nivaan's staff were compassionate and skilled, making my journey to mobility a positive experience.",
      postedWhen: "03/12/23",
      img: RiyaKumari,
      isFourStar: false,
    },
    {
      id: 2,
      name: "Amit Verma",
      reviewText:
        "I underwent hip arthroplasty at Nivaan with Dr. Pushpinder Singh, my experience was great and his team's support was outstanding. I was walking without pain much sooner than expected.",
      postedWhen: "21/01/24",
      img: herniTesti1,
      isFourStar: false,
    },
    {
      id: 3,
      name: "Geeta Bisht",
      reviewText:
        "My journey from joint pain to walking freely has been hard to believe. Thanks to Dr. Rohit Gulati and the Nivaan team. The advanced arthroplasty technique provided me with a new lease on life, I'm deeply grateful.",
      postedWhen: "15/11/23",
      img: Parineeti,
      isFourStar: false,
    },
  ];

  export const arthroplastyFeatureListCardWithTitle1: FeatureListCardProps = {
    title: "When To Opt For A Arthroplasty?",
    data: arthroplastyFeatureListCard1,
  };
  
  export const arthroplastyFeatureListCardWithTitle2: FeatureListCardProps = {
    title: "Why Opt For Nivaan’s Arthroplasty?",
    data: arthroplastyFeatureListCard2,
  };