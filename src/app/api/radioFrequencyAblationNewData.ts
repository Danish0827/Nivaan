import { ConditionsTreatedCardDataType, FeatureListCardDataType, Review, faqData } from "./allTypes";
import Pain1 from "../../../public/pain/pain1.webp";
import Pain2 from "../../../public/pain/pain2.webp";
import Pain3 from "../../../public/pain/pain3.webp";
import Pain4 from "../../../public/pain/pain4.webp";
import Pain5 from "../../../public/pain/pain5.webp";
import Pain6 from "../../../public/pain/pain6.webp";
import Pain7 from "../../../public/pain/pain7.webp";
import Pain8 from "../../../public/pain/pain8.webp";
import Pain9 from "../../../public/pain/pain9.webp";
import Pain10 from "../../../public/pain/pain10.webp";

export const ConditionsTreatedRadioFrequencyCardData: ConditionsTreatedCardDataType[] =
  [
    {
      heading: "Facial Pain",
      listArr: ["Migraine", "Trigeminal Neuralgia"],
      icon: Pain10,
    },
    {
      heading: "Back Pain",
      listArr: [
        "Osteoarthritis",
        "Herniated discs",
        "Spinal stenosis",
        "Sciatica",
        "Ankylosing spondylitis",
        "Sacroiliitis",
      ],
      icon: Pain1,
    },
    {
      heading: "Knee Pain",
      listArr: [
        "Knee osteoarthritis",
        "Knee bursitis",
        "Kneecap dislocation",
        "ACL/MCL tear",
        "Baker's cysts",
        "Runner's knee",
        "Post-traumatic arthritis",
      ],
      icon: Pain2,
    },

    {
      heading: "Hip Pain",
      listArr: ["Piriformis syndrome", "Hip impingement", "Hip bursitis"],
      icon: Pain8,
    },
  ];

export const RadioFrequencyFeatureListCardData1: FeatureListCardDataType[] = [
  { id: 1, desc: "Constantly increasing pain" },
  { id: 2, desc: "Previously failed treatments" },
  { id: 3, desc: "Difficulty performing daily tasks" },
  { id: 4, desc: "Under doctor’s recommendation" },
];

export const RadioFrequencyFeatureListCardData2: FeatureListCardDataType[] = [
  { id: 1, desc: "Daycare procedure" },
  { id: 2, desc: "Quick recovery time" },
  { id: 3, desc: "Long-lasting pain relief" },
  { id: 4, desc: "FDA Approved & Safe" },
];

export const TrigeminalCard1: FeatureListCardDataType[] = [
  { id: 1, desc: "Unresponsive to medicines" },
  { id: 2, desc: "Negative impact on quality of life" },
  { id: 3, desc: "Under doctor’s recommendations" }
];

export const TrigeminalFaqData: faqData[] = [
  {
    title: "What is trigeminal neuralgia?",
    desc: "It’s a chronic pain condition that causes sudden, severe, shock-like pain in the face, usually on one side. It happens when the trigeminal nerve, which carries facial sensations, misfires.",
  },
  {
    title: "How do I know if my facial pain is trigeminal neuralgia?",
    desc: "TN pain is usually sharp, stabbing, or electric-shock-like. It may last a few seconds but can repeat many times a day. Everyday actions like chewing, brushing, or even wind on your face can trigger it.",
  },
  {
    title: "What is RFA for trigeminal neuralgia treatment?",
    desc: "RFA is a minimally invasive pain procedure used to treat trigeminal neuralgia. The procedure uses controlled heat to target specific nerve fibers of the trigeminal nerve that carry pain signals, without damaging the entire nerve.",
  }
];

