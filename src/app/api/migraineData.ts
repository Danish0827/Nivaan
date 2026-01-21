import onr from "../../../public/onr.webp";
import sgb from "../../../public/sgb.webp";
import onb from "../../../public/onb.webp";
import migrainePc from "../../../public/Migraine.webp";
import migraineMobile from "../../../public/migraineMob.webp";
import heartPulseExclamation from "../../../public/heartpulse_exclamation.webp";
import heartPulse from "../../../public/heartpulse.webp";
import settingsHeart from "../../../public/settings_heart.webp";
import { FeatureListCardDataType, FeatureListCardProps, Review, Treatment, TreatmentData, WhatIsCarouselCardType, faqData } from "./allTypes";

export const migraineFaqData: faqData[] = [
    {
      title: "Why choose Nivaan over other hospitals for Migraine treatment?",
      desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of Migraine.",
    },
    {
      title: "Does insurance cover Migraine treatment?",
      desc: "Nivaan collaborates with various insurance providers, and most Migraine treatment procedures are covered under insurance plans.",
    },
    {
      title: "When can one return to work after the treatment procedure?",
      desc: "As most procedures at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
    {
      title: "How long does a Migraine treatment procedure take?",
      desc: "The duration of a Migraine treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
    },
    {
      title: "What is Migraine?",
      desc: "Migraine is a severe, painful headache that can be preceded or accompanied by sensory warning signs such as flashes of light, blind spots, tingling in the arms and legs, nausea, and increased sensitivity to light and sound",
    },
    {
      title: "What are the primary causes of Migraine?",
      desc: "Researchers aren’t sure of the exact cause of migraines, but studies show genetics play a role. When you have a headache, specific nerves in your blood vessels send pain signals to your brain. This releases inflammatory substances into your head’s nerves and blood vessels. It’s unclear why your nerves do that.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?  ",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
    {
      title: "What is the best way to get instant Migraine relief?  ",
      desc: "For immediate relief from Migraine, Nivaan’s pain specialists may suggest treatments like Occipital Ganglion Block, Stellate Ganglion Block, Orbital Nerve Block, administered under local anaesthesia for quick pain relief",
    },
    {
      title: "What are the various Migraine treatments available at Nivaan?",
      desc: "Nivaan offers a range of treatments for Migraine, including lifestyle modifications, physical therapy, medications, and non-invasive procedures. Each treatment plan is customised based on the patient’s specific needs and medical history.",
    },
    {
      title:
        "What are the advantages of non-invasive Migraine treatment procedures?",
      desc: "Migraine treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
    },
    {
      title: "Why should one not delay Migraine treatment?",
      desc: "Delaying migraine treatment can have several negative consequences. Without timely intervention, migraines can become more frequent, severe, and harder to manage. Early treatment, on the other hand, can help reduce the frequency and severity of attacks, improve your quality of life, and potentially decrease the need for acute pain-relief medication, which, if overused, can lead to medication-overuse headaches. Furthermore, untreated migraines can impact daily functioning, affecting your ability to work, study, or engage in social activities. Chronic migraines, if not properly managed, may also lead to complications such as status migrainosus (severe migraines lasting more than 72 hours), increased risk of strokes, and, although rare, heart attacks. Identifying and avoiding triggers, when combined with a suitable treatment plan, can significantly help in managing the condition effectively.",
    },
  ];

  export const migraineHeading: Treatment = {
    heading: "Migraine Treatments at Nivaan",
    para: "We use the most advanced pain-relief technologies to ensure maximum pain relief",
  };
  
  export const migraineTreatmentAtNivan: TreatmentData[] = [
    {
      id: 1,
      name: "Occipital Nerve Radiofrequency Ablation",
      img: onr,
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: [
        "Minimises inflammation",
        "Quick recovery time",
        "Immediate pain relief",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 2,
      name: "Stellate Ganglion Block",
      img: sgb,
      process:
        "The doctor injects a local anaesthetic near the stellate ganglion, a nerve collection in the neck.",
      benefits: [
        "Significant Pain Relief",
        "Decreased Frequency of Migraine",
        "Improved Quality of Life",
      ],
    },
    {
      id: 3,
      name: "Orbital Nerve Block",
      img: onb,
      process:
        "Doctor injects a numbing medication near the nerves to block the pain signals from being sent to the brain.",
      benefits: [
        "Decreased Frequency of Migraine",
        "Significant Pain Relief",
        "Minimises inflammation",
      ],
    },
  ];
  
  export const WhatIsMigraineCarouselCardData: WhatIsCarouselCardType[] = [
    {
      id: 1,
      heading: "What are the common causes of Migraine?",
      icon: heartPulseExclamation,
      para: "Migraine is caused due to multiple reasons. Some on them are -",
      listArr: [
        {
          title: "Genetic Factors:",
          desc: "A significant number of individuals with migraines have a family history of the condition, suggesting that genetics play a crucial role.",
        },
        {
          title: "Environmental Triggers:",
          desc: "Various environmental factors can trigger migraines, including stress, changes in weather, and exposure to loud noises or bright lights.",
        },
        {
          title: "Hormonal Changes:",
          desc: "In women, fluctuations in hormone levels, such as those occurring during menstruation, pregnancy, or menopause, can trigger migraines",
        },
      ],
    },
    {
      id: 2,
      heading: "How is Migraine diagnosed?",
      icon: heartPulse,
      para: "At Nivaan, a holistic approach is taken, where a team of pain specialists and physiotherapists evaluate the patient. The following mediums help diagnose a patient with Migraine -",
      listArr: [
        { title: "", desc: "Medical history" },
        { title: "", desc: "Physical Examination" },
        { title: "", desc: "Imaging Tests like X-ray, MRI, or CT scan" },
      ],
    },
    {
      id: 3,
      heading: "What are the various Migraine treatment options available?",
      icon: settingsHeart,
      para: "Nivaan’s team provides a treatment plan that combines physical therapy, medical management, and non-surgical interventions. Non-surgical treatment options include -",
      listArr: [
        { title: "", desc: "Occipital Ganglion Block" },
        { title: "", desc: "Stellate Ganglion Block" },
        { title: "", desc: "Orbital Nerve Block" },
      ],
    },
  ];

  export const migraineWhatisProps = {
    heading: "What is Migraine?",
    ImgSrc: migrainePc,
    ImgSrcMob: migraineMobile,
    hideImageOverlayText: true,
  
    ImgTxt:
      "Migraine is a severe, painful headache that can be preceded or accompanied by sensory warning signs such as flashes of light, blind spots, tingling in the arms and legs, nausea, and increased sensitivity to light and sound",
    cardData: WhatIsMigraineCarouselCardData,
  };
  
  export const migraineFeatureListCard1: FeatureListCardDataType[] = [
    { id: 1, desc: "Long-lasting pain relief" },
    { id: 2, desc: "1:1 personalised care" },
    { id: 3, desc: "30-60 minutes daycare procedures" },
    { id: 4, desc: "US FDA approved treatments" },
  ];
  
  export const migraineFeatureListCard2: FeatureListCardDataType[] = [
    { id: 1, desc: "Persistent headache" },
    { id: 2, desc: "Increased sensitivity to light & sound" },
    { id: 3, desc: "Nausea or dizziness" },
    { id: 4, desc: "Significant impact on life" },
  ];
  
  export const migraineReview: Review[] = [
    {
      id: 1,
      name: "",
      reviewText: "",
      postedWhen: "",
      img: "",
      isVideo: true,
      videoUrl: "c_hExlsOhj8",
    },
  ];
  
  export const migraineFeatureListCardWithTitle1: FeatureListCardProps = {
    title: "Why opt for Nivaan’s Migraine treatment?",
    data: migraineFeatureListCard1,
  };
  
  export const migraineFeatureListCardWithTitle2: FeatureListCardProps = {
    title: "When does one get Migraine treatment?",
    data: migraineFeatureListCard2,
  };