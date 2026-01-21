import { FeatureListCardDataType, Treatment ,TreatmentData,WhatIsCarouselCardType} from "./allTypes";
import heartPulseExclamation from "../../../public/heartpulse_exclamation.webp";
import heartPulse from "../../../public/heartpulse.webp";
import settingsHeart from "../../../public/settings_heart.webp";
import prp from "../../../public/PRP.webp"
import { title } from "process";
 export const AclInjuryFeatureCardData: FeatureListCardDataType[] = [
    
    { id: 1, desc: "Non-surgical ACL Pain Treatments" },
    { id: 2, desc: "30-45 minutes daycare procedures" },
    { id: 3, desc: "Insurance Support" },
    { id: 4, desc: "US FDA approved treatments" },
  ];


   export const AclInjuryFeatureTreatmentCardData: FeatureListCardDataType[] = [
    { id: 1, desc: "After an injury with a pop sound" },
    { id: 2, desc: "Persistent knee instability" },
    { id: 3, desc: "Swelling and limited knee motion" },
    { id: 4, desc: "Pain during daily physical activity" },
  ];
    export const ACLPainTreatmentHeading: Treatment = {
      heading: "ACL Pain Treatment at Nivaan",
      para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
    };

    
    
    export const PrpTreatmentAtNivaan2: TreatmentData[] = [
    {
      id: 1,
      name: "Platelet-Rich Plasma",
      img: prp,
      process:
        "A doctor injects Platelet-Rich Plasma(PRP), derived from the patient's own blood, into the affected ACL area to promote healing and reduce inflammation",
      benefits: [
        "Daycare procedure",
        "Boosts natural tissue repair",
        "Reduces knee pain and swelling",
        "Improves joint function and stability",
        "Minimally invasive with no major side effects"
      ],
    }
  ];

    export const WhatIsACLInjuryPainCarouselCardData: WhatIsCarouselCardType[] = [
    {
      id: 1,
      heading: "What are the common causes of ACL Pain?",
      icon: heartPulseExclamation,
      para: "ACL Pain is caused due to multiple reasons. Some on them are -",
      listArr: [
        {
          title: "",
          desc: "Sudden twisting or pivoting movements.",
        },
        {
          title: "",
          desc: "Abrupt stops or changes in direction during sports.",
        },
        {
          title: "",
          desc: "Landing incorrectly from a jump.",
        },
        {
          title: "",
          desc: "Direct impact or trauma to the knee.",
        },
        {
          title:"",
          desc:"Weak thigh or hip muscles affecting knee stability."
        }
      ],
    },
    {
      id: 2,
      heading: "How is ACL Pain diagnosed?",
      icon: heartPulse,
      para: "At Nivaan, a holistic approach is taken, where a team of pain specialists and physiotherapists evaluate the patient. The following mediums help diagnose a patient with ACL Pain -",
      listArr: [
        { title: "", desc: "Physical examination to check knee stability and swelling." },
        { title: "", desc: "Patient history review of injury and symptoms." },
        { title: "", desc: "MRI scan to confirm ACL tear or injury." },
        {title:"",desc:"X-ray to rule out bone fractures or joint damage."}
      ],
    },
    {
  id: 3,
  heading: "Why shouldn't delay your ACL treatment?",
  icon: settingsHeart,
  para:
    "ACL tears can happen at any age due to stress, sports, or injury. You should get it immediately checked -",
  listArr: [
    { title: "", desc: "Can lead to knee instability and further joint damage." },
    { title: "", desc: "Increases risk of meniscus tears and arthritis." }, 
    { title: "", desc: "May result in muscle weakness and long-term mobility issue." },
    { title: "", desc: "Delayed care often means longer, more complex recovery." },
    { title: "", desc: "Early treatment ensures better outcomes and faster healing." },
  ],
}];

  export const ACLPainTreatmentFaqData = [
    {
      title: "Why choose Nivaan over other hospitals for ACL treatment?",
      desc: "Nivaan excels in providing ACL care through a non-surgical, personalised approach. Our expert team uses advanced techniques like regenerative therapies and targeted pain interventions, ensuring faster recovery, less downtime, and long-term joint health without the need for major surgery.",
    },
    {
      title: "Why should I opt for non-surgical treatment for an ACL injury?",
      desc: "Non-surgical treatments for ACL injuries are ideal for partial tears, early-stage injuries, or patients who want to avoid surgical risks. These options help in pain relief, improving stability, and restoring function, all while preserving the natural structure of the knee.",
    },
    {
      title: "Does insurance cover ACL treatment?",
      desc: "Yes, Nivaan works with a wide range of insurance providers. Most of our ACL treatments, including diagnostic evaluations and non-surgical procedures, are typically covered under standard health insurance policies.",
    },
    {
      title: "When can one return to work after an ACL treatment procedure?",
      desc: "Since most ACL treatments at Nivaan are non-surgical and minimally invasive, patients can often resume desk jobs within a day. However, physical activity and sports may require gradual reintroduction based on individual recovery plans.",
    },
    {
      title: "How long does an ACL treatment procedure take?",
      desc: "Most ACL treatment procedures at Nivaan take between 30 to 45 minutes and are performed on a daycare basis under local anaesthesia.",
    },
    {
      title:"What are the common symptoms of an ACL injury?",
      desc:"Common symptoms include a loud pop during injury, knee instability or buckling, swelling within hours, limited range of motion, and pain during movement, especially while turning or pivoting."
    },
    {
      title: "What are the primary causes of ACL injuries?",
      desc: "ACL injuries commonly occur during sports or physical activity that involves sudden stops, jumping, or changes in direction. Other causes include falls, direct trauma, or improper landing mechanics.",
    },
    {
      title: "What are the advantages of non-invasive ACL treatment procedures?",
      desc: "These procedures are low-risk, quick, and effective for managing ACL-related pain and instability. They require no hospital stay, have minimal recovery time, and allow patients to maintain mobility without major disruption to daily life.",
    },
    {
      title:
        "Why should one not delay ACL treatment?",
      desc: "Delaying ACL treatment can lead to chronic instability, further joint damage, cartilage wear, and long-term issues like osteoarthritis. Early intervention ensures better outcomes and helps maintain knee function and quality of life.",
    },
    {
      title: "Who is involved in the diagnosis and treatment processes at Nivaan? ",
      desc: " Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
  ];