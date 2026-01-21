import { Review, faqData,faqArrData } from "./allTypes";
import RiyaKumari from "../../../public/desktop/kneepainnewmen_review1.webp";
import Parineeti from "../../../public/desktop/kneepainnewmen_review2.webp";
import fiveStar from "../../../public/fiveStar.webp";
import fourStar from "../../../public/fourStar.webp";

export const KneePainElderlyWomenReviewData: Review[] = [
    {
      id: 1,
      name: "Parineeti",
      reviewText:
        '“I was suffering with my knee and lower back pain last 2-3 years for which I consulted Nivaan care team. Dr Ritu had been very supportive in treating me."',
      postedWhen: "1 week ago",
      img: Parineeti,
  
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 2,
      name: "Riya Kumari",
      reviewText:
        '"I came to Nivaan with my mother, she was suffering with severe knee pain, because of the treatment plan given by Dr Rohit Gulati she is feeling alot better and is happy doing her daily chores."',
      postedWhen: "5 weeks ago",
      img: RiyaKumari,
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
      videoUrl: "viRBUk0uICQ",
    },
  ];

export const kneePainFaqData: faqData[] = [
    {
      title: "Why choose Nivaan over other hospitals for knee pain treatment?",
      desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of knee pain.",
    },
    {
      title: "Why should I not opt for surgery for knee pain?",
      desc: "Non-surgical treatments for knee pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
    },
    {
      title: "Does insurance cover knee pain treatment?",
      desc: "Nivaan collaborates with various insurance providers, and most knee pain treatment procedures are covered under insurance plans.",
    },
    {
      title: "When can one return to work after the treatment procedure?",
      desc: "As most knee pain treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
    },
    {
      title: "How long does a knee pain treatment procedure take?",
      desc: "The duration of a knee pain treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
    },
    {
      title: "What is knee pain?",
      desc: "Knee pain is discomfort or pain in the knee area resulting from conditions such as injuries, arthritis, mechanical problems, or overuse. Symptoms can include pain, swelling, stiffness, and reduced mobility.",
    },
    {
      title: "What are the primary causes of knee pain?",
      desc: "Primary causes of knee pain include arthritis (like osteoarthritis), sports injuries, repetitive motion injuries, obesity, ageing, and certain medical conditions that affect the joints.",
    },
    {
      title:
        "Who is involved in the diagnosis and treatment processes at Nivaan?",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    },
    {
      title: "What is the best way to get instant knee pain relief?",
      desc: "For immediate relief from knee pain, Nivaan’s pain specialists may suggest treatments like Genicular Nerve Block, Radiofrequency Ablation, Prolotherapy, Ozone Injection, or Intra Articular Injection, administered under local anaesthesia for quick pain relief.",
    },
    {
      title: "What are the various knee pain treatments available at Nivaan?",
      desc: "Nivaan offers a range of treatments for knee pain, including lifestyle modifications, physical therapy, medications, and non-invasive procedures. Each treatment plan is customised based on the patient’s specific needs and medical history.",
    },
    {
      title:
        "What are the advantages of non-invasive knee pain treatment procedures?",
      desc: "Knee pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
    },
    {
      title: "Why should one not delay knee pain treatment?",
      desc: "One should avoid delaying knee pain treatment to avoid further damage to the bones, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
    },
  ];


  export const PhysioFaqData: faqData[] = [
    {
      title: "How is physiotherapy at Nivaan different?",
      desc: "It is Superspecialist-guided with personalised plans, unlike generic exercises at regular centres.",
    },
    {
      title: "Who designs the treatment plan?",
      desc: "Our Orthopedic surgeon and pain management specialists design your treatment plan. Physiotherapists then deliver it under supervision.",
    },
    {
      title: "How long before I see results?",
      desc: "Most patients notice improvement within 2–4 weeks of consistent sessions.",
    },
    {
      title: "Does physiotherapy hurt?",
      desc: "No. Techniques are gentle. Mild soreness may occur initially, but it resolves quickly.",
    },
    {
      title: "Can physiotherapy prevent surgery?",
      desc: "In many cases, yes. With correct guidance and consistency, physiotherapy can reduce pain, improve mobility, and help avoid surgery.",
    },
    {
      title: "How do you prevent pain from coming back?",
      desc: "Plans include strengthening, posture correction, and ergonomic advice to reduce recurrence.",
    },
    {
      title: "What conditions do you treat?",
      desc: "Chronic back, neck, knee, shoulder, hip pain, arthritis, nerve pain, sports injuries, and post-surgical recovery.",
    },
    
  ];


  export const PhysioReviewData: Review[] = [
    {
      id: 1,
      name: "Savitri Kumari, 61 yrs",
      designation : "Homemaker",
      reviewText:
        "I was struggling with knee pain for years, and medicines were only giving me short-term relief. At Nivaan, the doctor recommended a plan combining manual therapy and strengthening exercises. Within a few weeks, my stiffness reduced, and I could climb stairs without hesitation.",
      postedWhen: "23/08/24",
      img: fiveStar,
      isFourStar: false,
    },
    {
      id: 2,
      name: "Ramesh Verma, 55 yrs",
      designation : "Businessman",
      reviewText:
        "Chronic back pain was affecting my work and sleep. At Nivaan, my physiotherapy included dry needling and electrotherapy along with posture correction training. Within a month, I noticed a big improvement in my mobility and energy levels.",
      postedWhen: "08/09/24",
      img: fiveStar,
      isFourStar: false,
    },
    {
      id: 3,
      name: "Anita Sharma, 48 yrs",
      designation : "Teacher",
      reviewText:
        "My frozen shoulder made even simple tasks painful. The physiotherapy team used joint mobilisation, cupping therapy, and specific exercises to strengthen my rotator cuff. Now I can raise my arm fully, and daily chores don’t feel like a struggle anymore.",
      postedWhen: "22/06/25",
      img: fourStar,
      isFourStar: true,
    },
    {
      id: 4,
      name: "Rekha Singh, 65 yrs",
      designation : "Retired",
      reviewText:
        "After my knee replacement surgery, I was advised to do physiotherapy at Nivaan. The physiotherapists were attentive, and the doctor checked in regularly to track my recovery. Thanks to this structured program, I can now walk long distances without discomfort.",
      postedWhen: "01/10/22",
      img: fiveStar,
      isFourStar: true,
    },
  ];

  export const KneePainReviewData: Review[] = [
    {
      id: 1,
      name: "Navya Sood",
      reviewText:
        "My experience was fulfilling!  My doctor was knowledgeable and provided me, personalised treatment. Clinic was clean and well-equipped, making each session comfortable. I highly recommend this clinic to anyone in need of top-notch physiotherapy care.",
      postedWhen: "28/03/23",
      img: fiveStar,
      isFourStar: false,
    },
    {
      id: 2,
      name: "Rajesh Mehta",
      reviewText:
        "My hip pain journey ended with Dr. Gulati at SAMA. His approach to treatment was transformative. The entire process, from consultation to recovery, was smooth, and his team's support was outstanding",
      postedWhen: "03/08/23",
      img: fiveStar,
      isFourStar: false,
    },
    {
      id: 3,
      name: "Sunita Krishnan",
      reviewText:
        "Hip pain had become a part of my life until I met Dr. Pushpinder at Gauri Hospital. His effective treatment plan helped me return to my normal life. Thanks Nivaan",
      postedWhen: "21/05/23",
      img: fourStar,
      isFourStar: true,
    },
    {
      id: 4,
      name: "Pooja Sharma",
      reviewText:
        "Brilliant team - extremely helpful and caring. The doctor found the exact cause of my hip pain, which other doctors had failed to do. My hip pain is now much improved.",
      postedWhen: "18/09/23",
      img: fiveStar,
      isFourStar: false,
    },
    {
      id: 5,
      name: "Anita Desai",
      reviewText:
        "As a senior, I feared hip surgery, but Dr. Pushpinder at Gauri Hospital offered a safer alternative. His treatment was effective and the care I received was very good.",
      postedWhen: "30/11/23",
      img: fourStar,
      isFourStar: true,
    },
  ];




  export const kneeResurfaceFaqData: faqData[] = [
    {
      title: "How is knee resurfacing different from total knee replacement?",
      desc: "Knee resurfacing treats only the damaged part of the joint, preserving natural ligaments and bone. This results in faster recovery, more natural movement, and fewer long-term complications.",
    },
    {
      title: "Who is the right candidate for knee resurfacing?",
      desc: "Patients with arthritis confined to one side of the knee, who have not improved with physiotherapy or medicines, are best suited for resurfacing.",
    },
    {
      title: "Is the procedure safe?",
      desc: "Yes. Nivaan uses US FDA-approved implants and minimally invasive techniques, ensuring safety and long-term success",
    },
    {
      title: "How soon can I walk after the procedure?",
      desc: "Most patients start walking the same or next day, with support, and return to routine activities in 2–3 weeks.",
    },
    {
      title: "Is knee resurfacing covered under insurance?",
      desc: "Yes. Most insurance policies cover resurfacing just like other joint replacement procedures. Our team provides full support for claims.",
    },
    {
      title: "How long does the procedure take?",
      desc: "Typically, the procedure takes 45–60 minutes.",
    },
    {
      title: "Why should I not delay treatment?",
      desc: "Delaying may worsen arthritis and spread to other compartments, eventually requiring total knee replacement instead of resurfacing.",
    },
    {
      title:"Who is involved in the diagnosis and treatment processes at Nivaan? ",
      desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
    }
  ];


  export const spineData: faqArrData[] = [
    {
      title: "What are the Causes of Spine Problems leading to Endoscopic Treatment?",
      slug:"",
      desc : [
        "Lumbar disc herniation or “slipped disc” pressing on nerves",
        "Age-related degeneration or ligament thickening causing stenosis",
        "Recurrent back or leg pain despite medicines or physiotherapy",
        "Post-surgical pain or failed back procedure syndrome (FBSS)",
        "Ignoring initial symptoms until it is too late",
        "Poor Posture",
      ],
    },
    {
      title: "How do we diagnose?",
      slug: "At Nivaan, we conduct a comprehensive evaluation to identify the exact source of your pain before recommending any procedure:",
      desc : [
        "Clinical Examination: Nerve tension, reflexes, posture, pain zones",
        "MRI/CT Scan: To locate disc, nerve, or canal compression",
        "Medical History Review: Onset, aggravating factors, prior treatments"
      ],
    },
    {
      title: "Why shouldn’t you delay Endoscopic Spine Treatment?",
      slug:"",
      desc : [
        "Delay may lead to permanent nerve damage or muscle weakness",
        "Persistent pain can cause loss of mobility and sleep disturbances",
        "May progress to needing open spine surgery",
        "Early intervention ensures faster recovery and better long-term outcomes"
      ],
    },
    {
      title: "How is endoscopic spine surgery different from open spine surgeries?",
      slug:" Endoscopic spine procedure treats only the affected area through a tiny tube, without cutting muscles or bones. It results in faster recovery, minimal pain, and far fewer complications compared to traditional open surgery.",
      desc : [],
    },
    {
      title: "Who is the right candidate for endoscopic spine surgeries?",
      slug:"Patients with disc herniation, spinal stenosis, or sciatica who haven’t improved with medicines or physiotherapy are ideal candidates. It’s also suitable for elderly or high-risk patients due to its minimally invasive approach.",
      desc : [],
    },
    {
      title: "Is the procedure safe?",
      slug:"Yes. It’s performed under local or regional anesthesia using advanced endoscopic visualization, ensuring safety, precision, and minimal blood loss. The risk of infection or complications is extremely low. On demand, it can also be done under general anesthesia.",
      desc : [],
    },
    {
      title: "How soon can I walk after the procedure?",
      slug:"Most patients begin walking within a few hours and can resume light activities the same day. Office or travel routines are usually possible within two to three weeks.",
      desc : [],
    },
    {
      title: "Is endoscopic spine procedure covered under insurance?",
      slug:"Yes. Most insurance providers cover this procedure under “minimally invasive spine procedure” or “spine decompression” categories. Nivaan’s team assists with all documentation and approvals.",
      desc : [],
    },
    {
      title: "How long does the procedure take?",
      slug:"Typically 60–90 minutes, depending on the level and complexity of nerve compression. Hospital stay is generally 24–48 hours.",
      desc : [],
    },
    {
      title: "Why should I not delay treatment?",
      slug:"Delaying care may cause nerve damage, weakness, or chronic pain that becomes harder to reverse. Early treatment ensures complete recovery and prevents disability.",
      desc : [],
    },
    {
      title: "Who is involved in the diagnosis and treatment process at Nivaan?",
      slug:"Diagnosis and treatment are led by Dr. Sidharth Verma, Interventional Pain Physician and Regional Clinical Lead (Mumbai), along with a multidisciplinary team including radiologists, physiotherapists, and spine care specialists. If required our team also has access to leading spine surgeons, neurosurgeons, and neurospecialists.",
      desc : [],
    }

    
  ];