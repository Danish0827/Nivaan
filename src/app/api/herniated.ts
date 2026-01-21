import herni1 from "../../../public/herniatedTreatment.webp";
import herniTesti1 from "../../../public/herniTest1.webp";
import herniTesti2 from "../../../public/herniTesti2.webp";
import herniTesti3 from "../../../public/herniTesti3.webp";
import treatment1 from "../../../public/desktop/treatment-1.webp";
import treatment2 from "../../../public/desktop/treatment-2.webp";
import { Review, Treatment, TreatmentData, faqData } from "./allTypes";

// Herniated Data
export const herniatedPatientReviewData: Review[] = [
    {
      id: 1,
      name: "Naresh Shukla",
      reviewText:
        "“I got relief from my herniated disc pain without surgery with Nivaan’s RFA procedure. The procedure was simple yet changed my life forever. Thanks, Nivaan for eliminating pain from my life.”",
      postedWhen: "3 weeks ago",
      img: herniTesti1,
    },
    {
      id: 2,
      name: "Pramod",
      reviewText:
        "“I finally got relief from my back pain with Nivaan’s Nerve Block procedure. I still cannot believe I got rid of herniated disc pain without any surgery, thanks Nivaan.”",
      postedWhen: "5 weeks ago",
      img: herniTesti2,
    },
    {
      id: 3,
      name: "Sarita",
      reviewText:
        "”Surgery felt like the only option for my herniated disc.When I heard about Nivaan's non-surgical treatment I decided to try it. Their RFA procedure really helped me with the pain.”",
      postedWhen: "7 weeks ago",
      img: herniTesti3,
    },
  ];

  export const herniatedFaqData: faqData[] = [
    {
      title: "What is Herniated Disc?",
      desc: "Disk herniation is most often the result of a gradual, aging-related wear and tear called disk degeneration. As people age, the disks become less flexible and more prone to tearing or rupturing with even a minor strain or twist.",
    },
    {
      title: "What are the primary causes of Herniated Disc?",
      desc: "Primary causes for Herniated Disc include weight gain, ageing, joint injuries, medical disorders that affect joints, and genetic factors.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "A pain specialist, physiotherapist, nutritionist, mindset counsellor, and care manager are involved in creating a treatment plan after proper patient evaluation and discussion among the team.",
    },
    {
      title: "What is the best way to get instant Herniated Disc pain relief?",
      desc: "If medical management is not working, pain specialist doctors suggest a nerve block, radiofrequency ablation & pain Injections. Once administered, these procedures are performed under local anaesthesia and immediately start relieving pain.",
    },
    {
      title:
        "What are the various Herniated Disc treatments available at Nivaan?",
      desc: "Herniated Disc can be managed through lifestyle changes, physical therapy, medicines, and various non-invasive procedures. At Nivaan, a pain specialist doctor and physiotherapist understand the patient’s chief complaint, and medical history and then develop a comprehensive, tailor-made Herniated Disc treatment plan.",
    },
    {
      title:
        "What are the advantages of Herniated Disc pain treatment procedures?",
      desc: "Herniated Disc treatment procedures are safe and come with minimal to no side effects. Additionally, one can experience pain relief from these procedures almost immediately. These procedures are performed by trained pain specialists under local anaesthesia with x-ray/ultrasound guidance in a clean, sterile environment.",
    },
    {
      title: "How long does a Herniated Disc pain treatment procedure take?",
      desc: "A Herniated Disc treatment procedure can take anywhere from 30-40 minutes, depending on the type of procedure.",
    },
    {
      title: "Does insurance cover Herniated Disc treatment?",
      desc: "Nivaan works with various providers to have most of its treatment procedures covered under insurance.",
    },
    {
      title: "When can one join work after the treatment procedure?",
      desc: "Since Herniated Disc pain treatments are daycare procedures, one can join work the next day. However, the doctor may advise taking it lightly for a few days for proper healing.",
    },
  ];
  
  export const herniatedHeading: Treatment = {
    heading: "Herniated Disc Treatments at Nivaan",
    para: "We use the most advanced pain-relief technologies to ensure  maximum pain relief",
  };
  
  export const herniatedTreatmentAtNivan: TreatmentData[] = [
    {
      id: 1,
      name: "Endoscopic Discectomy",
      img: herni1,
      process:
        "Doctor makes a key-hole incision to remove herniated disc material with the help of an endoscope.",
      benefits: [
        "Much safer than other surgeries",
        "Small incision",
        "Minimal scar tissue formation",
        "No damage to bones and muscles",
      ],
    },
    {
      id: 2,
      name: "Nerve Blocks",
      img: treatment1,
      process:
        "A numbing medication is injected near nerves to block the pain signals from being sent to the brain. ",
      benefits: [
        "Provides immediate & long-term relief",
        "Reduces inflammation",
        "Helps with additional medical care",
      ],
    },
    {
      id: 3,
      name: "Radiofrequency Ablation",
      img: treatment2,
      process: "Radiofrequency waves are used to eliminate pain sensations.",
      benefits: [
        "Minimal recovery time",
        "Instant pain relief",
        "Reduces reliance on painkillers",
      ],
    },
  ];

export const herniatedHeader: Treatment = {
    heading: "Osteoarthritis Treatments at Nivaan",
    para: "We use the most advanced pain-relief technologies to ensure  maximum pain relief",
  };