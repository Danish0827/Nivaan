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
    { id: 1, desc: "Targets only the damaged area, not the whole joint" },
    { id: 2, desc: "Preserves healthy bones and tissues" },
    { id: 3, desc: "Return to your daily routine in 2 weeks" },
    { id: 4, desc: "Minimum post-procedure pain" },
    { id: 5, desc: "Personalized rehab for sustained mobility" },
  ];
  
  export const KneePainFeatureListCardData2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent pain in the inner knee or under kneecap" },
    { id: 2, desc: "Stiffness and reduced mobility despite physiotherapy/medicines" },
    { id: 3, desc: "Difficulty in walking short distances or climbing stairs" },
    { id: 4, desc: "Knee arthritis limited to one compartment of the joint" },
    { id: 5, desc: "Desire to avoid total knee replacement surgery" },
  ];


  export const SpineFeature1: FeatureListCardDataType[] = [
    { id: 1, desc: "Done under local/regional anesthesia — ideal for elderly or high-risk patients" },
    { id: 2, desc: "Same-day discharge possible" },
    { id: 3, desc: "Microscopic precision with real-time imaging" },
    { id: 4, desc: "Minimal blood loss and tissue damage" },
    { id: 5, desc: "Faster return to work and daily life" },
  ];
  
  export const SpineFeature2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent back or leg pain due to a slipped disc or nerve compression" },
    { id: 2, desc: "Numbness, tingling, or weakness in legs despite medicines or physiotherapy" },
    { id: 3, desc: "Difficulty standing, walking, or sitting for long durations" },
    { id: 4, desc: "Spinal stenosis or disc herniation confirmed on MRI" },
    { id: 5, desc: "Desire to avoid open spine surgery and long hospital stays" },
    { id: 5, desc: "Previous injections or other treatments have not given good results" }
  ];