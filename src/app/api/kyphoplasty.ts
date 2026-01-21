import FiveStar from "../../../public/5Star.webp";
import spinalDeformities from "../../../public/spinalDeformities.webp";
import vertebralfractures from "../../../public/vertebralfractures.webp";
import fourStar from "../../../public/fourStar.webp";
import { ConditionsTreatedType, FeatureListCardDataType, Review, faqData } from "./allTypes";

export const KyphoplastyNewFeatureListCardData1: FeatureListCardDataType[] = [
    { id: 1, desc: "Constantly increasing pain" },
    { id: 2, desc: "Previously failed treatments" },
    { id: 3, desc: "Difficulty performing daily tasks" },
  ];
  
  export const KyphoplastyNewFeatureListCardData2: FeatureListCardDataType[] = [
    { id: 1, desc: "Daycare procedure*" },
    { id: 2, desc: "Complete insurance coverage" },
    { id: 3, desc: "Quick recovery time" },
    { id: 4, desc: "Long-lasting pain relief" },
    { id: 5, desc: "Scientifically proven and safe" },
  ];
  
  export const kyphoplastyConditionsTreated: ConditionsTreatedType[] = [
    {
      id: 1,
      image: vertebralfractures,
      content: "vertebral fractures",
      imgStyle: "w-[20.3px] h-[27.06px] md:w-[52.71px] md:h-[70.89px] mr-2 md:mr-4",
    },
    {
      id: 2,
      image: spinalDeformities,
      content: "spinal Deformities",
      imgStyle: "w-[8.88px] h-[27.79px] md:w-[23.06px] md:h-[72.79px] mr-2 md:mr-4",
    },
  ];
  
  export const nextKyphoplastyReviewData: Review[] = [
    {
      id: 1,
      name: "Varun Singh",
      reviewText:
        "I got relief from my pain and my experience was really great. Dr. Naveen Talwar helped me understand the cause of my pain and how Kyphoplasty is the best treatment because of which I am pain-free today.",
      postedWhen: "02/04/23",
      img: FiveStar,
      isFourStar: false,
    },
    {
      id: 2,
      name: "Sareeta Chawla",
      reviewText:
        "Very nice experience with the doctor and the staff as well. I got Kyphoplasty done for my back pain thanks to Nivaan and Dr. Pushpinder I don’t have any pain now.",
      postedWhen: "23/09/23",
      img: FiveStar,
      isFourStar: false,
    },
    {
      id: 3,
      name: "Vikas Verma",
      reviewText:
        "I was diagnosed with Osteoporosis because of which there was immense pain I got Kyphoplasty done and it's almost a miracle that I don’t have any pain now.",
      postedWhen: "17/05/23",
      img: fourStar,
      isFourStar: true,
    },
  ];
  
  export const KyphoplastyFaqData: faqData[] = [
    {
      title: "What is Kyphoplasty?",
      desc: "Kyphoplasty is a minimally invasive surgical procedure used to treat broken vertebrae with a balloon and bone cement.",
    },
    {
      title: "What conditions can Kyphoplasty treat?",
      desc: "Kyphoplasty can treat spinal deformity and back pain resulting from vertebral fractures caused by osteoporosis, cancer, and trauma.",
    },
    {
      title: "Is hospitalization required for Kyphoplasty?",
      desc: "Yes, hospitalization is required for the procedure.",
    },
    {
      title:
        "How soon can one resume normal day-to-day activity after Kyphoplasty?",
      desc: "Normal activities can usually be resumed within 24 hours after the procedure.",
    },
    {
      title: "How long does a Kyphoplasty take?",
      desc: "The procedure typically takes between 40 to 60 minutes.",
    },
    {
      title: "Does insurance cover Kyphoplasty?",
      desc: "Yes, insurance often covers the cost of Kyphoplasty.",
    },
    {
      title: "Is the Kyphoplasty procedure painful?",
      desc: "The procedure is minimally painful as it is performed under local anesthesia.",
    },
  ];