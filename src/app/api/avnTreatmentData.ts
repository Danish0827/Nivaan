import stopAVNprogression from "../../../public/stopAVNProgression.webp";
import doc2 from "../../../public/desktop/doc-2.webp";
import priyaKumari from "../../../public/priyaKumari.webp";
import rohanSingh from "../../../public/rohanSingh.webp";
import sunitaVerma from "../../../public/sunitaVerma.webp";
import jointPreservation from "../../../public/jointPreservation.webp";
import newHealthyBone from "../../../public/newHealthyBone.webp";
import { Doctor, IconGridData, Review, Treatment, faqData } from "./allTypes";

export const avnDoctorData: Doctor[] = [
    {
      id: 1,
      img: doc2,
      name: "Dr. Naveen Talwar",
      field: "MBBS, MS - Orthopaedics",
      degree: "Orthopaedic Surgeon,",
      experience: "32+",
    },
];

export const avnFaqData: faqData[] = [
    {
      title: "What is AVN?",
      desc: "Avascular Necrosis (AVN), also known as osteonecrosis, is a condition where bone tissue dies due to a lack of blood supply. This can lead to the collapse of the bone, severe pain, and decreased mobility.",
    },
    {
      title: "Who is an ideal candidate for AVN Treatment?",
      desc: "Ideal candidates are those diagnosed early with avascular necrosis, without extensive joint damage, and who are committed to following recommended rehabilitation plans. Non-smokers with good overall health typically see the best results.",
    },
    {
      title: "Can I get back to a normal, active lifestyle?",
      desc: "Yes, within 6-12 weeks one can return to all regular functional activities and exercises. Sports activities can be initiated at 12-24 weeks post treatment depending upon your surgeon’s advice.",
    },
    {
      title: "Is it insurance covered? And how much does this treatment cost?",
      desc: "Nivaan’s AVN treatment is covered under cashless and reimbursement schemes for all major Private/ Government and State Health Insurance Schemes.For this treatment cost please fill the form on this page.",
    },
];

export const avnTreatmentAtNivaan: Treatment = {
    heading: "Nivaan’s Avascular Necrosis Treatment",
    para: "Our AVN treatment uses the patient’s cell and eliminates the need for highly invasive joint replacement surgery",
};

export const avnPatientReview: Review[] = [
    {
      id: 1,
      name: "Sunita Verma",
      reviewText:
        "After AVN diagnosis, I thought my hiking days were over. Nivaan's treatment not only relieved my pain but restored my mobility. Now, I'm hitting the trails with more vigor than ever. Forever thankful!",
      postedWhen: "2 weeks ago",
      img: sunitaVerma,
    },
    {
      id: 2,
      name: "Rohan Singh",
      reviewText:
        "AVN nearly ended my sports career. Thanks to Nivaan's effective treatment, I'm back in the game, stronger and more agile. This care has truly changed my life!",
      postedWhen: "7 weeks ago",
      img: rohanSingh,
    },
    {
      id: 3,
      name: "Priya Kumari",
      reviewText:
        "Faced with AVN, I feared for my active lifestyle. Nivaan’s treatment turned things around—pain gone, movement restored. Now, I'm living fully, grateful for every pain-free day!",
      postedWhen: "1 week ago",
      img: priyaKumari,
    }
];

export const avnTreatmentOutcomes: IconGridData[] = [
    {
      id: 1,
      icon: stopAVNprogression,
      description: "Stopped AVN Progression",
    },
    {
      id: 2,
      icon: newHealthyBone,
      description: "New Healthy Bone Formation",
    },
    {
      id: 3,
      icon: jointPreservation,
      description: "Joint Preservation",
    },
];