import kneeTestimonial1 from "../../../public/desktop/kneepain/knee-testimonial-1.webp";
import kneeTestimonial2 from "../../../public/desktop/kneepain/knee-testimonial-2.webp";
import kneeTestimonial3 from "../../../public/desktop/kneepain/knee-testimonial-3.webp";
import { FeatureListCardDataType, Review } from "./allTypes";

export const kneePainPatientReviewData: Review[] = [
    {
      id: 1,
      name: "Kamal",
      reviewText:
        '“After months of chronic knee pain, Nivaan’s RFA procedure provided relief without surgery. Grateful for my new pain-free life"',
      postedWhen: "1 week ago",
      img: kneeTestimonial1,
    },
    {
      id: 2,
      name: "Prakhar",
      reviewText:
        '"Years of knee pain finally healed thanks to Nivaan’s intra-articular injection. No surgery required, simply amazing!"',
      postedWhen: "3 weeks ago",
      img: kneeTestimonial2,
    },
    {
      id: 3,
      name: "Rajeev",
      reviewText:
        '"I suffered from severe knee pain until Nivaan’s Nerve Block procedure helped me get relief without surgery. Thankful every day!"',
      postedWhen: "4 weeks ago",
      img: kneeTestimonial3,
    },
  ];
  
  export const KneePainFeatureListCardData1: FeatureListCardDataType[] = [
    { id: 1, desc: "Long-lasting pain relief" },
    { id: 2, desc: "1:1 personalised care" },
    { id: 3, desc: "30-60 minutes daycare procedures" },
    { id: 4, desc: "US FDA approved treatments" },
  ];
  
  export const KneePainFeatureListCardData2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent stiffness or acute pain" },
    { id: 2, desc: "Difficulty in knee movement" },
    { id: 3, desc: "Swelling or clicking of the knee" },
    { id: 4, desc: "Inability to bear weight" },
  ];


  export const Physiotherapy1: FeatureListCardDataType[] = [
    { id: 1, desc: "Designed & guided by Senior Orthopaedic Surgeon" },
    { id: 2, desc: "Personalised, evidence-based care plans" },
    { id: 3, desc: "Advanced modalities (Laser, Ultrasound, Dry Needling, Cupping, Taping)" },
    { id: 4, desc: "Focus on long-term relief & prevention of recurrence" },
    { id: 4, desc: "1:1 attention from experienced physiotherapists" },
  ];
  
  export const Physiotherapy2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent pain in back, neck, knees, shoulders or hips" },
    { id: 2, desc: "Limited movement despite rest or medicines" },
    { id: 3, desc: "Stiffness, weakness, or balance problems" },
    { id: 3, desc: "Post-injury recovery or post-surgical stiffness" },
    { id: 4, desc: "Recurring headaches or nerve-related pain" },
  ];