export const RadioFrequencyFaqData: faqData[] = [
  {
    title: "What is Radiofrequency Ablation?",
    desc: "Radiofrequency ablation is a medical procedure used to treat chronic pain with radiofrequency waves. These waves are aimed towards the targetted nerve, where they produce heat and destroy the nerves, disrupting the pain signals.",
  },
  {
    title: "What conditions can Radiofrequency Ablation treat?",
    desc: "Radiofrequency Ablation can treat various ailments and disorders including sacroiliac joint pain, peripheral nerve pain, neck pain, pain caused by arthritis, facet joint pain, migraines, and intercostal and trigeminal neuralgias.",
  },
  {
    title: "Is hospitalisation required for Radiofrequency Ablation?",
    desc: "No, hospitalisation is not required. Radiofrequency Ablation is a daycare procedure and the patient can come back home the same day.",
  },
  {
    title:
      "How soon can one resume normal day-to-day activity after the procedure?",
    desc: "Most people can resume their daily activities in a day or two. However, it is advised to follow post-procedure precautions and discuss resuming activities with the specialist.",
  },
  {
    title: "How long does a Radiofrequency Ablation procedure take?",
    desc: "Depending on the ailment or condition, radiofrequency ablation can take between 30 - 60 minutes.",
  },
  {
    title: "Does insurance cover Radiofrequency Ablation procedure?",
    desc: "Nivaan works with various providers to have most of its treatment procedures covered under insurance.",
  },
  {
    title: "Is Radiofrequency Ablation procedure painful?",
    desc: "Doctors usually apply a topical anaesthetic to reduce discomfort during the procedure. Some patients may experience soreness at the procedure site, post-treatment.",
  },
];

export const nextRadioFrequencyAblationTreatment: Review[] = [
  {
    id: 1,
    name: "",
    reviewText: "",
    postedWhen: "",
    img: "",
    isVideo: true,
    videoUrl: "4gqnr1PAKkM",
  },
  {
    id: 2,
    name: "",
    reviewText: "",
    postedWhen: "",
    img: "",
    isVideo: true,
    videoUrl: "GagaDL-LddA",
  },
  {
    id: 3,
    name: "",
    reviewText: "",
    postedWhen: "",
    img: "",
    isVideo: true,
    videoUrl: "bu6wf4NYpt4",
  },
];

export const ConditionsTreatedCardData: ConditionsTreatedCardDataType[] = [
    {
      heading: "Back Pain",
      listArr: [
        "Osteoarthritis",
        "Herniated discs",
        "Spinal stenosis",
        "Sciatica",
        "Ankylosing spondylitis",
        "Sacroiliitis",
      ],
      icon: Pain1,
    },
    {
      heading: "Knee Pain",
      listArr: [
        "Knee osteoarthritis",
        "Knee bursitis",
        "Kneecap dislocation",
        "ACL/MCL tear",
        "Baker's cysts",
        "Runner's knee",
        "Post-traumatic arthritis",
      ],
      icon: Pain2,
    },
    {
      heading: "Neck Pain",
      listArr: [
        "Cervical spondylosis",
        "Herniated discs",
        "Cervical stenosis",
        "Whiplash",
      ],
      icon: Pain3,
    },
    {
      heading: "Shoulder Pain",
      listArr: [
        "Frozen shoulder",
        "Rotator cuff tendinitis",
        "Brachial plexus injuries",
      ],
      icon: Pain4,
    },
    {
      heading: "Wrist, Elbow And Arm Pain",
      listArr: [
        "Carpal tunnel syndrome",
        "Tennis elbow",
        "Biceps tendonitis",
        "Wrist tendonitis",
        "Ganglion cysts",
      ],
      icon: Pain5,
    },
    {
      heading: "Heel Pain",
      listArr: [
        "Plantar fasciitis",
        "Achilles tendon bursitis",
        "Ankle fractures",
      ],
      icon: Pain6,
    },
    {
      heading: "Head Pain",
      listArr: [
        "Migraine headaches",
        "Cluster headaches",
        "Sinus headaches",
        "Occipital neuralgia",
        "Cervicogenic headaches",
        "Trigeminal neuralgia",
      ],
      icon: Pain7,
    },
    {
      heading: "Hip Pain",
      listArr: ["Piriformis syndrome", "Hip impingement", "Hip bursitis"],
      icon: Pain8,
    },
    {
      heading: "Others",
      listArr: [
        "Cancer pain",
        "Myofascial pain",
        "Fibromyalgia",
        "Post surgical pain",
        "Rheumatoid arthritis",
      ],
      icon: Pain9,
    },
  ];