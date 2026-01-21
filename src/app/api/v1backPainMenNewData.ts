import NeeruImg from "../../../public/NeeruBang.webp";
import Nitin from "../../../public/Nitin-Singh 1 (1).webp";
import { FeatureListCardDataType, Review, Treatment } from "./allTypes";
import backTesti1 from "../../../public/backTest1.webp";
import backTesti2 from "../../../public/backTesti2.webp";
import backTesti3 from "../../../public/backTesti3.webp";

export const backPainNew: Review[] = [
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


  export const backPainTreatmentFaqData = [
    {
      title: "Why choose Nivaan over other hospitals for Back pain treatment?",
      desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of Back pain.",
    },
    {
      title: "Why should I not opt for surgery for Back pain?",
      desc: "Non-surgical treatments for Back pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
    },
    {
      title: "Does insurance cover Back pain treatment?",
      desc: "Nivaan collaborates with various insurance providers, and most Back pain treatment procedures are covered under insurance plans.",
    },
    {
      title: "When can one return to work after the treatment procedure?",
      desc: "As most Back pain treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
    {
      title: "How long does a Back pain treatment procedure take?",
      desc: "The duration of a Back pain treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
    },
    {
      title: "What is back pain?",
      desc: "Back pain is the discomfort or stiffness in the back, particularly in the region between the neck and the pelvis. It can vary from a dull, constant ache to a sudden, sharp pain and may be acute or chronic.",
    },
    {
      title: "What are the primary causes of back pain?",
      desc: "Primary causes of back pain include muscle or ligament strains, herniated discs, spinal abnormalities (e.g., scoliosis), arthritis, osteoporosis, and injuries, old age, stress, and genetic factors.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
    {
      title: "What is the best way to get instant back pain relief?",
      desc: "For immediate relief from back pain, Nivaan’s pain specialists may suggest treatments like Lumbar Transforaminal Nerve Block, Lumbar Radiofrequency Ablation, Caudal Epidural block, Endoscopic Discectomy, Ozone Injection, or Kyphoplasty, administered under local anaesthesia for quick pain relief.",
    },
    {
      title: "What are the various back pain treatments available at Nivaan?",
      desc: "Nivaan offers a range of treatments for back pain, including lifestyle modifications, physical therapy, medications, and non-invasive procedures. Each treatment plan is customised based on the patient’s specific needs and medical history.",
    },
    {
      title:
        "What are the advantages of non-invasive Back pain treatment procedures?",
      desc: "Back pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
    },
    {
      title: "Why should one not delay Back pain treatment?",
      desc: "One should avoid delaying back pain treatment to preserve mobility and functionality, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
    },
  ];

  export const BackPainFeatureListCardData2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent stiffness or acute pain" },
    { id: 2, desc: "Difficulty in performing daily tasks" },
    { id: 3, desc: "Night time pain disrupting sleep" },
    { id: 4, desc: "Pain due to injury to the back" },
  ];
  export const backPainTreatmentHeading: Treatment = {
    heading: "Back Pain Treatments at Nivaan",
    para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
  };

  export const backPainReview: Review[] = [
    {
      id: 1,
      name: "Surendra",
      reviewText:
        "“After enduring years of back pain, Nivaan's Nerve Block gave me my life back. No surgery, just care & comfort”",
      postedWhen: "2 weeks ago",
      img: backTesti1,
    },
    {
      id: 2,
      name: "Ajeet",
      reviewText:
        "“My chronic back pain resolved with Nivaan’s RFA procedure. Surgery-free and absolutely life-changing”",
      postedWhen: "3 weeks ago",
      img: backTesti2,
    },
    {
      id: 3,
      name: "Vivek",
      reviewText:
        "”Back pain crippled my daily life until Nivaan’s intervention. Their treatment strategy avoided surgery and restored my mobility.”",
      postedWhen: "5 weeks ago",
      img: backTesti3,
    },
  ];