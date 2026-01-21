import { Review, TreatmentData, faqData } from "./allTypes";
import kneeTreatment1 from "../../../public/desktop/kneepain/knee-treatment-1.webp";
import kneeTreatment2 from "../../../public/desktop/kneepain/knee-treatment-2.webp";
import kneeTreatment3 from "../../../public/desktop/kneepain/knee-treatment-3.webp";
import kneeTreatment4 from "../../../public/desktop/kneepain/knee-treatment-4.webp";
import kneeTreatment5 from "../../../public/desktop/kneepain/knee-treatment-5.webp";
import kneePainElderlyMenTestimonial1 from "../../../public/desktop/kneepainnewmen_review1.webp";
import kneePainElderlyMenTestimonial2 from "../../../public/desktop/kneepainnewmen_review2.webp";

  export const KneePainElderlyMenAtNivaan: TreatmentData[] = [
    {
      id: 1,
      name: "Radiofrequency Ablation",
      img: kneeTreatment1,
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: ["Minimises inflammation", "Quick recovery time"],
    },
    {
      id: 2,
      name: "Genicular Nerve Block",
      img: kneeTreatment2,
      process:
        "Doctor injects anaesthesia and steroids near Genicular Nerves to block the pain signals from being sent to the brain.",
      benefits: ["No scars or stitches", "Helps identify the source of pain"],
    },
    {
      id: 3,
      name: "Intra Articular Injection",
      img: kneeTreatment4,
      process:
        "Doctor injects corticosteroids directly into the joint space. This method targets the source of knee pain effectively and efficiently.",
      benefits: ["Targeted Pain Relief", "Reduces Inflammation"],
    },
    {
      id: 4,
      name: "Ozone Injection",
      img: kneeTreatment3,
      process:
        "Doctor injects Ozone gas into the knee joint. This helps in reducing inflammation and pain.",
      benefits: [
        "Quick Daycare Procedure",
        "Mobility Improvement",
        "Promotes Long Term Healing",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 5,
      name: "Prolotherapy",
      img: kneeTreatment5,
      process:
        "Doctor injects a saline/dextrose solution into damaged knee tendons, joints, ligaments, or adjacent joint spaces.",
      benefits: ["Promotes tissue repair and growth", "Long-term pain relief"],
    },
  ];

  export const kneePainMan: Review[] = [
    {
      id: 1,
      name: "Alok Sharma",
      reviewText:
        '“I was suffering with my knee and lower back pain last 2-3 years for which I consulted Nivaan care team. Dr Ritu had been very supportive in treating me."',
      postedWhen: "1 week ago",
      img: require("../../../public/knee-pain1.webp"),
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 2,
      name: "Yogendra",
      reviewText:
        '"I came to Nivaan, I was suffering with severe knee pain, because of the treatment plan given by Dr Rohit Gulati I am doing much better and I’m able to go on walks with my grandkids."',
      postedWhen: "5 weeks ago",
      img: require("../../../public/knee-pain2.webp"),
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
      videoUrl: "IHHnMX5ARQk",
    },
  ];

  export const KneePainElderlyMenReviewData: Review[] = [
    {
      id: 1,
      name: "Kamal",
      reviewText:
        '“After months of chronic knee pain, Nivaan’s RFA procedure provided relief without surgery. Grateful for my new pain-free life"',
      postedWhen: "1 week ago",
      img: kneePainElderlyMenTestimonial1,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 2,
      name: "Prakhar",
      reviewText:
        '"Years of knee pain finally healed thanks to Nivaan’s intra-articular injection. No surgery required, simply amazing!"',
      postedWhen: "3 weeks ago",
      img: kneePainElderlyMenTestimonial2,
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
      videoUrl: "S_MGVv6bR1M",
    },
  ];