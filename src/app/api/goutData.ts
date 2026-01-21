import herni1 from "../../../public/herniatedTreatment.webp";
import herniTesti1 from "../../../public/gout/goutTestimonial1.webp";
import herniTesti2 from "../../../public/gout/goutTestimonial2.webp";
import herniTesti3 from "../../../public/gout/goutTestimonial3.webp";
import treatment1 from "../../../public/gout/goutTreatmentImg.webp";
import { Review, Treatment, TreatmentData, faqData } from "./allTypes";
import starImg from "../../../public/desktop/Stars.webp";
import fiveStar from "../../../public/desktop/5Stars.webp";

export const goutTreatmentAtNivan: TreatmentData[] = [
    {
      id: 1,
      name: "Intra-Articular Steroid Injection",
      img: herni1,
      process:
        "Steroid injection into the joint reduces inflammation and relieves pain.",
      benefits: [
        "Immediate pain relief",
        "Restores joint mobility",
        "Quick outpatient procedure"
      ],
    }
];

export const goutHeading: Treatment = {
    heading: "Gout Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
};

export const goutPatientReviewData: Review[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      reviewText:
        "“I suffered from unbearable gout pain in my toe for months. Nivaan’s steroid injection gave me instant relief, and now I can walk pain-free. Thank you, Nivaan!”",
      postedWhen: "2 weeks ago",
      img: herniTesti1,
      starImg: starImg,
    },
    {
      id: 2,
      name: "Pooja Singh",
      reviewText:
        "“The swelling and sharp pain in my ankle due to gout made daily tasks difficult. After treatment at Nivaan, I felt a huge difference immediately. Highly recommended!”",
      postedWhen: "5 weeks ago",
      img: herniTesti2,
      starImg: fiveStar,
    },
    {
      id: 3,
      name: "Amit Khanna",
      reviewText:
        "“Living with gout pain was exhausting, but Nivaan’s advanced treatment changed everything. The procedure was quick, and the relief was almost instant”",
      postedWhen: "7 weeks ago",
      img: herniTesti3,
      starImg: fiveStar,
    },
  ];


  export const goutFaqData: faqData[] = [
    {
      title: "What is Gout Pain?",
      desc: "Gout is a form of arthritis caused by uric acid crystal buildup in joints, leading to sudden pain, swelling, and redness, often in the big toe, knees, or ankles.",
    },
    {
      title: "What causes Gout Pain?",
      desc: "Common causes include:\n• High uric acid levels\n• Diets rich in purines (red meat, seafood, alcohol)\n• Obesity, genetics, or metabolic disorders",
    },
    {
      title: "Who treats Gout Pain at Nivaan?",
      desc: "A team of pain specialists, physiotherapists, nutritionists, and care managers collaborate to design personalized treatment plans.",
    },
    {
      title: "How can Gout pain be relieved quickly?",
      desc: "Intra-articular steroid injections provide instant relief by reducing joint inflammation. These procedures are non-surgical and performed under local anesthesia.",
    },
    {
      title: "What treatments are available at Nivaan?",
      desc: "Gout is treated with medication, lifestyle changes, and non-invasive procedures like steroid injections, tailored to each patient’s needs.",
    },
    {
      title: "What are the benefits of these treatments?",
      desc: "• Immediate pain relief\n• Minimally invasive\n• Performed by specialists under local anesthesia\n• Quick recovery with minimal side effects",
    },
    {
      title: "How long does treatment take?",
      desc: "Most procedures, like steroid injections, are completed in 30–40 minutes as outpatient treatments.",
    },
    {
      title: "Is insurance available for treatment?",
      desc: "Yes, most treatments are covered by insurance.",
    },
    {
      title: "When can I return to work?",
      desc: "Patients can typically resume work the next day, with light activity for a few days.",
    },
  ];