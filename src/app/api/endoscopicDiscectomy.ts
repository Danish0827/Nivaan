import FiveStar from "../../../public/5Star.webp";
import sicatiaPainEndoscopic from "../../../public/sicatia_pain_endoscopic.webp";
import herniatedDisc from "../../../public/herniated_disc.webp";
import degenerativeDisc from "../../../public/degenerative_disc.webp";
import { FeatureListCardDataType, IconGridData, Review, faqData } from "./allTypes";

export const endoscopicDiscetomyFaqData: faqData[] = [
    {
      title: "What is Endoscopic Discectomy?",
      desc: "A minimally invasive procedure to remove herniated disc material causing pain, performed with an endoscope for less tissue damage and faster recovery.",
    },
    {
      title: "What conditions can Endoscopic Discectomy treat?",
      desc: "Primarily used for herniated discs, sciatica, and degenerative disc disease causing back and leg pain.",
    },
    {
      title: "Is hospitalization required for Endoscopic Discectomy?",
      desc: "It's usually an outpatient procedure, with most patients going home the same day.",
    },
    {
      title:
        "How soon can one resume normal day-to-day activity after Endoscopic Discectomy?",
      desc: "Many patients return to normal activities within a few days, with full recovery varying from person to person.",
    },
    {
      title: "How long does Endoscopic Discectomy take?",
      desc: "It may take 2-3 hours varying from person to person.",
    },
    {
      title: "Does insurance cover Endoscopic Discectomy?",
      desc: "Yes, the procedure is covered by most insurance plans, including full support at Nivaancare.",
    },
    {
      title: "Is the Endoscopic Discectomy painful?",
      desc: "The procedure involves minimum pain due to its minimally invasive nature and is performed under local anesthesia.",
    },
  ];


export const endoscopicDiscetomyReview: Review[] = [
    {
      id: 1,
      name: "Keshav Patwal",
      reviewText:
        "After the Endoscopic Discectomy, I finally found relief from my chronic back pain. The procedure and recovery were smooth, thanks to Dr. Talwar and the Nivaan team.",
      postedWhen: "23/09/23",
      img: FiveStar,
    },
    {
      id: 2,
      name: "Radhika Johri",
      reviewText:
        "The professionalism and care at Nivaan were exceptional. My sciatica pain is gone after the surgery, and I couldn't be happier with the results.",
      postedWhen: "2/04/23",
      img: FiveStar,
    },
    {
      id: 3,
      name: "Prashant Gupta",
      reviewText:
        "Living with degenerative disc disease was tough. The endoscopic discectomy changed my life, and I'm now back to my daily routines without pain.",
      postedWhen: "10/03/23",
      img: FiveStar,
    },
  ];
  
  export const endoscopicDiscetomyConditionsTreated: IconGridData[] = [
    {
      id: 1,
      icon: herniatedDisc,
      description: "Herniated Discs",
    },
    {
      id: 2,
      icon: sicatiaPainEndoscopic,
      description: "Sciatica",
    },
    {
      id: 3,
      icon: degenerativeDisc,
      description: "Degenerative Disc Disease",
    },
  ];

  export const endoscopicDiscetomy1: FeatureListCardDataType[] = [
    {
      id: 1,
      desc: "Persistent back or leg pain not relieved by other treatments",
    },
    {
      id: 2,
      desc: "Herniated disc symptoms",
    },
    {
      id: 3,
      desc: "Sciatica pain that affects quality of life",
    },
  ];
  
  export const endoscopicDiscetomy2: FeatureListCardDataType[] = [
    {
      id: 1,
      desc: "Daycare procedure*",
    },
    {
      id: 2,
      desc: "Complete insurance coverage",
    },
    {
      id: 3,
      desc: "Fast recovery time",
    },
    {
      id: 4,
      desc: "Minimally invasive",
    },
    {
      id: 5,
      desc: "Highly effective",
    },
  ];