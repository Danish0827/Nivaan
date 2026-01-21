import iasp from "../../../public/iasp.webp";
import pain from "../../../public/pain.webp";
import jpsm from "../../../public/jpsm.webp";
import nb from "../../../public/NeeruBang.webp";
import sss from "../../../public/sss.webp";
import pari from "../../../public/pari.webp";
import kidney from "../../../public/kidny.webp";
import stomach from "../../../public/stomach.webp";
import heart from "../../../public/heart2.webp";
import hourglass from "../../../public/hourglass.webp";
import ex from "../../../public/ex.webp";
import addiction from "../../../public/addiction.webp";
import dna from "../../../public/dna.webp";
import shield from "../../../public/shield.webp";
import { ConditionsTreatedType, ImportantStudiesType, Review, faqData } from "./allTypes";

export const PainMedicationsImpStudies: ImportantStudiesType[] = [
    {
      id: 1,
      heading:
        "Influence of opioid-related side effects on disability, mood, and opioid misuse risk among patients with chronic pain in primary care",
      subHeading: "General Section : Research paper",
      img: iasp,
      url: "https://journals.lww.com/painrpts/fulltext/2017/03000/influence_of_opioid_related_side_effects_on.5.aspx",
    },
    {
      id: 2,
      heading: "Side effects of opioids",
      subHeading: "General Section : Research paper",
      img: pain,
      url: "https://fpm.ac.uk/opioids-aware-clinical-use-opioids/side-effects-opioids",
    },
    {
      id: 3,
      heading:
        "Perceptions of Analgesic Use and Side Effects: What the Public Values in Pain Management",
      subHeading: "Vol. 28 No. 5 November 2004",
      img: jpsm,
      url: "https://www.jpsmjournal.com/article/S0885-3924(04)00330-6/pdf",
    },
  ];

  export const painMedicationFaqData: faqData[] = [
    {
      title: "Why should I opt for Nivaan’s treatment over painkillers?",
      desc: "Unlike painkillers, our procedures offer a single treatment solution that provides lasting relief by targeting the root causes of pain, avoiding the side effects and dependency risks associated with painkillers.",
    },
    {
      title: "What is Nivaan?",
      desc: "Nivaan is India’s most effective non-surgical pain management program. We offer a range of solutions to help manage and alleviate chronic pain, including medication, physical therapy, and other treatments. The goal is to provide patients with comprehensive care and support to help them achieve a better quality of life. Our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country.",
    },
    {
      title: "How do you diagnose the root cause of chronic pain?",
      desc: "Pain is a complex condition with multiple underlying causes. For pain management to be effective, it needs to address each of these causes. Hence requires multiple specialists to come together to create an integrated care plan. The Nivaan Care Team is designed to bring a whole-person approach that effectively accelerates your journey towards a pain-free life.",
    },
    {
      title: "How is Nivaan different from other pain clinics?",
      desc: "Nivaan Care’s pain management program focuses on making you pain-free with minimal intervention, safe medication, and timely tapering. Nivaan offers emotional support, safe and non-surgical procedures in severe cases to help manage pain.",
    },
    {
      title: "Who are the Superspecialists?",
      desc: "Pain Superspecialists: The pain specialists are dedicatedly trained to help treat your pain – they evaluate the root cause and try to improve your quality of life through medications, rehabilitative therapy, pain relief interventions, and counselling.\nMindset Counsellor: Understanding the pain and its root cause is the first step towards getting rid of it. Nivaan’s pain counsellors work with you to help manage your pain.\nPhysiotherapist: The right exercises can go a long way in a non-surgical treatment plan. Nivaan Care’s highly experienced physiotherapists help you get on the road to recovery with a plan tailored to your pain diagnosis and recovery goals.\nCare Manager: Our care manager is here to hold your hand through your pain relief journey. They are here to coordinate all your medical interactions and guide you towards a pain-free life.\nNutritionist: We now understand that nutrition and pain are more deeply connected than previously thought. Hence, we have world-class nutritionists who can help you nourish right, create the proper diet and catapult your way to a pain-free life.",
    },
    {
      title:
        "What are the different types of pain Nivaan cures? How fast do we see results?",
      desc: "Nivaan Care specialises in treating chronic pain, including but not limited to back pain, neck pain, shoulder pain, and knee pain. Our team of pain specialists is trained to evaluate and treat the root cause of your pain, providing comprehensive care to help you achieve a better quality of life.",
    },
    {
      title: "What conditions do you treat?",
      desc: "Back Pain, Shoulder Pain, Knee Pain, and Neck Pain.",
    },
    {
      title: "Does insurance cover treatment?",
      desc: "Nivaan works with various providers to have most of its treatment procedures covered under insurance.",
    },
    {
      title: "When can one join work after the treatment procedure?",
      desc: "As most treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
  ];

  export const painMedicationPatientReviewData: Review[] = [
    {
      id: 1,
      name: "Neeru Banga",
      reviewText:
        '“Had a wonderful experience with Dr Rohit Gulati and Nivaan Care team. I had pain in my back, after following the procedure and physiotherapy I am feeling much better."',
      postedWhen: "2 weeks ago",
      img: nb,
    },
    {
      id: 2,
      name: "Shiv Shankar Sharma",
      reviewText:
        '"After so many years, My Mother finally found relief from her pain. We consulted Dr Rohit Gulati virtually, he told us about procedure and how it is going to help my Mothers condition - spinal cord cage fixation. "',
      postedWhen: "7 weeks ago",
      img: sss,
    },
    {
      id: 3,
      name: "Parineeti",
      reviewText:
        '"I was suffering with my knee and lower back pain last 2-3 years for which I consulted Nivaan care team . Dr Ritu had been very supportive in treating me."',
      postedWhen: "1 week ago",
      img: pari,
    },
  ];

  export const painMedicationSideEffects: ConditionsTreatedType[] = [
    {
      id: 1,
      image: kidney,
      content: "Liver & Kidney Damage",
      imgStyle: "w-[22.91px] h-[18px] md:w-[42.75px] md:h-[33.59px] mr-2 md:mr-4",
    },
    {
      id: 2,
      image: stomach,
      content: "Metabolic Disruptions",
      imgStyle: "w-[18px] h-[17px] md:w-[33.59px] md:h-[31.72px] mr-2 md:mr-4",
    },
    {
      id: 3,
      image: heart,
      content: "Heart Problems",
      imgStyle: "w-[19px] h-[24px] md:w-[35.45px] md:h-[44.79px] mr-2 md:mr-4",
    },
    {
      id: 4,
      image: hourglass,
      content: "Temporary Relief",
      imgStyle: "w-[18px] h-[23px] md:w-[33.59px] md:h-[42.92px] mr-2 md:mr-4",
    },
    {
      id: 5,
      image: ex,
      content: "Neglect Root Cause",
      imgStyle: "w-[7px] h-[16px] md:w-[9.06px] md:h-[29.86px] mr-2 md:mr-4",
    },
    {
      id: 6,
      image: addiction,
      content: "Dependency & Addiction",
      imgStyle: "w-[18px] h-[18px] md:w-[33.59px] md:h-[33.59px] mr-2 md:mr-4",
    },
    {
      id: 7,
      image: dna,
      content: "Hormonal Disruptions",
      imgStyle: "w-[17px] h-[16.32px] md:w-[44px] md:h-[42px] mr-2 md:mr-4",
    },
    {
      id: 8,
      image: shield,
      content: "Immune System Suppression",
      imgStyle: "w-[18px] h-[21px] md:w-[33.59px] md:h-[39.19px] mr-2 md:mr-4",
    },
  ];